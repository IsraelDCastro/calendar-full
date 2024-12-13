import { Button, Card, CardBody, CardHeader, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";

export default function Timeline({ itinerary }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[1.75rem] top-10 hidden h-full w-[8px] rounded-md bg-primary-800 md:block" />
      <div className="relative flex flex-wrap gap-8">
        <div className="hidden size-16 items-center justify-center rounded-full bg-primary-800 md:flex">
          <p className="mb-0 font-cookie text-2xl leading-none text-white sm:text-4xl">{itinerary?.day}</p>
        </div>
        <div className="flex flex-1 flex-wrap gap-5 rounded-xl bg-gray-100 p-5 md:ml-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary-800 md:hidden">
            <p className="mb-0 font-cookie text-xl leading-none text-white sm:text-2xl">{itinerary?.day}</p>
          </div>
          {Array.isArray(itinerary?.tours) &&
            itinerary?.tours[0] &&
            itinerary?.tours.map((tour, index) => (
              <Card
                key={index}
                shadow="none"
                className={`p-5 text-slate-600 sm:flex-row lg:w-1/2 lg:basis-1/2 ${itinerary?.tours.length > 1 && "lg:flex-1"}`}
              >
                <CardHeader className="aspect-[16/9] overflow-hidden rounded-lg bg-slate-100 p-0 sm:aspect-[3/4] sm:w-4/12">
                  <img src={tour?.image} className="h-full w-full object-cover object-center" alt={tour?.name} />
                </CardHeader>
                <CardBody className="flex-1">
                  <div className="mb-2">
                    <h2 className="mb-2 !font-cookie text-3xl font-bold sm:text-4xl">{tour?.name}</h2>
                    <p className="line-clamp-4 text-sm">{tour?.description}</p>
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {tour?.price?.adult && (
                        <div>
                          <span>Adult: </span>
                          <span className="font-bold">USD ${tour?.price?.adult}</span>
                        </div>
                      )}
                      {tour?.price?.child && (
                        <div>
                          <span>Child: </span>
                          <span className="font-bold">USD ${tour?.price?.child}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-bold">Start: </span>
                        <span>{tour?.time}</span>
                      </div>
                    </div>
                  </div>
                  <Popover shadow="none" placement="bottom-end">
                    <PopoverTrigger>
                      <Button color="success" className="mt-auto">
                        Check itinerary
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-gray-50 p-5 shadow-none">
                      {Array.isArray(tour?.tour_itinerary) && (
                        <ul className="list-disc space-y-1 pl-5">
                          {tour?.tour_itinerary.map((itinerary) => (
                            <li key={itinerary}>{itinerary}</li>
                          ))}
                        </ul>
                      )}
                    </PopoverContent>
                  </Popover>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
