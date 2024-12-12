import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import TourCard from "./tourCard";
import { getDate, addMinutes, format, parseISO } from "date-fns";

export default function DateColumn({ date, tours, onDrop }) {
  const [ref, items] = useDragAndDrop(tours, {
    group: "tourPlanner",
    onDragstart: (event) => {
      console.log("Dragging: starting", event);
    },
    onDragend: (event) => {
      console.log("onDragend: hola", event);
      onDrop(date.toISOString(), event);
    },
    onSort: (event) => {
      console.log("onSort: hola", event);
    },
    onTransfer: (event) => {
      console.log("onTransfer: hola", event);
    }
  });

  function generateTimeSlots(date) {
    const startTime = new Date(date);
    startTime.setHours(6, 0, 0, 0); // 06:00 AM
    const endTime = addMinutes(startTime, 20 * 60); // 20 horas, hasta las 02:00 AM

    const slots = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
      slots.push(currentTime);
      currentTime = addMinutes(currentTime, 30); // Incrementar por 30 minutos
    }

    return slots;
  }
  const getEventTimes = (duration) => {
    switch (`${duration}`) {
      case "all_day":
        return { startHour: 8, endHour: 18 }; // 8 AM - 6 PM
      case "morning":
        return { startHour: 8, endHour: 12 }; // 8 AM - 1 PM
      case "half_day":
        return { startHour: 13, endHour: 18 }; // 1 PM - 6 PM
      case "only_night":
        return { startHour: 18, endHour: 24 }; // 6 PM - 2 AM (26 = 2 AM next day)
      default:
        return { startHour: 8, endHour: 11 }; // Default 8 AM - 12 PM
    }
  };

  function isTourInTimeSlot(tour, timeSlot) {
    const { startHour, endHour } = getEventTimes(tour.duration, tour.time);
    debugger;
    const tourStart = parseISO(startHour);
    const tourEnd = parseISO(endHour);
    return tourStart >= timeSlot && tourEnd < addMinutes(timeSlot, 30);
  }

  const timeSlots = generateTimeSlots(date);

  return (
    <div className="column vertical-scroll">
      <div className="sticky top-0 z-50 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">Day {getDate(date)}</h2>
      </div>
      <div ref={ref} className="min-h-full space-y-4 bg-slate-100 p-2">
        {timeSlots.map((timeSlot) => {
          const slotTours = tours.filter((tour) => isTourInTimeSlot(tour, timeSlot)); // Filtrar tours para este intervalo (opcional)
          return (
            <div key={timeSlot}>
              <div key={timeSlot.toISOString()} className="time-slot border-b border-gray-300 p-2">
                <div className="time-label text-sm text-gray-600">{format(timeSlot, "hh:mm a")}</div>
              </div>
              <div>
                {slotTours.map((tour) => {
                  return <TourCard key={tour.id} tour={tour} className="cursor-grab hover:shadow-md" columnDay={date} />;
                })}
              </div>
            </div>
          );
        })}
        {items.map((tour) => (
          <TourCard key={tour.id} tour={tour} className="cursor-grab hover:shadow-md" columnDay={date} />
        ))}
      </div>
    </div>
  );
}
