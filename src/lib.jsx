import { Slide, toast } from "react-toastify";

const ToastNotification = (message, type, duration, callback) => {
  const config = {
    position: "top-right",
    autoClose: duration || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide
  };

  if (type === "success") {
    toast.success(message, config);
  } else if (type === "warning") {
    toast.warn(message, config);
  } else {
    toast.error(message, config);
  }
};

const getEventTimes = (time) => {
  if (time === "all_day") return { startHour: 8, endHour: 18 };
  if (time === "morning") return { startHour: 8, endHour: 12 };
  if (time === "afternoon") return { startHour: 14, endHour: 18 };
  if (time === "only_night") return { startHour: 20, endHour: 25 };
  return { startHour: 8, endHour: 12 }; // Default
};

function areTimesOverlapping(start1, end1, start2, end2) {
  return (start1 >= start2 && start1 < end2) || (start2 >= start1 && start2 < end1);
}

const handleDrop = (date, event, onDrop) => {
  const currentParentColumnTours = event.targetData.parent.data.enabledNodes;
  const currentTourElement = event.targetData.node.el;
  const currentTour = event.targetData.node.data.value;

  const { startHour: startDroppedHour, endHour: endDroppedHour } = getEventTimes(currentTour.time);
  const startDropped = startDroppedHour * 60;
  const endDropped = endDroppedHour * 60;

  if (Array.isArray(currentParentColumnTours) && currentParentColumnTours && currentParentColumnTours.length > 1) {
    const conflict = currentParentColumnTours.some((tour) => {
      if (tour.id !== currentTour.id) {
        const { startHour: startExistingHour, endHour: endExistingHour } = getEventTimes(tour.time);

        const startExisting = startExistingHour * 60;
        const endExisting = endExistingHour * 60;

        return areTimesOverlapping(startDropped, endDropped, startExisting, endExisting);
      }
    });
    console.log("conflict ", conflict);
    if (conflict && date) {
      currentTourElement.classList.add("joined-tour");
      ToastNotification("This time slot is already occupied. Please select a different time.", "warning", 5000);
    } else {
      onDrop(date, event);
    }
  }
};

export { ToastNotification, handleDrop, getEventTimes };
