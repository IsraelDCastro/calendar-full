import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import TourCard from "./tourCard";
import { getDate } from "date-fns";

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

  return (
    <div className="column vertical-scroll">
      <div className="sticky top-0 z-50 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">Day {getDate(date)}</h2>
      </div>
      <div ref={ref} className="min-h-full space-y-4 bg-slate-100 p-2">
        {items.map((tour) => (
          <TourCard key={tour.id} tour={tour} className="cursor-grab hover:shadow-md" columnDay={date} />
        ))}
      </div>
    </div>
  );
}
