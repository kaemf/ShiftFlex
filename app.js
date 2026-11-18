/**
 * ShiftFlex — Mobile-First 3-Shift Schedule Application (3 műszak)
 * Unified timeline across 2026 H2 (Jul–Dec 2026) and 2027 H1 (Jan–Jun 2027)
 */
(function () {
  'use strict';

  const periodsRegistry = window.SCHEDULE_PERIODS;
  if (!periodsRegistry || !periodsRegistry.periods) {
    console.error('SCHEDULE_PERIODS is missing.');
    return;
  }

  const MONTH_SHORT_RU = {
    1: 'янв', 2: 'фев', 3: 'мар', 4: 'апр', 5: 'май', 6: 'июн',
    7: 'июл', 8: 'авг', 9: 'сен', 10: 'окт', 11: 'ноя', 12: 'дек'
  };

  const SHIFT_ROMAN = { 1: 'I', 2: 'II', 3: 'III' };
  const SHIFT_SHORT_RU = { 1: 'Утро', 2: 'Вечер', 3: 'Ночь' };
  const SHIFT_FULL_TIME = { 1: '06:00–14:00', 2: '14:00–22:00', 3: '22:00–06:00' };
  const SHIFT_COMPACT_TIME = { 1: '06–14', 2: '14–22', 3: '22–06' };

  function pad2(num) {
    return String(num).padStart(2, '0');
  }

  function formatLocalISO(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
  }

  function getTodayISO() {
    return formatLocalISO(new Date());
  }

  function getOffsetISO(baseDate, offsetDays) {
    const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + offsetDays);
    return formatLocalISO(d);
  }

  function formatDurationHMS(totalSeconds) {
    const safe = Math.max(0, Math.floor(totalSeconds));
    const h = Math.floor(safe / 3600);
    const m = Math.floor((safe % 3600) / 60);
    const s = safe % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }

  function clampDayWindowCount(val, fallback) {
    const parsed = parseInt(val, 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.min(2, Math.max(0, parsed));
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shiftGlyphSvg(type) {
    if (type === 1) {
      // Morning sunrise
      return '<svg class="shift-glyph s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M4.93 10.93l1.41 1.41M2 18h20M17.66 12.34l1.41-1.41M16 18a4 4 0 0 0-8 0"></path></svg>';
    }
    if (type === 2) {
      // Afternoon sun
      return '<svg class="shift-glyph s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v2M12 19v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>';
    }
    if (type === 3) {
      // Night moon
      return '<svg class="shift-glyph s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
    }
    if (type === 'hol') {
      // Holiday star
      return '<svg class="shift-glyph hol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 3 14.9 8.9 21.4 9.8 16.7 14.4 17.8 20.8 12 17.8 6.2 20.8 7.3 14.4 2.6 9.8 9.1 8.9 12 3"></polygon></svg>';
    }
    // Day off dash
    return '<svg class="shift-glyph off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="12" x2="18" y2="12"></line></svg>';
  }

  /* ==========================================================================
     Unified Timeline & Year/Month Indexes (2026 & 2027)
     ========================================================================== */
  const allTimelineDays = [];
  const allDaysByDate = {};
  const allMonthsByKey = {};
  const monthsByYear = { 2026: [], 2027: [] };
  const daysByYearMonth = {};

  ['2026-H2', '2027-H1'].forEach(pid => {
    const period = periodsRegistry.periods[pid];
    if (!period) return;
    period.months.forEach(m => {
      allMonthsByKey[`${m.year}-${m.num}`] = m;
      if (!monthsByYear[m.year]) monthsByYear[m.year] = [];
      monthsByYear[m.year].push(m);
    });
    period.days.forEach(d => {
      if (!allDaysByDate[d.date]) {
        allTimelineDays.push(d);
      }
      allDaysByDate[d.date] = d;
      const ymKey = `${d.year}-${d.month}`;
      if (!daysByYearMonth[ymKey]) daysByYearMonth[ymKey] = [];
      daysByYearMonth[ymKey].push(d);
    });
  });

  allTimelineDays.sort((a, b) => a.date.localeCompare(b.date));

  function buildShiftIntervals() {
    const intervals = [];
    allTimelineDays.forEach(d => {
      if (d.status !== 'workday' && d.status !== 'transferred_workday') return;

      const s1 = d.shifts && d.shifts.shift1_morning;
      const s2 = d.shifts && d.shifts.shift2_afternoon;
      const s3 = d.shifts && d.shifts.shift3_night;

      if (s1) {
        intervals.push({
          id: `${d.date}-1`,
          date: d.date,
          day: d,
          shiftNum: 1,
          brigade: s1,
          timeLabel: SHIFT_FULL_TIME[1],
          start: new Date(d.year, d.month - 1, d.day, 6, 0, 0, 0),
          end: new Date(d.year, d.month - 1, d.day, 14, 0, 0, 0)
        });
      }
      if (s2) {
        intervals.push({
          id: `${d.date}-2`,
          date: d.date,
          day: d,
          shiftNum: 2,
          brigade: s2,
          timeLabel: SHIFT_FULL_TIME[2],
          start: new Date(d.year, d.month - 1, d.day, 14, 0, 0, 0),
          end: new Date(d.year, d.month - 1, d.day, 22, 0, 0, 0)
        });
      }
      if (s3) {
        intervals.push({
          id: `${d.date}-3`,
          date: d.date,
          day: d,
          shiftNum: 3,
          brigade: s3,
          timeLabel: SHIFT_FULL_TIME[3],
          start: new Date(d.year, d.month - 1, d.day, 22, 0, 0, 0),
          end: new Date(d.year, d.month - 1, d.day + 1, 6, 0, 0, 0)
        });
      }
    });
    return intervals;
  }

  const allShiftIntervals = buildShiftIntervals();

  /* ==========================================================================
     Active Date & State Initialization
     ========================================================================== */
  function resolveActiveDateTarget() {
    const todayISO = getTodayISO();
    const todayRecord = allDaysByDate[todayISO];
    if (todayRecord) {
      return {
        year: todayRecord.year,
        month: todayRecord.month,
        date: todayRecord.date,
        isoWeek: todayRecord.iso_week
      };
    }
    const fallbackDay = allTimelineDays[0];
    return {
      year: fallbackDay.year,
      month: fallbackDay.month,
      date: fallbackDay.date,
      isoWeek: fallbackDay.iso_week
    };
  }

  const storedBrigade = localStorage.getItem('shift_brigade');
  const initialBrigade = ['A', 'B', 'C'].includes(storedBrigade) ? storedBrigade : 'A';
  const initialPastDays = clampDayWindowCount(localStorage.getItem('shift_past_days'), 1);
  const initialFutureDays = clampDayWindowCount(localStorage.getItem('shift_future_days'), 2);
  const initialTheme = localStorage.getItem('shift_theme') || (
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );
  const initialTarget = resolveActiveDateTarget();

  // Tab 1 ("dashboard") always opens by default on page load
  const state = {
    view: 'dashboard',
    brigade: initialBrigade,
    pastDays: initialPastDays,
    futureDays: initialFutureDays,
    theme: initialTheme,
    calendarYear: initialTarget.year,
    calendarMonth: initialTarget.month,
    calendarScope: 'MINE',
    activeModalDay: null,
    onboardingDraft: {
      brigade: initialBrigade,
      pastDays: initialPastDays,
      futureDays: initialFutureDays
    }
  };

  let currentNextInterval = null;
  let currentFocusDay = null;
  let lastRenderedTodayISO = getTodayISO();
  let liveTimerId = null;
  let calScrollSyncTimer = null;
  let activeWeekAnimRaf = null;
  let isProgrammaticMonthScroll = false;

  /* ==========================================================================
     DOM Cache
     ========================================================================== */
  const el = {
    navTabs: document.querySelectorAll('.nav-tab'),
    headerBrigadeBtn: document.getElementById('headerBrigadeBtn'),
    headerBrigadeLabel: document.getElementById('headerBrigadeLabel'),
    settingsBtn: document.getElementById('settingsBtn'),

    // Tab 1
    dashboardView: document.getElementById('dashboardView'),
    liveHeroCard: document.getElementById('liveHeroCard'),
    liveStatusBadge: document.getElementById('liveStatusBadge'),
    liveClock: document.getElementById('liveClock'),
    liveTimerCaption: document.getElementById('liveTimerCaption'),
    liveNextCountdown: document.getElementById('liveNextCountdown'),
    liveHeroSub: document.getElementById('liveHeroSub'),
    cycleTrack: document.getElementById('cycleTrack'),
    btnNextShiftIcs: document.getElementById('btnNextShiftIcs'),
    btnNextShiftModal: document.getElementById('btnNextShiftModal'),

    dayWindowHint: document.getElementById('dayWindowHint'),
    dayWindowConfigText: document.getElementById('dayWindowConfigText'),
    openWindowSettingsBtn: document.getElementById('openWindowSettingsBtn'),
    dayWindowList: document.getElementById('dayWindowList'),

    // Tab 2
    calendarView: document.getElementById('calendarView'),
    yearButtons: document.querySelectorAll('.year-btn'),
    calBrigadeScopeBtn: document.getElementById('calBrigadeScopeBtn'),
    calScopeLabel: document.getElementById('calScopeLabel'),
    calTodayBtn: document.getElementById('calTodayBtn'),
    calMonthPills: document.getElementById('calMonthPills'),
    calMonthsTrack: document.getElementById('calMonthsTrack'),

    // Onboarding Modal
    onboardingModal: document.getElementById('onboardingModal'),
    onboardBrigadeGroup: document.getElementById('onboardBrigadeGroup'),
    onboardPastGroup: document.getElementById('onboardPastGroup'),
    onboardFutureGroup: document.getElementById('onboardFutureGroup'),
    onboardingSaveBtn: document.getElementById('onboardingSaveBtn'),

    // Settings Modal
    settingsModal: document.getElementById('settingsModal'),
    settingsCloseBtn: document.getElementById('settingsCloseBtn'),
    settingsDoneBtn: document.getElementById('settingsDoneBtn'),
    settingsBrigadeGroup: document.getElementById('settingsBrigadeGroup'),
    settingsPastGroup: document.getElementById('settingsPastGroup'),
    settingsFutureGroup: document.getElementById('settingsFutureGroup'),
    settingsThemeGroup: document.getElementById('settingsThemeGroup'),
    settingsHelpBtn: document.getElementById('settingsHelpBtn'),

    // Day Details Modal
    dayModal: document.getElementById('dayModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalBody: document.getElementById('modalBody'),
    modalDateTitle: document.getElementById('modalDateTitle'),
    modalDateSubtitle: document.getElementById('modalDateSubtitle'),
    modalCopyBtn: document.getElementById('modalCopyBtn'),
    modalIcsBtn: document.getElementById('modalIcsBtn'),

    // Help Modal
    helpModal: document.getElementById('helpModal'),
    helpCloseBtn: document.getElementById('helpCloseBtn'),
    helpOkBtn: document.getElementById('helpOkBtn'),

    toast: document.getElementById('toastNotification')
  };

  /* ==========================================================================
     Theme, Toast & Header Indicators
     ========================================================================== */
  function applyTheme(theme) {
    state.theme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('shift_theme', state.theme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', state.theme === 'dark' ? '#0b0c0e' : '#f4f4f6');
    }

    if (el.settingsThemeGroup) {
      el.settingsThemeGroup.querySelectorAll('.count-pick-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme') === state.theme);
      });
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    if (!el.toast) return;
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.toast.classList.add('hidden');
    }, 2400);
  }

  function updateBrigadeBadges() {
    const b = state.brigade;
    const bLow = b.toLowerCase();

    if (el.headerBrigadeBtn) {
      el.headerBrigadeBtn.className = `brigade-chip is-${bLow}`;
    }
    if (el.headerBrigadeLabel) {
      el.headerBrigadeLabel.textContent = `Бригада ${b}`;
    }

    if (el.calBrigadeScopeBtn && el.calScopeLabel) {
      const isAll = state.calendarScope === 'ALL';
      el.calBrigadeScopeBtn.className = isAll ? 'cal-tool-btn' : `cal-tool-btn is-${bLow}`;
      el.calScopeLabel.textContent = isAll ? 'Все бригады' : `Моя · ${b}`;
    }
  }

  /* ==========================================================================
     Settings & Onboarding Management
     ========================================================================== */
  function applyUserConfig(brigade, pastDays, futureDays) {
    if (['A', 'B', 'C'].includes(brigade)) {
      state.brigade = brigade;
      localStorage.setItem('shift_brigade', brigade);
    }
    state.pastDays = clampDayWindowCount(pastDays, 1);
    state.futureDays = clampDayWindowCount(futureDays, 2);
    localStorage.setItem('shift_past_days', String(state.pastDays));
    localStorage.setItem('shift_future_days', String(state.futureDays));

    updateBrigadeBadges();
    syncSettingsModalUI();
    updateLiveDashboard();
    renderDayWindow();
    if (state.view === 'calendar') {
      renderCalendarYearColumns();
      scrollToMonthColumn(state.calendarMonth, false);
    }
  }

  function syncGroupActive(container, attr, value) {
    if (!container) return;
    container.querySelectorAll('button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute(attr) === String(value));
    });
  }

  function syncSettingsModalUI() {
    syncGroupActive(el.settingsBrigadeGroup, 'data-brigade', state.brigade);
    syncGroupActive(el.settingsPastGroup, 'data-count', state.pastDays);
    syncGroupActive(el.settingsFutureGroup, 'data-count', state.futureDays);
    syncGroupActive(el.settingsThemeGroup, 'data-theme', state.theme);
  }

  function syncOnboardingModalUI() {
    syncGroupActive(el.onboardBrigadeGroup, 'data-brigade', state.onboardingDraft.brigade);
    syncGroupActive(el.onboardPastGroup, 'data-count', state.onboardingDraft.pastDays);
    syncGroupActive(el.onboardFutureGroup, 'data-count', state.onboardingDraft.futureDays);
  }

  function openOnboardingModal() {
    state.onboardingDraft = {
      brigade: state.brigade,
      pastDays: state.pastDays,
      futureDays: state.futureDays
    };
    syncOnboardingModalUI();
    el.onboardingModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function completeOnboarding() {
    localStorage.setItem('shift_onboarded', '1');
    el.onboardingModal.classList.add('hidden');
    document.body.style.overflow = '';
    applyUserConfig(
      state.onboardingDraft.brigade,
      state.onboardingDraft.pastDays,
      state.onboardingDraft.futureDays
    );
    showToast(`Выбрана бригада ${state.brigade}`);
  }

  function openSettingsModal() {
    syncSettingsModalUI();
    el.settingsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSettingsModal() {
    el.settingsModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     View Switching (Tab 1 always opens by default)
     ========================================================================== */
  function setView(viewName) {
    const resolved = viewName === 'calendar' ? 'calendar' : 'dashboard';
    state.view = resolved;

    el.navTabs.forEach(tab => {
      const active = tab.getAttribute('data-view') === resolved;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    el.dashboardView.classList.toggle('hidden', resolved !== 'dashboard');
    el.calendarView.classList.toggle('hidden', resolved !== 'calendar');
    document.body.classList.toggle('calendar-active', resolved === 'calendar');

    if (resolved === 'dashboard') {
      updateLiveDashboard();
      renderDayWindow();
    } else {
      window.scrollTo(0, 0);
      openCalendarDefaultFocus();
    }
  }

  /* ==========================================================================
     TAB 1: Hero Status + 24h Shift Cycle Bar + Day Feed
     ========================================================================== */
  function renderCycleTimeline(now) {
    if (!el.cycleTrack) return;

    const hour = now.getHours();
    const minute = now.getMinutes();

    // A plant shift-day runs 06:00 -> 06:00 next morning
    const shiftDayDate = hour >= 6 ? now : new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const shiftDayISO = formatLocalISO(shiftDayDate);
    const shiftDayRecord = allDaysByDate[shiftDayISO] || null;

    const minutesSinceSixAM = (hour >= 6 ? hour - 6 : hour + 18) * 60 + minute;
    const needlePct = Math.min(99.5, Math.max(0.5, (minutesSinceSixAM / 1440) * 100));

    let activeSeg = 3;
    if (minutesSinceSixAM < 480) activeSeg = 1;
    else if (minutesSinceSixAM < 960) activeSeg = 2;

    const isWorkday = shiftDayRecord &&
      (shiftDayRecord.status === 'workday' || shiftDayRecord.status === 'transferred_workday');

    const segs = [
      { num: 1, b: isWorkday ? shiftDayRecord.shifts.shift1_morning : null },
      { num: 2, b: isWorkday ? shiftDayRecord.shifts.shift2_afternoon : null },
      { num: 3, b: isWorkday ? shiftDayRecord.shifts.shift3_night : null }
    ];

    const segsHtml = segs.map(seg => {
      const cls = ['cycle-seg'];
      if (!seg.b) {
        cls.push('is-off');
        return `<div class="${cls.join(' ')}">${SHIFT_ROMAN[seg.num]} · Вых</div>`;
      }
      cls.push(`s${seg.num}`);
      if (seg.b === state.brigade) cls.push('is-mine');
      if (seg.num === activeSeg) cls.push('is-now');
      return `<div class="${cls.join(' ')}">${SHIFT_ROMAN[seg.num]} · ${escapeHtml(seg.b)}</div>`;
    }).join('');

    el.cycleTrack.innerHTML = `${segsHtml}<div class="cycle-needle" style="left: ${needlePct.toFixed(2)}%"></div>`;
  }

  function updateLiveDashboard() {
    const now = new Date();
    const nowMs = now.getTime();
    const todayISO = formatLocalISO(now);
    const tomorrowISO = getOffsetISO(now, 1);

    if (lastRenderedTodayISO !== todayISO) {
      lastRenderedTodayISO = todayISO;
      renderDayWindow();
      if (state.view === 'calendar') {
        renderCalendarYearColumns();
      }
    }

    if (el.liveClock) {
      const timeStr = `${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
      el.liveClock.textContent = `${now.getDate()} ${MONTH_SHORT_RU[now.getMonth() + 1]}, ${timeStr}`;
    }

    const plantActive = allShiftIntervals.find(
      iv => iv.start.getTime() <= nowMs && nowMs < iv.end.getTime()
    ) || null;

    const brigadeActive = (plantActive && plantActive.brigade === state.brigade)
      ? plantActive
      : null;

    const nextInterval = allShiftIntervals.find(
      iv => iv.start.getTime() > nowMs && iv.brigade === state.brigade
    ) || null;

    currentNextInterval = nextInterval;
    const todayRecord = allDaysByDate[todayISO] || null;
    currentFocusDay = brigadeActive ? brigadeActive.day : (nextInterval ? nextInterval.day : todayRecord);

    const isWorkingNow = Boolean(brigadeActive);

    if (el.liveStatusBadge) {
      el.liveStatusBadge.classList.toggle('is-active', isWorkingNow);
      el.liveStatusBadge.classList.toggle('is-rest', !isWorkingNow);
      el.liveStatusBadge.textContent = isWorkingNow
        ? `На смене · ${SHIFT_ROMAN[brigadeActive.shiftNum]} ${SHIFT_SHORT_RU[brigadeActive.shiftNum]}`
        : (plantActive
          ? `Отдых · на линии ${plantActive.brigade} (${SHIFT_ROMAN[plantActive.shiftNum]})`
          : 'Отдых · завод остановлен');
    }

    if (isWorkingNow) {
      el.liveTimerCaption.textContent = 'До конца смены';

      const remainSec = Math.max(0, Math.floor((brigadeActive.end.getTime() - nowMs) / 1000));
      el.liveNextCountdown.textContent = formatDurationHMS(remainSec);

      const nextText = nextInterval
        ? `Следующая: ${nextInterval.day.date === tomorrowISO ? 'завтра' : `${nextInterval.day.day} ${MONTH_SHORT_RU[nextInterval.day.month]}`} · ${SHIFT_ROMAN[nextInterval.shiftNum]} (${nextInterval.timeLabel})`
        : `Смена ${brigadeActive.timeLabel}`;
      el.liveHeroSub.textContent = nextText;
    } else {
      el.liveTimerCaption.textContent = 'До следующей смены';

      if (nextInterval) {
        const diffSec = Math.max(0, Math.floor((nextInterval.start.getTime() - nowMs) / 1000));
        const days = Math.floor(diffSec / 86400);
        const remSec = diffSec % 86400;
        el.liveNextCountdown.textContent = days > 0
          ? `${days}д ${formatDurationHMS(remSec)}`
          : formatDurationHMS(remSec);

        const d = nextInterval.day;
        let whenDay = `${d.day} ${MONTH_SHORT_RU[d.month]}`;
        if (d.date === todayISO) whenDay = 'Сегодня';
        else if (d.date === tomorrowISO) whenDay = 'Завтра';

        el.liveHeroSub.textContent = `${whenDay}, ${d.weekday_ru.toLowerCase()} · ${SHIFT_ROMAN[nextInterval.shiftNum]} ${SHIFT_SHORT_RU[nextInterval.shiftNum]} (${nextInterval.timeLabel})`;
      } else {
        el.liveNextCountdown.textContent = '—';
        el.liveHeroSub.textContent = 'Нет смен после 30.06.2027';
      }
    }

    const canIcs = Boolean(currentFocusDay && currentFocusDay.brigade_assignments[state.brigade].shift_num > 0);
    el.btnNextShiftIcs.classList.toggle('hidden', !canIcs);
    el.btnNextShiftModal.classList.toggle('hidden', !currentFocusDay);

    renderCycleTimeline(now);
  }

  function renderDayWindow() {
    if (!el.dayWindowList) return;

    const now = new Date();
    const todayISO = formatLocalISO(now);
    const yesterdayISO = getOffsetISO(now, -1);
    const twoDaysAgoISO = getOffsetISO(now, -2);
    const tomorrowISO = getOffsetISO(now, 1);
    const afterTomorrowISO = getOffsetISO(now, 2);

    const todayIdx = allTimelineDays.findIndex(d => d.date === todayISO);
    let daysSlice = [];

    if (todayIdx !== -1) {
      const startIdx = Math.max(0, todayIdx - state.pastDays);
      const endIdx = Math.min(allTimelineDays.length, todayIdx + 1 + state.futureDays);
      daysSlice = allTimelineDays.slice(startIdx, endIdx);
    } else {
      daysSlice = allTimelineDays.slice(0, 1 + state.futureDays);
    }

    if (el.dayWindowConfigText) {
      el.dayWindowConfigText.textContent = `−${state.pastDays} / +${state.futureDays} дн`;
    }
    if (el.dayWindowHint && daysSlice.length > 0) {
      const first = daysSlice[0];
      const last = daysSlice[daysSlice.length - 1];
      if (first.date === last.date) {
        el.dayWindowHint.textContent = `${first.day} ${MONTH_SHORT_RU[first.month]}`;
      } else if (first.month === last.month && first.year === last.year) {
        el.dayWindowHint.textContent = `${first.day}–${last.day} ${MONTH_SHORT_RU[first.month]}`;
      } else {
        el.dayWindowHint.textContent = `${first.day} ${MONTH_SHORT_RU[first.month]} – ${last.day} ${MONTH_SHORT_RU[last.month]}`;
      }
    }

    el.dayWindowList.innerHTML = daysSlice.map(d => {
      const assign = d.brigade_assignments[state.brigade];
      const isPast = d.date < todayISO;
      const isToday = d.date === todayISO;

      let relLabel = d.weekday_ru_full;
      if (isToday) relLabel = 'Сегодня';
      else if (d.date === tomorrowISO) relLabel = 'Завтра';
      else if (d.date === afterTomorrowISO) relLabel = 'Послезавтра';
      else if (d.date === yesterdayISO) relLabel = 'Вчера';
      else if (d.date === twoDaysAgoISO) relLabel = 'Позавчера';

      const itemClasses = ['feed-item'];
      if (isPast) itemClasses.push('is-past');
      if (isToday) itemClasses.push('is-today');

      let glyphHtml = '';
      let shiftTitle = '';
      let timeText = '';
      let tagText = '';

      if (assign && assign.shift_num > 0) {
        glyphHtml = shiftGlyphSvg(assign.shift_num);
        shiftTitle = `${SHIFT_ROMAN[assign.shift_num]} смена · ${SHIFT_SHORT_RU[assign.shift_num]}`;
        timeText = SHIFT_FULL_TIME[assign.shift_num];
        if (d.status === 'transferred_workday') tagText = 'Отработка';
        else if (d.factory_note) tagText = 'Téli leállás';
      } else if (d.status === 'holiday') {
        itemClasses.push('is-holiday');
        glyphHtml = shiftGlyphSvg('hol');
        shiftTitle = d.holiday_name ? d.holiday_name.split('(')[0].trim() : 'Праздник';
        timeText = 'Праздник';
      } else {
        itemClasses.push('is-off');
        glyphHtml = shiftGlyphSvg('off');
        shiftTitle = d.status === 'bridge_day_off' ? 'Мостовой выходной' : 'Выходной';
        timeText = 'Отдых';
      }

      return `
        <article class="${itemClasses.join(' ')}" data-date="${d.date}" role="button" tabindex="0">
          <div class="feed-date-badge">
            <span class="feed-day-num mono">${d.day}</span>
            <span class="feed-day-wd">${escapeHtml(d.weekday_ru.toLowerCase())}</span>
          </div>
          <div class="feed-mid">
            <div class="feed-rel">${escapeHtml(relLabel)}</div>
            <div class="feed-shift-line">
              ${glyphHtml}
              <span class="feed-shift-title">${escapeHtml(shiftTitle)}</span>
            </div>
          </div>
          <div class="feed-right">
            <span class="feed-time mono">${escapeHtml(timeText)}</span>
            ${tagText ? `<span class="feed-note-tag">${escapeHtml(tagText)}</span>` : ''}
          </div>
        </article>
      `;
    }).join('');
  }

  /* ==========================================================================
     TAB 2: Mobile-First Adapted Calendar
     ========================================================================== */
  function syncCalendarTrackHeight() {
    if (!el.calMonthsTrack || state.view !== 'calendar') return;
    const rect = el.calMonthsTrack.getBoundingClientRect();
    const available = Math.floor(window.innerHeight - rect.top - 8);
    el.calMonthsTrack.style.height = `${Math.max(360, available)}px`;
  }

  function openCalendarDefaultFocus() {
    const target = resolveActiveDateTarget();
    state.calendarYear = target.year;
    state.calendarMonth = target.month;
    renderCalendarTab();

    requestAnimationFrame(() => {
      syncCalendarTrackHeight();
      scrollToMonthColumn(target.month, false);
      animateToActiveWeekInMonth(target.year, target.month);
    });
  }

  function setCalendarYear(year) {
    const parsedYear = parseInt(year, 10);
    if (!monthsByYear[parsedYear] || monthsByYear[parsedYear].length === 0) return;

    state.calendarYear = parsedYear;
    const target = resolveActiveDateTarget();
    const hasTodayInYear = target.year === parsedYear;
    state.calendarMonth = hasTodayInYear ? target.month : monthsByYear[parsedYear][0].num;

    renderCalendarTab();

    requestAnimationFrame(() => {
      syncCalendarTrackHeight();
      scrollToMonthColumn(state.calendarMonth, false);
      if (hasTodayInYear) {
        animateToActiveWeekInMonth(parsedYear, state.calendarMonth);
      }
    });
  }

  function renderCalendarTab() {
    el.yearButtons.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-year'), 10) === state.calendarYear);
    });
    updateBrigadeBadges();
    renderCalendarMonthPills();
    renderCalendarYearColumns();
  }

  function renderCalendarMonthPills() {
    if (!el.calMonthPills) return;
    const months = monthsByYear[state.calendarYear] || [];
    const target = resolveActiveDateTarget();

    el.calMonthPills.innerHTML = months.map(m => {
      const isActive = m.num === state.calendarMonth;
      const isRealCurrent = m.year === target.year && m.num === target.month;
      const cls = ['cal-month-pill'];
      if (isActive) cls.push('active');
      if (isRealCurrent) cls.push('is-current-month');
      return `
        <button type="button" class="${cls.join(' ')}" data-cal-month="${m.num}">
          <span>${escapeHtml(m.name_ru)}</span>
        </button>
      `;
    }).join('');

    const activePill = el.calMonthPills.querySelector('.cal-month-pill.active');
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function groupDaysIntoWeeks(daysList) {
    const weeks = [];
    let current = [];
    let currentIso = daysList.length ? daysList[0].iso_week : 1;

    daysList.forEach(d => {
      if (d.weekday_idx === 0 && current.length > 0) {
        weeks.push({ isoWeek: currentIso, days: current });
        current = [];
      }
      currentIso = d.iso_week;
      current.push(d);
    });
    if (current.length > 0) {
      weeks.push({ isoWeek: currentIso, days: current });
    }
    return weeks;
  }

  function getWeekSummary(weekDays) {
    if (state.calendarScope === 'ALL') {
      return { text: '3 смены', shiftNum: null };
    }
    const workShifts = new Set();
    weekDays.forEach(d => {
      const sn = d.brigade_assignments[state.brigade].shift_num;
      if (sn > 0) workShifts.add(sn);
    });

    if (workShifts.size === 1) {
      const sn = Array.from(workShifts)[0];
      return {
        text: `${SHIFT_SHORT_RU[sn]} ${SHIFT_COMPACT_TIME[sn]}`,
        shiftNum: sn
      };
    }
    if (workShifts.size === 0) {
      return { text: 'Выходные', shiftNum: null };
    }
    return { text: `${workShifts.size} смены`, shiftNum: null };
  }

  function renderCalendarYearColumns() {
    if (!el.calMonthsTrack) return;

    const months = monthsByYear[state.calendarYear] || [];
    const todayISO = getTodayISO();

    el.calMonthsTrack.innerHTML = months.map((m, idx) => {
      const mDays = daysByYearMonth[`${m.year}-${m.num}`] || [];
      const weeks = groupDaysIntoWeeks(mDays);

      const shiftCount = mDays.filter(d => d.brigade_assignments[state.brigade].shift_num > 0).length;
      const monthSub = state.calendarScope === 'ALL'
        ? `Норма ${m.kot_days} дн · ${m.kot_hours} ч`
        : `Бригада ${state.brigade}: ${shiftCount} смен · ${shiftCount * 8} ч`;

      const prevDisabled = idx === 0 ? 'disabled' : '';
      const nextDisabled = idx === months.length - 1 ? 'disabled' : '';
      const prevNum = idx > 0 ? months[idx - 1].num : '';
      const nextNum = idx < months.length - 1 ? months[idx + 1].num : '';

      const weeksHtml = weeks.map(wk => {
        const hasToday = wk.days.some(d => d.date === todayISO);
        const firstDay = wk.days[0];
        const lastDay = wk.days[wk.days.length - 1];
        const monthShort = MONTH_SHORT_RU[m.num] || '';
        const rangeText = firstDay.day === lastDay.day
          ? `${firstDay.day} ${monthShort}`
          : `${firstDay.day}–${lastDay.day} ${monthShort}`;
        const summary = getWeekSummary(wk.days);
        const rowsHtml = wk.days.map(d => renderCalendarDayRow(d, todayISO)).join('');

        return `
          <section class="cal-week-block ${hasToday ? 'is-active-week' : ''}" data-week-iso="${wk.isoWeek}">
            <header class="cal-week-head">
              <div class="cal-week-left">
                <span class="cal-week-num">${wk.isoWeek} нед</span>
                <span class="cal-week-range mono">${escapeHtml(rangeText)}</span>
                ${hasToday ? '<span class="cal-week-now-tag">Текущая</span>' : ''}
              </div>
              <span class="cal-week-summary">
                ${summary.shiftNum ? shiftGlyphSvg(summary.shiftNum) : ''}
                <span>${escapeHtml(summary.text)}</span>
              </span>
            </header>
            <div class="cal-week-card">
              ${rowsHtml}
            </div>
          </section>
        `;
      }).join('');

      return `
        <div class="cal-month-col" data-month-col="${m.num}" data-year-col="${m.year}">
          <div class="cal-month-col-head">
            <button type="button" class="cal-month-nav-btn" data-jump-month="${prevNum}" ${prevDisabled} aria-label="Предыдущий месяц">
              <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div class="cal-month-head-center">
              <div class="cal-month-title">${escapeHtml(m.name_ru)} ${m.year}</div>
              <div class="cal-month-sub mono">${escapeHtml(monthSub)}</div>
            </div>
            <button type="button" class="cal-month-nav-btn" data-jump-month="${nextNum}" ${nextDisabled} aria-label="Следующий месяц">
              <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div class="cal-weeks-scroll">
            ${weeksHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderCalendarDayRow(d, todayISO) {
    const isToday = d.date === todayISO;
    const isPast = d.date < todayISO;
    const isWeekend = d.weekday_idx >= 5;
    const rowClasses = ['cal-day-row'];

    if (isPast) rowClasses.push('is-past');
    if (isToday) rowClasses.push('is-today');
    if (isWeekend) rowClasses.push('is-wknd');
    if (d.status === 'holiday') rowClasses.push('is-holiday');

    let midHtml = '';
    let rightTime = '';

    if (state.calendarScope === 'ALL') {
      if (d.status === 'holiday') {
        const holText = d.holiday_name ? d.holiday_name.split('(')[0].trim() : 'Праздник';
        midHtml = `${shiftGlyphSvg('hol')}<span class="cal-row-shift">${escapeHtml(holText)}</span>`;
      } else if (d.status === 'weekend' || d.status === 'bridge_day_off') {
        rowClasses.push('is-off');
        midHtml = `${shiftGlyphSvg('off')}<span class="cal-row-shift">${d.status === 'bridge_day_off' ? 'Мостовой выходной' : 'Выходной'}</span>`;
      } else {
        const items = [
          { sn: 1, b: d.shifts.shift1_morning },
          { sn: 2, b: d.shifts.shift2_afternoon },
          { sn: 3, b: d.shifts.shift3_night }
        ].map(item => {
          const mineCls = item.b === state.brigade ? 'mine' : '';
          return `<span class="cal-all-item ${mineCls}">${SHIFT_ROMAN[item.sn]}:${escapeHtml(item.b)}</span>`;
        }).join('');
        midHtml = `<div class="cal-row-all">${items}</div>`;
      }
    } else {
      const assign = d.brigade_assignments[state.brigade];
      if (assign && assign.shift_num > 0) {
        const noteSuffix = d.status === 'transferred_workday'
          ? ' · отработка'
          : (d.factory_note ? ' · Leállás' : '');
        midHtml = `
          ${shiftGlyphSvg(assign.shift_num)}
          <span class="cal-row-shift">${SHIFT_ROMAN[assign.shift_num]} · ${SHIFT_SHORT_RU[assign.shift_num]}${noteSuffix}</span>
        `;
        rightTime = SHIFT_COMPACT_TIME[assign.shift_num];
      } else if (d.status === 'holiday') {
        const holText = d.holiday_name ? d.holiday_name.split('(')[0].trim() : 'Праздник';
        midHtml = `${shiftGlyphSvg('hol')}<span class="cal-row-shift">${escapeHtml(holText)}</span>`;
      } else {
        rowClasses.push('is-off');
        midHtml = `${shiftGlyphSvg('off')}<span class="cal-row-shift">${d.status === 'bridge_day_off' ? 'Мостовой выходной' : 'Выходной'}</span>`;
      }
    }

    return `
      <div class="${rowClasses.join(' ')}" data-date="${d.date}" role="button" tabindex="0">
        <div class="cal-row-left">
          <span class="cal-row-num mono">${d.day}</span>
          <span class="cal-row-wd">${escapeHtml(d.weekday_ru.toLowerCase())}</span>
        </div>
        <div class="cal-row-mid">${midHtml}</div>
        <div class="cal-row-right">
          ${isToday ? '<span class="today-dot-label">Сегодня</span>' : ''}
          ${rightTime ? `<span class="cal-row-time mono">${escapeHtml(rightTime)}</span>` : ''}
        </div>
      </div>
    `;
  }

  function scrollToMonthColumn(monthNum, smooth) {
    if (!el.calMonthsTrack) return;
    const col = el.calMonthsTrack.querySelector(`.cal-month-col[data-month-col="${monthNum}"]`);
    if (!col) return;

    state.calendarMonth = parseInt(monthNum, 10);
    renderCalendarMonthPills();

    isProgrammaticMonthScroll = true;
    el.calMonthsTrack.scrollTo({
      left: col.offsetLeft,
      behavior: smooth ? 'smooth' : 'auto'
    });
    setTimeout(() => {
      isProgrammaticMonthScroll = false;
    }, smooth ? 360 : 60);
  }

  function animateToActiveWeekInMonth(year, monthNum) {
    if (!el.calMonthsTrack) return;
    const col = el.calMonthsTrack.querySelector(`.cal-month-col[data-year-col="${year}"][data-month-col="${monthNum}"]`);
    if (!col) return;

    const scroller = col.querySelector('.cal-weeks-scroll');
    const activeWeekBlock = col.querySelector('.cal-week-block.is-active-week');
    if (!scroller || !activeWeekBlock) return;

    if (activeWeekAnimRaf) {
      cancelAnimationFrame(activeWeekAnimRaf);
      activeWeekAnimRaf = null;
    }

    scroller.scrollTop = 0;

    const targetTop = Math.max(
      0,
      Math.round(activeWeekBlock.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 8)
    );
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const markFocused = () => {
      activeWeekBlock.classList.add('just-focused');
    };

    if (reducedMotion || targetTop === 0) {
      scroller.scrollTop = targetTop;
      markFocused();
      return;
    }

    const duration = 500;
    let startTime = null;

    const step = (ts) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      scroller.scrollTop = targetTop * eased;

      if (progress < 1) {
        activeWeekAnimRaf = requestAnimationFrame(step);
      } else {
        activeWeekAnimRaf = null;
        markFocused();
      }
    };

    setTimeout(() => {
      activeWeekAnimRaf = requestAnimationFrame(step);
    }, 60);
  }

  function syncActiveMonthFromScroll() {
    if (!el.calMonthsTrack || isProgrammaticMonthScroll) return;
    const trackWidth = el.calMonthsTrack.clientWidth;
    if (trackWidth <= 0) return;

    const cols = Array.from(el.calMonthsTrack.querySelectorAll('.cal-month-col'));
    if (!cols.length) return;

    const idx = Math.min(
      cols.length - 1,
      Math.max(0, Math.round(el.calMonthsTrack.scrollLeft / trackWidth))
    );
    const matchedMonth = parseInt(cols[idx].getAttribute('data-month-col'), 10);
    if (matchedMonth && matchedMonth !== state.calendarMonth) {
      state.calendarMonth = matchedMonth;
      renderCalendarMonthPills();
    }
  }

  /* ==========================================================================
     Day Details Modal, Copy & .ics Export
     ========================================================================== */
  function openDayModal(dateStr) {
    const day = allDaysByDate[dateStr];
    if (!day) return;
    state.activeModalDay = day;

    const monthObj = allMonthsByKey[`${day.year}-${day.month}`];
    el.modalDateTitle.textContent = `${day.day} ${monthObj ? monthObj.name_ru : ''} ${day.year}`;
    el.modalDateSubtitle.textContent = `${day.weekday_ru_full} (${day.weekday_hu}) · Неделя ${day.iso_week}`;

    let alertHtml = '';
    if (day.holiday_name) {
      alertHtml += `<div class="modal-alert hol">${escapeHtml(day.holiday_name)} — ${escapeHtml(day.note)}</div>`;
    } else if (day.status === 'transferred_workday') {
      alertHtml += `<div class="modal-alert">${escapeHtml(day.note)}</div>`;
    } else if (day.status === 'bridge_day_off') {
      alertHtml += `<div class="modal-alert">${escapeHtml(day.note)}</div>`;
    }
    if (day.factory_note) {
      alertHtml += `<div class="modal-alert">${escapeHtml(day.factory_note)}</div>`;
    }

    const rowsHtml = ['A', 'B', 'C'].map(bKey => {
      const assign = day.brigade_assignments[bKey];
      const isSelected = state.brigade === bKey;
      const shiftPrefix = assign.shift_num > 0 ? `${SHIFT_ROMAN[assign.shift_num]} смена · ` : '';
      return `
        <div class="detail-row ${isSelected ? 'active-b' : ''}">
          <div class="detail-brigade">
            <span class="b-letter is-${bKey.toLowerCase()}">${bKey}</span>
            <span>Бригада${isSelected ? ' (вы)' : ''}</span>
          </div>
          <div class="detail-shift">
            <div class="detail-shift-name">${escapeHtml(shiftPrefix + assign.name)}</div>
            <div class="detail-shift-time">${escapeHtml(assign.time)}</div>
          </div>
        </div>
      `;
    }).join('');

    el.modalBody.innerHTML = `${alertHtml}<div class="detail-list">${rowsHtml}</div>`;
    el.dayModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDayModal() {
    el.dayModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function copyActiveDayInfo() {
    const d = state.activeModalDay;
    if (!d) return;
    let text = `График ${d.date} (${d.weekday_ru_full} / ${d.weekday_hu}, нед. ${d.iso_week}):\n`;
    if (d.holiday_name) text += `Праздник: ${d.holiday_name}\n`;
    if (d.factory_note) text += `${d.factory_note}\n`;
    ['A', 'B', 'C'].forEach(b => {
      const a = d.brigade_assignments[b];
      text += `Бригада ${b}: ${a.name} (${a.time})\n`;
    });

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Информация скопирована');
      }).catch(() => {
        showToast('Не удалось скопировать');
      });
    }
  }

  function exportShiftIcs(day, brigadeKey) {
    if (!day) return;
    const bKey = ['A', 'B', 'C'].includes(brigadeKey) ? brigadeKey : 'A';
    const assign = day.brigade_assignments[bKey];
    if (!assign || assign.shift_num === 0) {
      showToast(`У бригады ${bKey} в этот день выходной`);
      return;
    }

    const compact = day.date.replace(/-/g, '');
    let dtStart = '';
    let dtEnd = '';
    if (assign.shift_num === 1) {
      dtStart = `${compact}T060000`;
      dtEnd = `${compact}T140000`;
    } else if (assign.shift_num === 2) {
      dtStart = `${compact}T140000`;
      dtEnd = `${compact}T220000`;
    } else {
      dtStart = `${compact}T220000`;
      const nextUtc = new Date(`${day.date}T00:00:00Z`);
      nextUtc.setUTCDate(nextUtc.getUTCDate() + 1);
      dtEnd = `${nextUtc.toISOString().slice(0, 10).replace(/-/g, '')}T060000`;
    }

    const nowUtcStamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ShiftFlex//3Muszak//RU',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:shiftflex-${bKey}-${day.date}@shiftflex`,
      `DTSTAMP:${nowUtcStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:Смена ${SHIFT_ROMAN[assign.shift_num]} — ${assign.name} (Бригада ${bKey})`,
      `DESCRIPTION:Рабочая смена ${assign.time} · График 3 műszak`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smena_${bKey}_${day.date}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Событие .ics для бригады ${bKey} скачано`);
  }

  function openHelpModal() {
    el.helpModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeHelpModal() {
    el.helpModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     Event Listeners
     ========================================================================== */
  function bindEvents() {
    el.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        setView(tab.getAttribute('data-view'));
      });
    });

    el.settingsBtn.addEventListener('click', openSettingsModal);
    el.headerBrigadeBtn.addEventListener('click', openSettingsModal);
    el.openWindowSettingsBtn.addEventListener('click', openSettingsModal);

    el.btnNextShiftIcs.addEventListener('click', () => {
      if (!currentFocusDay) return;
      exportShiftIcs(currentFocusDay, state.brigade);
    });

    el.btnNextShiftModal.addEventListener('click', () => {
      if (!currentFocusDay) return;
      openDayModal(currentFocusDay.date);
    });

    function handleDateClick(e) {
      const target = e.target.closest('[data-date]');
      if (target) {
        openDayModal(target.getAttribute('data-date'));
      }
    }

    function handleDateKeydown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target.closest('[data-date]');
        if (target) {
          e.preventDefault();
          openDayModal(target.getAttribute('data-date'));
        }
      }
    }

    el.dayWindowList.addEventListener('click', handleDateClick);
    el.dayWindowList.addEventListener('keydown', handleDateKeydown);

    // Tab 2 Calendar events
    el.yearButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setCalendarYear(btn.getAttribute('data-year'));
      });
    });

    el.calBrigadeScopeBtn.addEventListener('click', () => {
      state.calendarScope = state.calendarScope === 'MINE' ? 'ALL' : 'MINE';
      updateBrigadeBadges();
      renderCalendarYearColumns();
      scrollToMonthColumn(state.calendarMonth, false);
    });

    el.calTodayBtn.addEventListener('click', openCalendarDefaultFocus);

    el.calMonthPills.addEventListener('click', e => {
      const pill = e.target.closest('[data-cal-month]');
      if (!pill) return;
      scrollToMonthColumn(pill.getAttribute('data-cal-month'), true);
    });

    el.calMonthsTrack.addEventListener('click', e => {
      const jumpBtn = e.target.closest('[data-jump-month]');
      if (jumpBtn && !jumpBtn.disabled) {
        const m = jumpBtn.getAttribute('data-jump-month');
        if (m) scrollToMonthColumn(m, true);
        return;
      }
      handleDateClick(e);
    });

    el.calMonthsTrack.addEventListener('keydown', handleDateKeydown);

    el.calMonthsTrack.addEventListener('scroll', () => {
      clearTimeout(calScrollSyncTimer);
      calScrollSyncTimer = setTimeout(syncActiveMonthFromScroll, 65);
    }, { passive: true });

    window.addEventListener('resize', () => {
      if (state.view === 'calendar') {
        syncCalendarTrackHeight();
        scrollToMonthColumn(state.calendarMonth, false);
      }
    });

    // Onboarding Modal events
    el.onboardBrigadeGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-brigade]');
      if (!btn) return;
      state.onboardingDraft.brigade = btn.getAttribute('data-brigade');
      syncOnboardingModalUI();
    });

    el.onboardPastGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-count]');
      if (!btn) return;
      state.onboardingDraft.pastDays = clampDayWindowCount(btn.getAttribute('data-count'), 1);
      syncOnboardingModalUI();
    });

    el.onboardFutureGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-count]');
      if (!btn) return;
      state.onboardingDraft.futureDays = clampDayWindowCount(btn.getAttribute('data-count'), 2);
      syncOnboardingModalUI();
    });

    el.onboardingSaveBtn.addEventListener('click', completeOnboarding);

    // Settings Modal events
    el.settingsBrigadeGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-brigade]');
      if (!btn) return;
      applyUserConfig(btn.getAttribute('data-brigade'), state.pastDays, state.futureDays);
    });

    el.settingsPastGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-count]');
      if (!btn) return;
      applyUserConfig(state.brigade, btn.getAttribute('data-count'), state.futureDays);
    });

    el.settingsFutureGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-count]');
      if (!btn) return;
      applyUserConfig(state.brigade, state.pastDays, btn.getAttribute('data-count'));
    });

    el.settingsThemeGroup.addEventListener('click', e => {
      const btn = e.target.closest('[data-theme]');
      if (!btn) return;
      applyTheme(btn.getAttribute('data-theme'));
    });

    el.settingsHelpBtn.addEventListener('click', () => {
      closeSettingsModal();
      openHelpModal();
    });

    el.settingsCloseBtn.addEventListener('click', closeSettingsModal);
    el.settingsDoneBtn.addEventListener('click', closeSettingsModal);
    el.settingsModal.addEventListener('click', e => {
      if (e.target === el.settingsModal) closeSettingsModal();
    });

    // Day Details & Help Modals
    el.modalCloseBtn.addEventListener('click', closeDayModal);
    el.dayModal.addEventListener('click', e => {
      if (e.target === el.dayModal) closeDayModal();
    });
    el.modalCopyBtn.addEventListener('click', copyActiveDayInfo);
    el.modalIcsBtn.addEventListener('click', () => {
      exportShiftIcs(state.activeModalDay, state.brigade);
    });

    el.helpCloseBtn.addEventListener('click', closeHelpModal);
    el.helpOkBtn.addEventListener('click', closeHelpModal);
    el.helpModal.addEventListener('click', e => {
      if (e.target === el.helpModal) closeHelpModal();
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeDayModal();
        closeHelpModal();
        closeSettingsModal();
      }
    });
  }

  function init() {
    applyTheme(state.theme);
    updateBrigadeBadges();
    bindEvents();

    // Always start on Tab 1 ("Моя смена")
    setView('dashboard');

    if (localStorage.getItem('shift_onboarded') !== '1') {
      openOnboardingModal();
    }

    if (liveTimerId) clearInterval(liveTimerId);
    liveTimerId = setInterval(updateLiveDashboard, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
