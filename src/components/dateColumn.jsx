import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import TourCard from "./tourCard";
import { getDate, addMinutes, format, parse } from "date-fns";
import { Chip } from "@nextui-org/react";
import { Fragment } from "react";
import { getEventTimes, handleDrop } from "../lib";

export default function DateColumn({ date, tours, onDrop, formik, dataColumndId }) {
  const [ref, items] = useDragAndDrop(tours, {
    group: "tourPlanner",
    sortable: false,
    onDragstart: (event) => {
      // console.log("Dragging: starting", event);
    },
    onDragend: (event) => {
      // console.log("onDragend: hola", event);
      // onDrop(date.toISOString(), event);
    },
    handleEnd: (event, second, third) => {
      return event;
    },
    handleNodeDrop: (event, second, third) => {
      handleDrop(date.toISOString(), event, onDrop);
      return event;
    }
  });

  const SLOT_HEIGHT = 50;

  const calculatePosition = (time) => {
    const { startHour } = getEventTimes(time);
    const minutesFromStart = (startHour - 6) * 60;
    return (minutesFromStart / 30) * SLOT_HEIGHT;
  };

  const calculateHeight = (time) => {
    const { startHour, endHour } = getEventTimes(time);
    const totalMinutes = (endHour - startHour) * 60;
    return (totalMinutes / 30) * SLOT_HEIGHT;
  };

  const convertToMinutes = (timeString) => {
    if (!timeString) return;

    const [hour, minute] = timeString.split(":");
    const period = timeString.split(" ")[1]; // AM or PM

    let hoursIn24Format = parseInt(hour, 10);
    if (period === "PM" && hoursIn24Format !== 12) {
      hoursIn24Format += 12;
    }
    if (period === "AM" && hoursIn24Format === 12) {
      hoursIn24Format = 0;
    }

    return hoursIn24Format * 60 + parseInt(minute, 10);
  };

  const calculatePositionHotelTime = (time) => {
    const minutesFromStart = convertToMinutes(time) - convertToMinutes("06:00 AM"); // Minutos desde las 6:00 AM
    return (minutesFromStart / 30) * SLOT_HEIGHT; // Escalar según SLOT_HEIGHT
  };

  const calculateHeightHotelTime = (startTime, endTime) => {
    const startMinutes = convertToMinutes(startTime);
    const endMinutes = convertToMinutes(endTime);
    const totalMinutes = endMinutes - startMinutes;
    return (totalMinutes / 30) * SLOT_HEIGHT;
  };

  function generateTimeSlots(date) {
    const startTime = new Date(date);
    startTime.setHours(6, 0, 0, 0);
    const endTime = addMinutes(startTime, 20 * 60);

    const slots = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
      slots.push(new Date(currentTime));
      currentTime = addMinutes(currentTime, 30);
    }

    return slots;
  }

  const timeSlots = generateTimeSlots(date);

  const getHotelTimes = (hotelName, tourHotels) => {
    const hotel = tourHotels.find((hotel) => hotel[hotelName]);
    return hotel ? hotel[hotelName] : {};
  };

  return (
    <div className="column vertical-scroll">
      <div className="sticky top-0 z-40 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">Day {getDate(date)}</h2>
      </div>

      <div className="relative flex">
        <div>
          {timeSlots.map((timeSlot, index) => (
            <div key={index} className="time-slot border-b border-gray-300 p-2" style={{ height: SLOT_HEIGHT }}>
              <div className="time-label text-sm text-gray-600">{format(timeSlot, "hh:mm a")}</div>
            </div>
          ))}
        </div>
        {Array.isArray(items) &&
          items[0] &&
          items.map((tourTime, index) => {
            const hotelTimes = getHotelTimes(formik.values.pick_up_location, tourTime.pick_up_hotel_locations);
            return (
              <Fragment key={index}>
                {formik.values.pick_up_location && hotelTimes && date && (
                  <Chip
                    size="sm"
                    radius="sm"
                    color="primary"
                    className="absolute left-20 z-20 ml-1 h-min w-[75%] !max-w-[75%] whitespace-normal"
                    style={{
                      top: calculatePositionHotelTime(hotelTimes.pick_up_time),
                      height: calculateHeightHotelTime(hotelTimes.pick_up_time),
                      zIndex: 20 + index + 1
                    }}
                  >
                    Pick up time: {format(parse(hotelTimes.pick_up_time, "hh:mm a", new Date()), "hh:mm a")} at hotel&nbsp;
                    <span className="font-semibold">{formik.values.pick_up_location}</span>
                  </Chip>
                )}
                {formik.values.pick_up_location && hotelTimes && date && (
                  <Chip
                    size="sm"
                    radius="sm"
                    color="warning"
                    className="absolute left-20 z-10 ml-1 w-[75%] max-w-none"
                    style={{
                      top: calculatePositionHotelTime(hotelTimes.transfer_time.start),
                      height: calculateHeightHotelTime(hotelTimes.transfer_time.start, hotelTimes.transfer_time.end),
                      zIndex: 10 + index + 1
                    }}
                  >
                    Transfer time: {format(parse(hotelTimes.transfer_time.start, "hh:mm a", new Date()), "hh:mm a")}
                    &nbsp;until&nbsp;
                    {format(parse(hotelTimes.transfer_time.end, "hh:mm a", new Date()), "hh:mm a")}
                  </Chip>
                )}
              </Fragment>
            );
          })}
        <div ref={ref} data-column-id={dataColumndId} className="flex-1 bg-slate-100">
          {items.map((tour, index) => (
            <TourCard
              key={tour.id}
              tour={tour}
              className="absolute left-20 ml-1 w-[75%] cursor-grab"
              columnDay={date}
              style={{
                top: calculatePosition(tour.time),
                height: calculateHeight(tour.time),
                zIndex: 10 + index + 1
              }}
              SLOT_HEIGHT={SLOT_HEIGHT}
              hotelName={formik.values.pick_up_location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
