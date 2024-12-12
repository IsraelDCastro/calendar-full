import { useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isToday,
  isSameDay,
  addMonths,
  subMonths,
  getDaysInMonth,
  startOfMonth,
  getDay,
  isBefore,
  startOfDay,
  parseISO
} from "date-fns";

import { es, enUS, fr, de, pt, it, ja, ko, zhCN } from "date-fns/locale";

const locales = {
  es,
  "en": enUS,
  fr,
  de,
  pt,
  it,
  ja,
  ko,
  "zh-CN": zhCN
};

export default function CustomDatePicker({
  theme = "blue",
  specialDates = [],
  onChange,
  initialDate,
  locale = "en",
  minDate,
  dateFormat = "dd/MM/yyyy",
  radius = "md",
  id,
  name,
  label,
  value,
  onBlur,
  classNames = {
    inputClass: "",
    inputWrapper: ""
  }
}) {
  const [selectedDate, setSelectedDate] = useState(initialDate || null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = locales[locale] || locales.en;

  const themes = {
    primary: {
      primary: "bg-primary-500",
      hover: "hover:bg-primary-600",
      smooth_hover: "hover:bg-primary-500/30",
      text: "text-primary-500",
      border: "border-primary-500"
    },
    secondary: {
      primary: "bg-secondary-500",
      hover: "hover:bg-secondary-600",
      smooth_hover: "hover:bg-secondary-500/30",
      text: "text-secondary-500",
      border: "border-secondary-500"
    },
    blue: {
      primary: "bg-sky-500",
      hover: "hover:bg-sky-600",
      smooth_hover: "hover:bg-sky-500/30",
      text: "text-sky-500",
      border: "border-sky-500"
    },
    purple: {
      primary: "bg-purple-500",
      hover: "hover:bg-purple-600",
      smooth_hover: "hover:bg-purple-500/30",
      text: "text-purple-500",
      border: "border-purple-500"
    },
    green: {
      primary: "bg-emerald-500",
      hover: "hover:bg-emerald-600",
      smooth_hover: "hover:bg-emerald-500/30",
      text: "text-emerald-500",
      border: "border-emerald-500"
    },
    rose: {
      primary: "bg-rose-500",
      hover: "hover:bg-rose-600",
      smooth_hover: "hover:bg-rose-500/30",
      text: "text-rose-500",
      border: "border-rose-500"
    }
  };

  const currentTheme = themes[theme] || themes.blue;

  const getWeekDays = () => {
    const start = startOfWeek(new Date(), { locale: currentLocale });
    const end = endOfWeek(new Date(), { locale: currentLocale });

    return eachDayOfInterval({ start, end }).map((day) => format(day, "EEEEEE", { locale: currentLocale }));
  };

  const getMonthDays = (date) => {
    const start = startOfMonth(date);
    const totalDays = getDaysInMonth(date);
    const firstDayOfMonth = getDay(start);

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i += 1) {
      const prevDate = new Date(date.getFullYear(), date.getMonth(), -i);
      days.unshift({
        date: prevDate,
        isCurrentMonth: false
      });
    }

    for (let i = 1; i <= totalDays; i += 1) {
      const day = new Date(date.getFullYear(), date.getMonth(), i);
      days.push({
        date: day,
        isCurrentMonth: true
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i += 1) {
      const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, i);
      days.push({
        date: nextDate,
        isCurrentMonth: false
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateSelect = (date) => {
    if (minDate && isBefore(startOfDay(date), startOfDay(minDate))) return;
    setSelectedDate(date);
    onChange?.({
      name,
      value: date
    });
    setTimeout(() => setIsOpen(false), 150);
  };

  const formatSelectedDate = (date) => {
    if (!date) return "";
    if (dateFormat === "dd/MM/yyyy") {
      return format(date, "dd/MM/yyyy", { locale: currentLocale });
    }
    if (dateFormat === "MM/dd/yyyy") {
      return format(date, "MM/dd/yyyy", { locale: currentLocale });
    }
    if (dateFormat === "PPP") {
      return format(date, "PPP", { locale: currentLocale });
    }
    if (dateFormat === "yyyy-MM-dd") {
      return format(date, "yyyy-MM-dd", { locale: currentLocale });
    }

    return format(date, "PPP", { locale: currentLocale });
  };

  const getSpecialDate = (date) => {
    return specialDates.find((special) => isSameDay(special.date, date));
  };

  const isDateDisabled = (date) => {
    return minDate && isBefore(startOfDay(date), startOfDay(minDate));
  };

  const getPlaceholderFormat = () => {
    if (dateFormat === "dd/MM/yyyy") {
      return "DD/MM/YYYY";
    }
    if (dateFormat === "MM/dd/yyyy") {
      return "MM/DD/YYYY";
    }
    if (dateFormat === "PPP") {
      return format(new Date(), "PPP", { locale: currentLocale });
    }
    if (dateFormat === "yyyy-MM-dd") {
      return "yyyy-MM-dd";
    }

    return format(new Date(), "PPP", { locale: currentLocale });
  };

  const borderRadius = () => {
    if (radius === "sm") return "rounded-sm";
    if (radius === "md") return "rounded-md";
    if (radius === "lg") return "rounded-lg";
    if (radius === "xl") return "rounded-xl";
    if (radius === "full") return "rounded-full";
    return "rounded-lg";
  };

  return (
    <div className="relative">
      {label && <label className="m-1 block text-sm text-slate-500">{label}</label>}
      <div
        role="button"
        tabIndex={-1}
        className={`flex w-full items-center gap-3 ${borderRadius()} ${classNames?.inputWrapper} cursor-pointer bg-white p-3 duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={`size-4 ${currentTheme.text}`}>
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
        </svg>
        <input
          id={id}
          name={name}
          onBlur={onBlur ? () => onBlur() : null}
          type="text"
          className={`flex-1 cursor-pointer bg-transparent text-sm font-normal leading-none outline-none ${classNames?.inputClass}`}
          placeholder={getPlaceholderFormat()}
          value={formatSelectedDate(selectedDate || (value && parseISO(value)))}
          readOnly
        />

        {selectedDate && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDate(null);
              onChange?.({
                name,
                value: null
              });
            }}
            className="absolute right-3 rounded-full p-1 transition-colors duration-200 hover:bg-gray-100"
          >
            <span className="sr-only">Remove</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="size-4 text-gray-500">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-[100] mt-2 w-72 transform rounded-lg border bg-white p-4 shadow-xl transition-all duration-500 ease-in-out">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevMonth}
              className={`${currentTheme.smooth_hover} rounded-full p-2 transition-colors duration-200 hover:bg-gray-100`}
            >
              <span className="sr-only">Left</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className={`${currentTheme.text} h-5 w-5`}>
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <div className="font-semibold capitalize text-gray-800">{format(currentMonth, "MMMM yyyy", { locale: currentLocale })}</div>
            <button
              type="button"
              onClick={handleNextMonth}
              className={`${currentTheme.smooth_hover} rounded-full p-2 transition-colors duration-200 hover:bg-gray-100`}
            >
              <span className="sr-only">Right</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className={`${currentTheme.text} h-5 w-5`}>
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getWeekDays().map((day) => (
              <div key={day} className="py-1 text-center text-sm font-medium capitalize text-gray-600">
                {day}
              </div>
            ))}

            {getMonthDays(currentMonth).map((dayObj, index) => {
              const isSelected = selectedDate && isSameDay(dayObj.date, selectedDate);
              const isDayToday = isToday(dayObj.date);
              const specialDate = getSpecialDate(dayObj.date);
              const isDateDisabledProp = isDateDisabled(dayObj.date);

              return (
                <div key={index} className="relative">
                  <button
                    type="button"
                    onClick={() => handleDateSelect(dayObj.date)}
                    className={`w-full rounded-full py-1 text-center text-sm transition-all duration-200 ${!dayObj.isCurrentMonth ? "text-gray-400" : "text-gray-700"} ${isSelected ? `${currentTheme.primary} text-white ${currentTheme.hover}` : `${currentTheme.smooth_hover}`} ${isDayToday && !isSelected ? `border ${currentTheme.border} ${currentTheme.text} ` : ""} ${isDateDisabledProp ? "cursor-not-allowed opacity-50" : ""} relative z-10`}
                    disabled={isDateDisabledProp}
                  >
                    {format(dayObj.date, "d")}
                  </button>
                  {specialDate && (
                    <div
                      className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 transform rounded-full"
                      style={{ backgroundColor: specialDate?.color }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {Array.isArray(specialDates) && specialDates[0] && specialDates.length > 0 && (
            <div className="mt-4 border-t pt-3">
              <div className="mb-2 text-xs font-medium text-gray-500">{format(new Date(), "'Eventos'", { locale: currentLocale })}:</div>
              <div className="space-y-1">
                {specialDates.map((special, index) => (
                  <div key={index} className="flex items-center text-xs">
                    <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: special?.color }} />
                    <span>{special?.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
