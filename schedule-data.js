/**
 * ShiftFlex — Оцифрованные графики рабочих смен (3 műszak)
 * Содержит оба полугодия: 1П 2027 (Январь–Июнь 2027) и 2П 2026 (Июль–Декабрь 2026).
 */
window.SCHEDULE_PERIODS = {
  "defaultPeriod": "2027-H1",
  "periods": {
    "2027-H1": {
      "id": "2027-H1",
      "label": "1 полугодие 2027",
      "short_label": "1П 2027",
      "range_label": "Янв – Июн 2027",
      "title_hu": "3 műszak",
      "title_ru": "3-сменный рабочий график",
      "period": "2027.01.01 - 2027.06.30",
      "excel_file": "grafik_smen_2027.xlsx",
      "shift_definitions": {
        "shift1": {
          "number": 1,
          "name_hu": "Délelőtt",
          "name_ru": "Утренняя смена (Утро)",
          "hours": "06:00 - 14:00"
        },
        "shift2": {
          "number": 2,
          "name_hu": "Délután",
          "name_ru": "Дневная / Вечерняя смена (Вечер)",
          "hours": "14:00 - 22:00"
        },
        "shift3": {
          "number": 3,
          "name_hu": "Éjszaka",
          "name_ru": "Ночная смена (Ночь)",
          "hours": "22:00 - 06:00"
        }
      },
      "brigades": [
        "A",
        "B",
        "C"
      ],
      "months": [
        {
          "num": 1,
          "name_hu": "JANUÁR",
          "name_ru": "Январь",
          "year": 2027,
          "days": 31,
          "kot_days": 20,
          "kot_hours": 160
        },
        {
          "num": 2,
          "name_hu": "FEBRUÁR",
          "name_ru": "Февраль",
          "year": 2027,
          "days": 28,
          "kot_days": 20,
          "kot_hours": 160
        },
        {
          "num": 3,
          "name_hu": "MÁRCIUS",
          "name_ru": "Март",
          "year": 2027,
          "days": 31,
          "kot_days": 20,
          "kot_hours": 160
        },
        {
          "num": 4,
          "name_hu": "ÁPRILIS",
          "name_ru": "Апрель",
          "year": 2027,
          "days": 30,
          "kot_days": 22,
          "kot_hours": 176
        },
        {
          "num": 5,
          "name_hu": "MÁJUS",
          "name_ru": "Май",
          "year": 2027,
          "days": 31,
          "kot_days": 20,
          "kot_hours": 160
        },
        {
          "num": 6,
          "name_hu": "JÚNIUS",
          "name_ru": "Июнь",
          "year": 2027,
          "days": 30,
          "kot_days": 22,
          "kot_hours": 176
        }
      ],
      "days": [
        {
          "date": "2027-01-01",
          "year": 2027,
          "month": 1,
          "day": 1,
          "iso_week": 53,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "holiday",
          "holiday_name": "Новый год (Újév)",
          "note": "Государственный праздник (нерабочий день)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-02",
          "year": 2027,
          "month": 1,
          "day": 2,
          "iso_week": 53,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-03",
          "year": 2027,
          "month": 1,
          "day": 3,
          "iso_week": 53,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-04",
          "year": 2027,
          "month": 1,
          "day": 4,
          "iso_week": 1,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-05",
          "year": 2027,
          "month": 1,
          "day": 5,
          "iso_week": 1,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-06",
          "year": 2027,
          "month": 1,
          "day": 6,
          "iso_week": 1,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-07",
          "year": 2027,
          "month": 1,
          "day": 7,
          "iso_week": 1,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-08",
          "year": 2027,
          "month": 1,
          "day": 8,
          "iso_week": 1,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-09",
          "year": 2027,
          "month": 1,
          "day": 9,
          "iso_week": 1,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-10",
          "year": 2027,
          "month": 1,
          "day": 10,
          "iso_week": 1,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-11",
          "year": 2027,
          "month": 1,
          "day": 11,
          "iso_week": 2,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-01-12",
          "year": 2027,
          "month": 1,
          "day": 12,
          "iso_week": 2,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-01-13",
          "year": 2027,
          "month": 1,
          "day": 13,
          "iso_week": 2,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-01-14",
          "year": 2027,
          "month": 1,
          "day": 14,
          "iso_week": 2,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-01-15",
          "year": 2027,
          "month": 1,
          "day": 15,
          "iso_week": 2,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-01-16",
          "year": 2027,
          "month": 1,
          "day": 16,
          "iso_week": 2,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-17",
          "year": 2027,
          "month": 1,
          "day": 17,
          "iso_week": 2,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-18",
          "year": 2027,
          "month": 1,
          "day": 18,
          "iso_week": 3,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-01-19",
          "year": 2027,
          "month": 1,
          "day": 19,
          "iso_week": 3,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-01-20",
          "year": 2027,
          "month": 1,
          "day": 20,
          "iso_week": 3,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-01-21",
          "year": 2027,
          "month": 1,
          "day": 21,
          "iso_week": 3,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-01-22",
          "year": 2027,
          "month": 1,
          "day": 22,
          "iso_week": 3,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-01-23",
          "year": 2027,
          "month": 1,
          "day": 23,
          "iso_week": 3,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-24",
          "year": 2027,
          "month": 1,
          "day": 24,
          "iso_week": 3,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-25",
          "year": 2027,
          "month": 1,
          "day": 25,
          "iso_week": 4,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-26",
          "year": 2027,
          "month": 1,
          "day": 26,
          "iso_week": 4,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-27",
          "year": 2027,
          "month": 1,
          "day": 27,
          "iso_week": 4,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-28",
          "year": 2027,
          "month": 1,
          "day": 28,
          "iso_week": 4,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-29",
          "year": 2027,
          "month": 1,
          "day": 29,
          "iso_week": 4,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-01-30",
          "year": 2027,
          "month": 1,
          "day": 30,
          "iso_week": 4,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-01-31",
          "year": 2027,
          "month": 1,
          "day": 31,
          "iso_week": 4,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-01",
          "year": 2027,
          "month": 2,
          "day": 1,
          "iso_week": 5,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-02",
          "year": 2027,
          "month": 2,
          "day": 2,
          "iso_week": 5,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-03",
          "year": 2027,
          "month": 2,
          "day": 3,
          "iso_week": 5,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-04",
          "year": 2027,
          "month": 2,
          "day": 4,
          "iso_week": 5,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-05",
          "year": 2027,
          "month": 2,
          "day": 5,
          "iso_week": 5,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-06",
          "year": 2027,
          "month": 2,
          "day": 6,
          "iso_week": 5,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-07",
          "year": 2027,
          "month": 2,
          "day": 7,
          "iso_week": 5,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-08",
          "year": 2027,
          "month": 2,
          "day": 8,
          "iso_week": 6,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-02-09",
          "year": 2027,
          "month": 2,
          "day": 9,
          "iso_week": 6,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-02-10",
          "year": 2027,
          "month": 2,
          "day": 10,
          "iso_week": 6,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-02-11",
          "year": 2027,
          "month": 2,
          "day": 11,
          "iso_week": 6,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-02-12",
          "year": 2027,
          "month": 2,
          "day": 12,
          "iso_week": 6,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-02-13",
          "year": 2027,
          "month": 2,
          "day": 13,
          "iso_week": 6,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-14",
          "year": 2027,
          "month": 2,
          "day": 14,
          "iso_week": 6,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-15",
          "year": 2027,
          "month": 2,
          "day": 15,
          "iso_week": 7,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-02-16",
          "year": 2027,
          "month": 2,
          "day": 16,
          "iso_week": 7,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-02-17",
          "year": 2027,
          "month": 2,
          "day": 17,
          "iso_week": 7,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-02-18",
          "year": 2027,
          "month": 2,
          "day": 18,
          "iso_week": 7,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-02-19",
          "year": 2027,
          "month": 2,
          "day": 19,
          "iso_week": 7,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-02-20",
          "year": 2027,
          "month": 2,
          "day": 20,
          "iso_week": 7,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-21",
          "year": 2027,
          "month": 2,
          "day": 21,
          "iso_week": 7,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-22",
          "year": 2027,
          "month": 2,
          "day": 22,
          "iso_week": 8,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-23",
          "year": 2027,
          "month": 2,
          "day": 23,
          "iso_week": 8,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-24",
          "year": 2027,
          "month": 2,
          "day": 24,
          "iso_week": 8,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-25",
          "year": 2027,
          "month": 2,
          "day": 25,
          "iso_week": 8,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-26",
          "year": 2027,
          "month": 2,
          "day": 26,
          "iso_week": 8,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-02-27",
          "year": 2027,
          "month": 2,
          "day": 27,
          "iso_week": 8,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-02-28",
          "year": 2027,
          "month": 2,
          "day": 28,
          "iso_week": 8,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-01",
          "year": 2027,
          "month": 3,
          "day": 1,
          "iso_week": 9,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-02",
          "year": 2027,
          "month": 3,
          "day": 2,
          "iso_week": 9,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-03",
          "year": 2027,
          "month": 3,
          "day": 3,
          "iso_week": 9,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-04",
          "year": 2027,
          "month": 3,
          "day": 4,
          "iso_week": 9,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-05",
          "year": 2027,
          "month": 3,
          "day": 5,
          "iso_week": 9,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-06",
          "year": 2027,
          "month": 3,
          "day": 6,
          "iso_week": 9,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-07",
          "year": 2027,
          "month": 3,
          "day": 7,
          "iso_week": 9,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-08",
          "year": 2027,
          "month": 3,
          "day": 8,
          "iso_week": 10,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-09",
          "year": 2027,
          "month": 3,
          "day": 9,
          "iso_week": 10,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-10",
          "year": 2027,
          "month": 3,
          "day": 10,
          "iso_week": 10,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-11",
          "year": 2027,
          "month": 3,
          "day": 11,
          "iso_week": 10,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-12",
          "year": 2027,
          "month": 3,
          "day": 12,
          "iso_week": 10,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-13",
          "year": 2027,
          "month": 3,
          "day": 13,
          "iso_week": 10,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-14",
          "year": 2027,
          "month": 3,
          "day": 14,
          "iso_week": 10,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-15",
          "year": 2027,
          "month": 3,
          "day": 15,
          "iso_week": 11,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "holiday",
          "holiday_name": "День революции 1848 года (1848–49-es forradalom)",
          "note": "Государственный праздник (нерабочий день)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-16",
          "year": 2027,
          "month": 3,
          "day": 16,
          "iso_week": 11,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-03-17",
          "year": 2027,
          "month": 3,
          "day": 17,
          "iso_week": 11,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-03-18",
          "year": 2027,
          "month": 3,
          "day": 18,
          "iso_week": 11,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-03-19",
          "year": 2027,
          "month": 3,
          "day": 19,
          "iso_week": 11,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-03-20",
          "year": 2027,
          "month": 3,
          "day": 20,
          "iso_week": 11,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-21",
          "year": 2027,
          "month": 3,
          "day": 21,
          "iso_week": 11,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-22",
          "year": 2027,
          "month": 3,
          "day": 22,
          "iso_week": 12,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-23",
          "year": 2027,
          "month": 3,
          "day": 23,
          "iso_week": 12,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-24",
          "year": 2027,
          "month": 3,
          "day": 24,
          "iso_week": 12,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-25",
          "year": 2027,
          "month": 3,
          "day": 25,
          "iso_week": 12,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-03-26",
          "year": 2027,
          "month": 3,
          "day": 26,
          "iso_week": 12,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "holiday",
          "holiday_name": "Страстная пятница (Nagypéntek)",
          "note": "Государственный праздник (нерабочий день)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-27",
          "year": 2027,
          "month": 3,
          "day": 27,
          "iso_week": 12,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-28",
          "year": 2027,
          "month": 3,
          "day": 28,
          "iso_week": 12,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": "Пасха (Húsvétvasárnap)",
          "note": "Пасхальное воскресенье (выходной)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-29",
          "year": 2027,
          "month": 3,
          "day": 29,
          "iso_week": 13,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "holiday",
          "holiday_name": "Пасхальный понедельник (Húsvéthétfő)",
          "note": "Государственный праздник (нерабочий день)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-03-30",
          "year": 2027,
          "month": 3,
          "day": 30,
          "iso_week": 13,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-03-31",
          "year": 2027,
          "month": 3,
          "day": 31,
          "iso_week": 13,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-01",
          "year": 2027,
          "month": 4,
          "day": 1,
          "iso_week": 13,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-02",
          "year": 2027,
          "month": 4,
          "day": 2,
          "iso_week": 13,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-03",
          "year": 2027,
          "month": 4,
          "day": 3,
          "iso_week": 13,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-04",
          "year": 2027,
          "month": 4,
          "day": 4,
          "iso_week": 13,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-05",
          "year": 2027,
          "month": 4,
          "day": 5,
          "iso_week": 14,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-06",
          "year": 2027,
          "month": 4,
          "day": 6,
          "iso_week": 14,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-07",
          "year": 2027,
          "month": 4,
          "day": 7,
          "iso_week": 14,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-08",
          "year": 2027,
          "month": 4,
          "day": 8,
          "iso_week": 14,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-09",
          "year": 2027,
          "month": 4,
          "day": 9,
          "iso_week": 14,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-10",
          "year": 2027,
          "month": 4,
          "day": 10,
          "iso_week": 14,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-11",
          "year": 2027,
          "month": 4,
          "day": 11,
          "iso_week": 14,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-12",
          "year": 2027,
          "month": 4,
          "day": 12,
          "iso_week": 15,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-04-13",
          "year": 2027,
          "month": 4,
          "day": 13,
          "iso_week": 15,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-04-14",
          "year": 2027,
          "month": 4,
          "day": 14,
          "iso_week": 15,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-04-15",
          "year": 2027,
          "month": 4,
          "day": 15,
          "iso_week": 15,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-04-16",
          "year": 2027,
          "month": 4,
          "day": 16,
          "iso_week": 15,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-04-17",
          "year": 2027,
          "month": 4,
          "day": 17,
          "iso_week": 15,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-18",
          "year": 2027,
          "month": 4,
          "day": 18,
          "iso_week": 15,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-19",
          "year": 2027,
          "month": 4,
          "day": 19,
          "iso_week": 16,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-20",
          "year": 2027,
          "month": 4,
          "day": 20,
          "iso_week": 16,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-21",
          "year": 2027,
          "month": 4,
          "day": 21,
          "iso_week": 16,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-22",
          "year": 2027,
          "month": 4,
          "day": 22,
          "iso_week": 16,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-23",
          "year": 2027,
          "month": 4,
          "day": 23,
          "iso_week": 16,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-04-24",
          "year": 2027,
          "month": 4,
          "day": 24,
          "iso_week": 16,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-25",
          "year": 2027,
          "month": 4,
          "day": 25,
          "iso_week": 16,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-04-26",
          "year": 2027,
          "month": 4,
          "day": 26,
          "iso_week": 17,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-27",
          "year": 2027,
          "month": 4,
          "day": 27,
          "iso_week": 17,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-28",
          "year": 2027,
          "month": 4,
          "day": 28,
          "iso_week": 17,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-29",
          "year": 2027,
          "month": 4,
          "day": 29,
          "iso_week": 17,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-04-30",
          "year": 2027,
          "month": 4,
          "day": 30,
          "iso_week": 17,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-05-01",
          "year": 2027,
          "month": 5,
          "day": 1,
          "iso_week": 17,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": "Праздник труда (Munka ünnepe)",
          "note": "Государственный праздник (выпадает на субботу)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-02",
          "year": 2027,
          "month": 5,
          "day": 2,
          "iso_week": 17,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-03",
          "year": 2027,
          "month": 5,
          "day": 3,
          "iso_week": 18,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-04",
          "year": 2027,
          "month": 5,
          "day": 4,
          "iso_week": 18,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-05",
          "year": 2027,
          "month": 5,
          "day": 5,
          "iso_week": 18,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-06",
          "year": 2027,
          "month": 5,
          "day": 6,
          "iso_week": 18,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-07",
          "year": 2027,
          "month": 5,
          "day": 7,
          "iso_week": 18,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-08",
          "year": 2027,
          "month": 5,
          "day": 8,
          "iso_week": 18,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-09",
          "year": 2027,
          "month": 5,
          "day": 9,
          "iso_week": 18,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-10",
          "year": 2027,
          "month": 5,
          "day": 10,
          "iso_week": 19,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-05-11",
          "year": 2027,
          "month": 5,
          "day": 11,
          "iso_week": 19,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-05-12",
          "year": 2027,
          "month": 5,
          "day": 12,
          "iso_week": 19,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-05-13",
          "year": 2027,
          "month": 5,
          "day": 13,
          "iso_week": 19,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-05-14",
          "year": 2027,
          "month": 5,
          "day": 14,
          "iso_week": 19,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-05-15",
          "year": 2027,
          "month": 5,
          "day": 15,
          "iso_week": 19,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-16",
          "year": 2027,
          "month": 5,
          "day": 16,
          "iso_week": 19,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": "Троица / Пятидесятница (Pünkösdvasárnap)",
          "note": "Пятидесятница (выпадает на воскресенье)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-17",
          "year": 2027,
          "month": 5,
          "day": 17,
          "iso_week": 20,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "holiday",
          "holiday_name": "Духов день (Pünkösdhétfő)",
          "note": "Государственный праздник (нерабочий день)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Праздник",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-18",
          "year": 2027,
          "month": 5,
          "day": 18,
          "iso_week": 20,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-05-19",
          "year": 2027,
          "month": 5,
          "day": 19,
          "iso_week": 20,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-05-20",
          "year": 2027,
          "month": 5,
          "day": 20,
          "iso_week": 20,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-05-21",
          "year": 2027,
          "month": 5,
          "day": 21,
          "iso_week": 20,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-05-22",
          "year": 2027,
          "month": 5,
          "day": 22,
          "iso_week": 20,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-23",
          "year": 2027,
          "month": 5,
          "day": 23,
          "iso_week": 20,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-24",
          "year": 2027,
          "month": 5,
          "day": 24,
          "iso_week": 21,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-25",
          "year": 2027,
          "month": 5,
          "day": 25,
          "iso_week": 21,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-26",
          "year": 2027,
          "month": 5,
          "day": 26,
          "iso_week": 21,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-27",
          "year": 2027,
          "month": 5,
          "day": 27,
          "iso_week": 21,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-28",
          "year": 2027,
          "month": 5,
          "day": 28,
          "iso_week": 21,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-05-29",
          "year": 2027,
          "month": 5,
          "day": 29,
          "iso_week": 21,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-30",
          "year": 2027,
          "month": 5,
          "day": 30,
          "iso_week": 21,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-05-31",
          "year": 2027,
          "month": 5,
          "day": 31,
          "iso_week": 22,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-01",
          "year": 2027,
          "month": 6,
          "day": 1,
          "iso_week": 22,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-02",
          "year": 2027,
          "month": 6,
          "day": 2,
          "iso_week": 22,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-03",
          "year": 2027,
          "month": 6,
          "day": 3,
          "iso_week": 22,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-04",
          "year": 2027,
          "month": 6,
          "day": 4,
          "iso_week": 22,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-05",
          "year": 2027,
          "month": 6,
          "day": 5,
          "iso_week": 22,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-06",
          "year": 2027,
          "month": 6,
          "day": 6,
          "iso_week": 22,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-07",
          "year": 2027,
          "month": 6,
          "day": 7,
          "iso_week": 23,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-08",
          "year": 2027,
          "month": 6,
          "day": 8,
          "iso_week": 23,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-09",
          "year": 2027,
          "month": 6,
          "day": 9,
          "iso_week": 23,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-10",
          "year": 2027,
          "month": 6,
          "day": 10,
          "iso_week": 23,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-11",
          "year": 2027,
          "month": 6,
          "day": 11,
          "iso_week": 23,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-12",
          "year": 2027,
          "month": 6,
          "day": 12,
          "iso_week": 23,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-13",
          "year": 2027,
          "month": 6,
          "day": 13,
          "iso_week": 23,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-14",
          "year": 2027,
          "month": 6,
          "day": 14,
          "iso_week": 24,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-06-15",
          "year": 2027,
          "month": 6,
          "day": 15,
          "iso_week": 24,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-06-16",
          "year": 2027,
          "month": 6,
          "day": 16,
          "iso_week": 24,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-06-17",
          "year": 2027,
          "month": 6,
          "day": 17,
          "iso_week": 24,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-06-18",
          "year": 2027,
          "month": 6,
          "day": 18,
          "iso_week": 24,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2027-06-19",
          "year": 2027,
          "month": 6,
          "day": 19,
          "iso_week": 24,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-20",
          "year": 2027,
          "month": 6,
          "day": 20,
          "iso_week": 24,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-21",
          "year": 2027,
          "month": 6,
          "day": 21,
          "iso_week": 25,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-22",
          "year": 2027,
          "month": 6,
          "day": 22,
          "iso_week": 25,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-23",
          "year": 2027,
          "month": 6,
          "day": 23,
          "iso_week": 25,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-24",
          "year": 2027,
          "month": 6,
          "day": 24,
          "iso_week": 25,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-25",
          "year": 2027,
          "month": 6,
          "day": 25,
          "iso_week": 25,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2027-06-26",
          "year": 2027,
          "month": 6,
          "day": 26,
          "iso_week": 25,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-27",
          "year": 2027,
          "month": 6,
          "day": 27,
          "iso_week": 25,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2027-06-28",
          "year": 2027,
          "month": 6,
          "day": 28,
          "iso_week": 26,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-29",
          "year": 2027,
          "month": 6,
          "day": 29,
          "iso_week": 26,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2027-06-30",
          "year": 2027,
          "month": 6,
          "day": 30,
          "iso_week": 26,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        }
      ]
    },
    "2026-H2": {
      "id": "2026-H2",
      "label": "2 полугодие 2026",
      "short_label": "2П 2026",
      "range_label": "Июл – Дек 2026",
      "title_hu": "3 műszak",
      "title_ru": "3-сменный рабочий график",
      "period": "2026.07.01 - 2026.12.31",
      "excel_file": "grafik_smen_2026.xlsx",
      "shift_definitions": {
        "shift1": {
          "number": 1,
          "name_hu": "Délelőtt",
          "name_ru": "Утренняя смена (Утро)",
          "hours": "06:00 - 14:00"
        },
        "shift2": {
          "number": 2,
          "name_hu": "Délután",
          "name_ru": "Дневная / Вечерняя смена (Вечер)",
          "hours": "14:00 - 22:00"
        },
        "shift3": {
          "number": 3,
          "name_hu": "Éjszaka",
          "name_ru": "Ночная смена (Ночь)",
          "hours": "22:00 - 06:00"
        }
      },
      "brigades": [
        "A",
        "B",
        "C"
      ],
      "months": [
        {
          "num": 7,
          "name_hu": "JÚLIUS",
          "name_ru": "Июль",
          "year": 2026,
          "days": 31,
          "kot_days": 23,
          "kot_hours": 184
        },
        {
          "num": 8,
          "name_hu": "AUGUSZTUS",
          "name_ru": "Август",
          "year": 2026,
          "days": 31,
          "kot_days": 20,
          "kot_hours": 160
        },
        {
          "num": 9,
          "name_hu": "SZEPTEMBER",
          "name_ru": "Сентябрь",
          "year": 2026,
          "days": 30,
          "kot_days": 22,
          "kot_hours": 176
        },
        {
          "num": 10,
          "name_hu": "OKTÓBER",
          "name_ru": "Октябрь",
          "year": 2026,
          "days": 31,
          "kot_days": 21,
          "kot_hours": 168
        },
        {
          "num": 11,
          "name_hu": "NOVEMBER",
          "name_ru": "Ноябрь",
          "year": 2026,
          "days": 30,
          "kot_days": 21,
          "kot_hours": 168
        },
        {
          "num": 12,
          "name_hu": "DECEMBER",
          "name_ru": "Декабрь",
          "year": 2026,
          "days": 31,
          "kot_days": 22,
          "kot_hours": 176
        }
      ],
      "days": [
        {
          "date": "2026-07-01",
          "year": 2026,
          "month": 7,
          "day": 1,
          "iso_week": 27,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-02",
          "year": 2026,
          "month": 7,
          "day": 2,
          "iso_week": 27,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-03",
          "year": 2026,
          "month": 7,
          "day": 3,
          "iso_week": 27,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-04",
          "year": 2026,
          "month": 7,
          "day": 4,
          "iso_week": 27,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-05",
          "year": 2026,
          "month": 7,
          "day": 5,
          "iso_week": 27,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-06",
          "year": 2026,
          "month": 7,
          "day": 6,
          "iso_week": 28,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-07",
          "year": 2026,
          "month": 7,
          "day": 7,
          "iso_week": 28,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-08",
          "year": 2026,
          "month": 7,
          "day": 8,
          "iso_week": 28,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-09",
          "year": 2026,
          "month": 7,
          "day": 9,
          "iso_week": 28,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-10",
          "year": 2026,
          "month": 7,
          "day": 10,
          "iso_week": 28,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-11",
          "year": 2026,
          "month": 7,
          "day": 11,
          "iso_week": 28,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-12",
          "year": 2026,
          "month": 7,
          "day": 12,
          "iso_week": 28,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-13",
          "year": 2026,
          "month": 7,
          "day": 13,
          "iso_week": 29,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-07-14",
          "year": 2026,
          "month": 7,
          "day": 14,
          "iso_week": 29,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-07-15",
          "year": 2026,
          "month": 7,
          "day": 15,
          "iso_week": 29,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-07-16",
          "year": 2026,
          "month": 7,
          "day": 16,
          "iso_week": 29,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-07-17",
          "year": 2026,
          "month": 7,
          "day": 17,
          "iso_week": 29,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-07-18",
          "year": 2026,
          "month": 7,
          "day": 18,
          "iso_week": 29,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-19",
          "year": 2026,
          "month": 7,
          "day": 19,
          "iso_week": 29,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-20",
          "year": 2026,
          "month": 7,
          "day": 20,
          "iso_week": 30,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-21",
          "year": 2026,
          "month": 7,
          "day": 21,
          "iso_week": 30,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-22",
          "year": 2026,
          "month": 7,
          "day": 22,
          "iso_week": 30,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-23",
          "year": 2026,
          "month": 7,
          "day": 23,
          "iso_week": 30,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-24",
          "year": 2026,
          "month": 7,
          "day": 24,
          "iso_week": 30,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-07-25",
          "year": 2026,
          "month": 7,
          "day": 25,
          "iso_week": 30,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-26",
          "year": 2026,
          "month": 7,
          "day": 26,
          "iso_week": 30,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-07-27",
          "year": 2026,
          "month": 7,
          "day": 27,
          "iso_week": 31,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-28",
          "year": 2026,
          "month": 7,
          "day": 28,
          "iso_week": 31,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-29",
          "year": 2026,
          "month": 7,
          "day": 29,
          "iso_week": 31,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-30",
          "year": 2026,
          "month": 7,
          "day": 30,
          "iso_week": 31,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-07-31",
          "year": 2026,
          "month": 7,
          "day": 31,
          "iso_week": 31,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-08-01",
          "year": 2026,
          "month": 8,
          "day": 1,
          "iso_week": 31,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-02",
          "year": 2026,
          "month": 8,
          "day": 2,
          "iso_week": 31,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-03",
          "year": 2026,
          "month": 8,
          "day": 3,
          "iso_week": 32,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-04",
          "year": 2026,
          "month": 8,
          "day": 4,
          "iso_week": 32,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-05",
          "year": 2026,
          "month": 8,
          "day": 5,
          "iso_week": 32,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-06",
          "year": 2026,
          "month": 8,
          "day": 6,
          "iso_week": 32,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-07",
          "year": 2026,
          "month": 8,
          "day": 7,
          "iso_week": 32,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-08",
          "year": 2026,
          "month": 8,
          "day": 8,
          "iso_week": 32,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "transferred_workday",
          "holiday_name": null,
          "note": "Отработка за 21 августа (перенесенный рабочий день)",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-09",
          "year": 2026,
          "month": 8,
          "day": 9,
          "iso_week": 32,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-10",
          "year": 2026,
          "month": 8,
          "day": 10,
          "iso_week": 33,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-08-11",
          "year": 2026,
          "month": 8,
          "day": 11,
          "iso_week": 33,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-08-12",
          "year": 2026,
          "month": 8,
          "day": 12,
          "iso_week": 33,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-08-13",
          "year": 2026,
          "month": 8,
          "day": 13,
          "iso_week": 33,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-08-14",
          "year": 2026,
          "month": 8,
          "day": 14,
          "iso_week": 33,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-08-15",
          "year": 2026,
          "month": 8,
          "day": 15,
          "iso_week": 33,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-16",
          "year": 2026,
          "month": 8,
          "day": 16,
          "iso_week": 33,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-17",
          "year": 2026,
          "month": 8,
          "day": 17,
          "iso_week": 34,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-08-18",
          "year": 2026,
          "month": 8,
          "day": 18,
          "iso_week": 34,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-08-19",
          "year": 2026,
          "month": 8,
          "day": 19,
          "iso_week": 34,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-08-20",
          "year": 2026,
          "month": 8,
          "day": 20,
          "iso_week": 34,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "holiday",
          "holiday_name": "День основания государства Венгрия (Szent István napja)",
          "note": "Государственный праздник",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-21",
          "year": 2026,
          "month": 8,
          "day": 21,
          "iso_week": 34,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "bridge_day_off",
          "holiday_name": null,
          "note": "Перенесенный выходной день (отработан 8 августа)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-22",
          "year": 2026,
          "month": 8,
          "day": 22,
          "iso_week": 34,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-23",
          "year": 2026,
          "month": 8,
          "day": 23,
          "iso_week": 34,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-24",
          "year": 2026,
          "month": 8,
          "day": 24,
          "iso_week": 35,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-25",
          "year": 2026,
          "month": 8,
          "day": 25,
          "iso_week": 35,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-26",
          "year": 2026,
          "month": 8,
          "day": 26,
          "iso_week": 35,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-27",
          "year": 2026,
          "month": 8,
          "day": 27,
          "iso_week": 35,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-28",
          "year": 2026,
          "month": 8,
          "day": 28,
          "iso_week": 35,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-08-29",
          "year": 2026,
          "month": 8,
          "day": 29,
          "iso_week": 35,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-30",
          "year": 2026,
          "month": 8,
          "day": 30,
          "iso_week": 35,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-08-31",
          "year": 2026,
          "month": 8,
          "day": 31,
          "iso_week": 36,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-01",
          "year": 2026,
          "month": 9,
          "day": 1,
          "iso_week": 36,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-02",
          "year": 2026,
          "month": 9,
          "day": 2,
          "iso_week": 36,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-03",
          "year": 2026,
          "month": 9,
          "day": 3,
          "iso_week": 36,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-04",
          "year": 2026,
          "month": 9,
          "day": 4,
          "iso_week": 36,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-05",
          "year": 2026,
          "month": 9,
          "day": 5,
          "iso_week": 36,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-06",
          "year": 2026,
          "month": 9,
          "day": 6,
          "iso_week": 36,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-07",
          "year": 2026,
          "month": 9,
          "day": 7,
          "iso_week": 37,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-08",
          "year": 2026,
          "month": 9,
          "day": 8,
          "iso_week": 37,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-09",
          "year": 2026,
          "month": 9,
          "day": 9,
          "iso_week": 37,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-10",
          "year": 2026,
          "month": 9,
          "day": 10,
          "iso_week": 37,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-11",
          "year": 2026,
          "month": 9,
          "day": 11,
          "iso_week": 37,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-12",
          "year": 2026,
          "month": 9,
          "day": 12,
          "iso_week": 37,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-13",
          "year": 2026,
          "month": 9,
          "day": 13,
          "iso_week": 37,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-14",
          "year": 2026,
          "month": 9,
          "day": 14,
          "iso_week": 38,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-09-15",
          "year": 2026,
          "month": 9,
          "day": 15,
          "iso_week": 38,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-09-16",
          "year": 2026,
          "month": 9,
          "day": 16,
          "iso_week": 38,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-09-17",
          "year": 2026,
          "month": 9,
          "day": 17,
          "iso_week": 38,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-09-18",
          "year": 2026,
          "month": 9,
          "day": 18,
          "iso_week": 38,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-09-19",
          "year": 2026,
          "month": 9,
          "day": 19,
          "iso_week": 38,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-20",
          "year": 2026,
          "month": 9,
          "day": 20,
          "iso_week": 38,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-21",
          "year": 2026,
          "month": 9,
          "day": 21,
          "iso_week": 39,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-22",
          "year": 2026,
          "month": 9,
          "day": 22,
          "iso_week": 39,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-23",
          "year": 2026,
          "month": 9,
          "day": 23,
          "iso_week": 39,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-24",
          "year": 2026,
          "month": 9,
          "day": 24,
          "iso_week": 39,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-25",
          "year": 2026,
          "month": 9,
          "day": 25,
          "iso_week": 39,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-09-26",
          "year": 2026,
          "month": 9,
          "day": 26,
          "iso_week": 39,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-27",
          "year": 2026,
          "month": 9,
          "day": 27,
          "iso_week": 39,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-09-28",
          "year": 2026,
          "month": 9,
          "day": 28,
          "iso_week": 40,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-29",
          "year": 2026,
          "month": 9,
          "day": 29,
          "iso_week": 40,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-09-30",
          "year": 2026,
          "month": 9,
          "day": 30,
          "iso_week": 40,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-01",
          "year": 2026,
          "month": 10,
          "day": 1,
          "iso_week": 40,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-02",
          "year": 2026,
          "month": 10,
          "day": 2,
          "iso_week": 40,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-03",
          "year": 2026,
          "month": 10,
          "day": 3,
          "iso_week": 40,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-04",
          "year": 2026,
          "month": 10,
          "day": 4,
          "iso_week": 40,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-05",
          "year": 2026,
          "month": 10,
          "day": 5,
          "iso_week": 41,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-06",
          "year": 2026,
          "month": 10,
          "day": 6,
          "iso_week": 41,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-07",
          "year": 2026,
          "month": 10,
          "day": 7,
          "iso_week": 41,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-08",
          "year": 2026,
          "month": 10,
          "day": 8,
          "iso_week": 41,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-09",
          "year": 2026,
          "month": 10,
          "day": 9,
          "iso_week": 41,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-10",
          "year": 2026,
          "month": 10,
          "day": 10,
          "iso_week": 41,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-11",
          "year": 2026,
          "month": 10,
          "day": 11,
          "iso_week": 41,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-12",
          "year": 2026,
          "month": 10,
          "day": 12,
          "iso_week": 42,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-10-13",
          "year": 2026,
          "month": 10,
          "day": 13,
          "iso_week": 42,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-10-14",
          "year": 2026,
          "month": 10,
          "day": 14,
          "iso_week": 42,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-10-15",
          "year": 2026,
          "month": 10,
          "day": 15,
          "iso_week": 42,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-10-16",
          "year": 2026,
          "month": 10,
          "day": 16,
          "iso_week": 42,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-10-17",
          "year": 2026,
          "month": 10,
          "day": 17,
          "iso_week": 42,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-18",
          "year": 2026,
          "month": 10,
          "day": 18,
          "iso_week": 42,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-19",
          "year": 2026,
          "month": 10,
          "day": 19,
          "iso_week": 43,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-20",
          "year": 2026,
          "month": 10,
          "day": 20,
          "iso_week": 43,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-21",
          "year": 2026,
          "month": 10,
          "day": 21,
          "iso_week": 43,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-22",
          "year": 2026,
          "month": 10,
          "day": 22,
          "iso_week": 43,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-10-23",
          "year": 2026,
          "month": 10,
          "day": 23,
          "iso_week": 43,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "holiday",
          "holiday_name": "День памяти венгерской революции 1956 года (Nemzeti ünnep)",
          "note": "Государственный праздник",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-24",
          "year": 2026,
          "month": 10,
          "day": 24,
          "iso_week": 43,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-25",
          "year": 2026,
          "month": 10,
          "day": 25,
          "iso_week": 43,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-10-26",
          "year": 2026,
          "month": 10,
          "day": 26,
          "iso_week": 44,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-27",
          "year": 2026,
          "month": 10,
          "day": 27,
          "iso_week": 44,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-28",
          "year": 2026,
          "month": 10,
          "day": 28,
          "iso_week": 44,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-29",
          "year": 2026,
          "month": 10,
          "day": 29,
          "iso_week": 44,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-30",
          "year": 2026,
          "month": 10,
          "day": 30,
          "iso_week": 44,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-10-31",
          "year": 2026,
          "month": 10,
          "day": 31,
          "iso_week": 44,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-01",
          "year": 2026,
          "month": 11,
          "day": 1,
          "iso_week": 44,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-02",
          "year": 2026,
          "month": 11,
          "day": 2,
          "iso_week": 45,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-03",
          "year": 2026,
          "month": 11,
          "day": 3,
          "iso_week": 45,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-04",
          "year": 2026,
          "month": 11,
          "day": 4,
          "iso_week": 45,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-05",
          "year": 2026,
          "month": 11,
          "day": 5,
          "iso_week": 45,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-06",
          "year": 2026,
          "month": 11,
          "day": 6,
          "iso_week": 45,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-07",
          "year": 2026,
          "month": 11,
          "day": 7,
          "iso_week": 45,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-08",
          "year": 2026,
          "month": 11,
          "day": 8,
          "iso_week": 45,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-09",
          "year": 2026,
          "month": 11,
          "day": 9,
          "iso_week": 46,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-11-10",
          "year": 2026,
          "month": 11,
          "day": 10,
          "iso_week": 46,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-11-11",
          "year": 2026,
          "month": 11,
          "day": 11,
          "iso_week": 46,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-11-12",
          "year": 2026,
          "month": 11,
          "day": 12,
          "iso_week": 46,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-11-13",
          "year": 2026,
          "month": 11,
          "day": 13,
          "iso_week": 46,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-11-14",
          "year": 2026,
          "month": 11,
          "day": 14,
          "iso_week": 46,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-15",
          "year": 2026,
          "month": 11,
          "day": 15,
          "iso_week": 46,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-16",
          "year": 2026,
          "month": 11,
          "day": 16,
          "iso_week": 47,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-11-17",
          "year": 2026,
          "month": 11,
          "day": 17,
          "iso_week": 47,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-11-18",
          "year": 2026,
          "month": 11,
          "day": 18,
          "iso_week": 47,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-11-19",
          "year": 2026,
          "month": 11,
          "day": 19,
          "iso_week": 47,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-11-20",
          "year": 2026,
          "month": 11,
          "day": 20,
          "iso_week": 47,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-11-21",
          "year": 2026,
          "month": 11,
          "day": 21,
          "iso_week": 47,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-22",
          "year": 2026,
          "month": 11,
          "day": 22,
          "iso_week": 47,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-23",
          "year": 2026,
          "month": 11,
          "day": 23,
          "iso_week": 48,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-24",
          "year": 2026,
          "month": 11,
          "day": 24,
          "iso_week": 48,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-25",
          "year": 2026,
          "month": 11,
          "day": 25,
          "iso_week": 48,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-26",
          "year": 2026,
          "month": 11,
          "day": 26,
          "iso_week": 48,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-27",
          "year": 2026,
          "month": 11,
          "day": 27,
          "iso_week": 48,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-11-28",
          "year": 2026,
          "month": 11,
          "day": 28,
          "iso_week": 48,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-29",
          "year": 2026,
          "month": 11,
          "day": 29,
          "iso_week": 48,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-11-30",
          "year": 2026,
          "month": 11,
          "day": 30,
          "iso_week": 49,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-01",
          "year": 2026,
          "month": 12,
          "day": 1,
          "iso_week": 49,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-02",
          "year": 2026,
          "month": 12,
          "day": 2,
          "iso_week": 49,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-03",
          "year": 2026,
          "month": 12,
          "day": 3,
          "iso_week": 49,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-04",
          "year": 2026,
          "month": 12,
          "day": 4,
          "iso_week": 49,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-05",
          "year": 2026,
          "month": 12,
          "day": 5,
          "iso_week": 49,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-06",
          "year": 2026,
          "month": 12,
          "day": 6,
          "iso_week": 49,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-07",
          "year": 2026,
          "month": 12,
          "day": 7,
          "iso_week": 50,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-08",
          "year": 2026,
          "month": 12,
          "day": 8,
          "iso_week": 50,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-09",
          "year": 2026,
          "month": 12,
          "day": 9,
          "iso_week": 50,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-10",
          "year": 2026,
          "month": 12,
          "day": 10,
          "iso_week": 50,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-11",
          "year": 2026,
          "month": 12,
          "day": 11,
          "iso_week": 50,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-12",
          "year": 2026,
          "month": 12,
          "day": 12,
          "iso_week": 50,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "transferred_workday",
          "holiday_name": null,
          "note": "Отработка за 24 декабря (перенесенный рабочий день)",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          }
        },
        {
          "date": "2026-12-13",
          "year": 2026,
          "month": 12,
          "day": 13,
          "iso_week": 50,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-14",
          "year": 2026,
          "month": 12,
          "day": 14,
          "iso_week": 51,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-12-15",
          "year": 2026,
          "month": 12,
          "day": 15,
          "iso_week": 51,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-12-16",
          "year": 2026,
          "month": 12,
          "day": 16,
          "iso_week": 51,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-12-17",
          "year": 2026,
          "month": 12,
          "day": 17,
          "iso_week": 51,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-12-18",
          "year": 2026,
          "month": 12,
          "day": 18,
          "iso_week": 51,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "C",
            "shift2_afternoon": "A",
            "shift3_night": "B"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "B": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "C": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            }
          }
        },
        {
          "date": "2026-12-19",
          "year": 2026,
          "month": 12,
          "day": 19,
          "iso_week": 51,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-20",
          "year": 2026,
          "month": 12,
          "day": 20,
          "iso_week": 51,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-21",
          "year": 2026,
          "month": 12,
          "day": 21,
          "iso_week": 52,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-22",
          "year": 2026,
          "month": 12,
          "day": 22,
          "iso_week": 52,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-23",
          "year": 2026,
          "month": 12,
          "day": 23,
          "iso_week": 52,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "A",
            "shift2_afternoon": "B",
            "shift3_night": "C"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "B": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            },
            "C": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            }
          }
        },
        {
          "date": "2026-12-24",
          "year": 2026,
          "month": 12,
          "day": 24,
          "iso_week": 52,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "bridge_day_off",
          "holiday_name": null,
          "note": "Перенесенный выходной день (Рождественский сочельник, отработан 12 декабря)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-25",
          "year": 2026,
          "month": 12,
          "day": 25,
          "iso_week": 52,
          "weekday_idx": 4,
          "weekday_hu": "P",
          "weekday_ru": "Пт",
          "weekday_ru_full": "Пятница",
          "status": "holiday",
          "holiday_name": "Рождество (Karácsony)",
          "note": "Государственный праздник",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-26",
          "year": 2026,
          "month": 12,
          "day": 26,
          "iso_week": 52,
          "weekday_idx": 5,
          "weekday_hu": "SZ",
          "weekday_ru": "Сб",
          "weekday_ru_full": "Суббота",
          "status": "holiday",
          "holiday_name": "Второй день Рождества (Karácsony másnapja)",
          "note": "Праздник (выпадает на субботу)",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-27",
          "year": 2026,
          "month": 12,
          "day": 27,
          "iso_week": 52,
          "weekday_idx": 6,
          "weekday_hu": "V",
          "weekday_ru": "Вс",
          "weekday_ru_full": "Воскресенье",
          "status": "weekend",
          "holiday_name": null,
          "note": "Выходной",
          "shifts": {
            "shift1_morning": null,
            "shift2_afternoon": null,
            "shift3_night": null
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "B": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            },
            "C": {
              "shift_num": 0,
              "name": "Выходной",
              "time": "-"
            }
          }
        },
        {
          "date": "2026-12-28",
          "year": 2026,
          "month": 12,
          "day": 28,
          "iso_week": 53,
          "weekday_idx": 0,
          "weekday_hu": "H",
          "weekday_ru": "Пн",
          "weekday_ru_full": "Понедельник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          },
          "factory_note": "Téli leállás — зимняя остановка производства (ежегодный отпуск по Szabadságos lap, ст. 122 ТК Венгрии)"
        },
        {
          "date": "2026-12-29",
          "year": 2026,
          "month": 12,
          "day": 29,
          "iso_week": 53,
          "weekday_idx": 1,
          "weekday_hu": "K",
          "weekday_ru": "Вт",
          "weekday_ru_full": "Вторник",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          },
          "factory_note": "Téli leállás — зимняя остановка производства (ежегодный отпуск по Szabadságos lap, ст. 122 ТК Венгрии)"
        },
        {
          "date": "2026-12-30",
          "year": 2026,
          "month": 12,
          "day": 30,
          "iso_week": 53,
          "weekday_idx": 2,
          "weekday_hu": "SZE",
          "weekday_ru": "Ср",
          "weekday_ru_full": "Среда",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          },
          "factory_note": "Téli leállás — зимняя остановка производства (ежегодный отпуск по Szabadságos lap, ст. 122 ТК Венгрии)"
        },
        {
          "date": "2026-12-31",
          "year": 2026,
          "month": 12,
          "day": 31,
          "iso_week": 53,
          "weekday_idx": 3,
          "weekday_hu": "CS",
          "weekday_ru": "Чт",
          "weekday_ru_full": "Четверг",
          "status": "workday",
          "holiday_name": null,
          "note": "Обычный рабочий день",
          "shifts": {
            "shift1_morning": "B",
            "shift2_afternoon": "C",
            "shift3_night": "A"
          },
          "brigade_assignments": {
            "A": {
              "shift_num": 3,
              "name": "Ночь",
              "time": "22:00 - 06:00"
            },
            "B": {
              "shift_num": 1,
              "name": "Утро",
              "time": "06:00 - 14:00"
            },
            "C": {
              "shift_num": 2,
              "name": "День/Вечер",
              "time": "14:00 - 22:00"
            }
          },
          "factory_note": "Téli leállás — зимняя остановка производства (ежегодный отпуск по Szabadságos lap, ст. 122 ТК Венгрии)"
        }
      ]
    }
  }
};

window.SCHEDULE_DATA = window.SCHEDULE_PERIODS.periods[window.SCHEDULE_PERIODS.defaultPeriod];
