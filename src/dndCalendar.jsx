import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useState, useMemo, useCallback } from "react";
import TourCard from "./components/tourCard";
import DateColumn from "./components/dateColumn";
import { tours, hotels } from "./components/placeholderInfo";
import { eachDayOfInterval, format, parseISO } from "date-fns";
import CustomDatePicker from "./components/customDatePicker";
import { Input, Select, SelectItem, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleDrop } from "./lib";

export default function DndCalendar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const itineraryFormik = useFormik({
    initialValues: {
      startDate: "2024-11-25",
      endDate: "2024-11-30",
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      adults: 0,
      children: 0,
      pick_up_location: "Melia Caribe Beach"
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const [dateToursMap, setDateToursMap] = useState({});

  const dateColumns = useMemo(() => {
    if (!itineraryFormik.values.startDate || !itineraryFormik.values.endDate) return [];

    const startDate = parseISO(itineraryFormik.values.startDate);
    const endDate = parseISO(itineraryFormik.values.endDate);

    return eachDayOfInterval({
      start: startDate,
      end: endDate
    });
  }, [itineraryFormik.values.startDate, itineraryFormik.values.endDate]);

  const [availableRef, availableItems] = useDragAndDrop(tours, {
    group: "tourPlanner",
    sortable: false,
    onDragend: (item) => {
      // console.log("Item: ", item);
      if (item.draggedNode.data.value.id) {
        setDateToursMap((prev) => ({
          ...prev,
          [item.draggedNode.data.value.id]: [...(prev[item.draggedNode.data.value.id] || [])]
        }));
      }
    },
    onDragstart: (event) => {
      // console.log("Dragging: ", event);
    },
    onSort: (event) => {
      // console.log("onSort: hola", event);
    },
    onTransfer: (event) => {
      // console.log("onTransfer: hola", event);
    },
    handleEnd: (event) => {
      return event;
    },
    handleNodeDrop: (event) => {
      handleDrop(null, event, handleDateDrop);
      return event;
    }
  });

  const handleDateDrop = useCallback((dateKey, items) => {
    setDateToursMap((prev) => ({
      ...prev,
      [dateKey]: items
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-[50] mx-5 mt-5 flex flex-wrap rounded-lg bg-white p-5 shadow-sm lg:justify-between">
        <h4 className="mb-5 font-cookie text-4xl">
          Create your custom itinerary with Punta Cana Transfer{" "}
          <small className="text-xl">
            / {format(itineraryFormik.values.startDate || itineraryFormik.values.endDate || new Date(), "MMMM yyyy")}
          </small>
        </h4>
        <Button color="primary" onPress={onOpen}>
          Fill out information
        </Button>
      </div>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-5">
          <ModalHeader className="flex flex-col gap-1">Required information</ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <Input
                  label="Name"
                  labelPlacement="outside"
                  value={itineraryFormik.values.name}
                  onChange={itineraryFormik.handleChange}
                  isInvalid={itineraryFormik.errors.name && itineraryFormik.touched.name && itineraryFormik.errors.name}
                  id="name"
                  name="name"
                  placeholder="John"
                  color={itineraryFormik.touched.name && itineraryFormik.errors.name ? "danger" : ""}
                  errorMessage={itineraryFormik.errors.name && itineraryFormik.touched.name && itineraryFormik.errors.name}
                />
                <Input
                  label="Last name"
                  labelPlacement="outside"
                  value={itineraryFormik.values.last_name}
                  onChange={itineraryFormik.handleChange}
                  id="last_name"
                  name="last_name"
                  placeholder="Smith"
                  isInvalid={itineraryFormik.errors.last_name && itineraryFormik.touched.last_name && itineraryFormik.errors.last_name}
                  color={itineraryFormik.touched.last_name && itineraryFormik.errors.last_name ? "danger" : ""}
                  errorMessage={itineraryFormik.errors.last_name && itineraryFormik.touched.last_name && itineraryFormik.errors.last_name}
                />
              </div>
              <Input
                label="Your email"
                labelPlacement="outside"
                type="email"
                name="email"
                onChange={itineraryFormik.handleChange}
                value={itineraryFormik.values.email}
                id="email"
                placeholder="example@example.com"
                color={itineraryFormik.touched.email && itineraryFormik.errors.email ? "danger" : ""}
                errorMessage={itineraryFormik.errors.email && itineraryFormik.touched.email && itineraryFormik.errors.email}
                isInvalid={itineraryFormik.errors.email && itineraryFormik.touched.email && itineraryFormik.errors.email}
              />
              <Input
                label="Phone number"
                labelPlacement="outside"
                onChange={itineraryFormik.handleChange}
                name="phone_number"
                value={itineraryFormik.values.phone_number}
                type="tel"
                id="phone_number"
                placeholder="+1 000-000-0000"
                color={itineraryFormik.touched.phone_number && itineraryFormik.errors.phone_number ? "danger" : ""}
                errorMessage={
                  itineraryFormik.errors.phone_number && itineraryFormik.touched.phone_number && itineraryFormik.errors.phone_number
                }
                isInvalid={
                  itineraryFormik.errors.phone_number && itineraryFormik.touched.phone_number && itineraryFormik.errors.phone_number
                }
              />
              <Input
                label="Adults"
                labelPlacement="outside"
                type="number"
                value={itineraryFormik.values.adults}
                onChange={itineraryFormik.handleChange}
                id="adults"
                name="adults"
                placeholder="0"
                min={0}
                color={itineraryFormik.touched.adults && itineraryFormik.errors.adults ? "danger" : ""}
                errorMessage={itineraryFormik.errors.adults && itineraryFormik.touched.adults && itineraryFormik.errors.adults}
                isInvalid={itineraryFormik.errors.adults && itineraryFormik.touched.adults && itineraryFormik.errors.adults}
              />
              <Input
                label="Children"
                labelPlacement="outside"
                type="number"
                value={itineraryFormik.values.children}
                onChange={itineraryFormik.handleChange}
                id="children"
                name="children"
                placeholder="0"
                min={0}
                color={itineraryFormik.touched.children && itineraryFormik.errors.children ? "danger" : ""}
                errorMessage={itineraryFormik.errors.children && itineraryFormik.touched.children && itineraryFormik.errors.children}
                isInvalid={itineraryFormik.errors.children && itineraryFormik.touched.children && itineraryFormik.errors.children}
              />
              <Select
                label="Pick up location (hotel)"
                labelPlacement="outside"
                placeholder="Select your hotel"
                name="pick_up_location"
                onChange={itineraryFormik.handleChange}
                value={[itineraryFormik.values.pick_up_location]}
                defaultSelectedKeys={[itineraryFormik.values.pick_up_location]}
                color={itineraryFormik.touched.pick_up_location && itineraryFormik.errors.pick_up_location ? "danger" : ""}
                errorMessage={
                  itineraryFormik.errors.pick_up_location &&
                  itineraryFormik.touched.pick_up_location &&
                  itineraryFormik.errors.pick_up_location
                }
                isInvalid={
                  itineraryFormik.errors.pick_up_location &&
                  itineraryFormik.touched.pick_up_location &&
                  itineraryFormik.errors.pick_up_location
                }
              >
                {Array.isArray(hotels) &&
                  hotels[0] &&
                  hotels.map((hotel) => (
                    <SelectItem key={hotel} value={hotel}>
                      {hotel}
                    </SelectItem>
                  ))}
              </Select>
              <CustomDatePicker
                label="Start date"
                id="startDate"
                type="date"
                radius="xl"
                value={itineraryFormik.values.startDate}
                name="startDate"
                onChange={(res) => {
                  if (res.value) {
                    itineraryFormik.setFieldValue("startDate", format(res.value, "yyyy-MM-dd"));
                    return;
                  }
                  itineraryFormik.setFieldValue("startDate", "");
                }}
                classNames={{
                  inputWrapper: "bg-zinc-100"
                }}
              />
              <CustomDatePicker
                label="End date"
                id="endDate"
                name="endDate"
                type="date"
                radius="xl"
                value={itineraryFormik.values.endDate}
                onChange={(res) => {
                  if (res.value) {
                    itineraryFormik.setFieldValue("endDate", format(res.value, "yyyy-MM-dd"));
                    return;
                  }
                  itineraryFormik.setFieldValue("endDate", "");
                }}
                classNames={{
                  inputWrapper: "bg-zinc-100"
                }}
              />
            </div>
            <Button color="secondary" className="mt-2">
              Finish form
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div
        className="inner-board horizontal-scroll !h-screen flex-1 basis-0 p-4"
        style={{
          gridTemplateColumns: `repeat(${dateColumns.length + 1}, 1fr)`
        }}
      >
        <div className="column vertical-scroll sticky left-0 z-50">
          <div className="sticky top-0 z-50 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800">Available activities</h2>
          </div>
          <div ref={availableRef} data-column-id="column-0" className="min-h-full space-y-4 bg-slate-100 p-2">
            {Array.isArray(availableItems) &&
              availableItems[0] &&
              availableItems.map((tour) => <TourCard key={tour.id} tour={tour} className="cursor-grab hover:shadow-md" />)}
          </div>
        </div>

        {Array.isArray(dateColumns) &&
          dateColumns[0] &&
          dateColumns.map((date, index) => {
            const dateKey = date.toISOString();
            return (
              <DateColumn
                dataColumndId={`column-${index + 1}`}
                key={dateKey}
                date={date}
                tours={dateToursMap[dateKey] || []}
                onDrop={handleDateDrop}
                formik={itineraryFormik}
              />
            );
          })}
      </div>
    </div>
  );
}
