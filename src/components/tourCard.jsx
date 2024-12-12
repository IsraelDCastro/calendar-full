import {
  Card,
  CardBody,
  Chip,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Tabs,
  Tab,
  Button
} from "@nextui-org/react";
import { format } from "date-fns";
import { getEventTimes } from "../lib";

export default function TourCard({ tour, className, columnDay, style }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getHourTimeByDay = () => {
    if (tour && columnDay) {
      const { startHour, endHour } = getEventTimes(tour.time);
      const baseDate = new Date(columnDay);

      const startDate = new Date(baseDate.setHours(startHour, 0, 0, 0));
      const endDate = new Date(baseDate.setHours(endHour, 0, 0, 0));

      if (endHour >= 24) {
        endDate.setDate(endDate.getDate() + 1);
      }

      return {
        start: startDate,
        end: endDate
      };
    }
    return {};
  };

  const tourTime = getHourTimeByDay();

  return (
    <>
      <Card
        shadow="none"
        className={`${className} cursor-grab text-slate-600 transition-all duration-200`}
        data-id={tour?.id}
        style={{ ...style }}
      >
        <CardBody>
          {tour && columnDay && (
            <Chip size="sm" radius="sm" color="success" className="h-min !max-w-none whitespace-normal">
              Start activity time {format(tourTime?.start, "hh:mm a")}
              &nbsp;until&nbsp;
              {format(tourTime?.end, "hh:mm a")}
            </Chip>
          )}
          <div className="mb-2">
            <h2 className="mb-2 text-xl font-bold">{tour?.name}</h2>
            <p className="line-clamp-2 text-sm">{tour?.description}</p>
          </div>
          <div className="text-sm">
            <div className="mb-2 flex flex-wrap gap-5">
              {tour?.price?.adult && (
                <div>
                  <span>Adult: </span>
                  <span className="font-bold text-primary-600">USD ${tour?.price?.adult}</span>
                </div>
              )}
              {tour?.price?.child && (
                <div>
                  <span>Child: </span>
                  <span className="font-bold text-primary-600">USD ${tour?.price?.child}</span>
                </div>
              )}
            </div>
            <Button fullWidth onClick={onOpen} variant="light" size="sm" color="primary">
              View information tour
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal size="3xl" radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="vertical-scroll h-[95%] overflow-y-auto">
          <ModalHeader className="flex flex-col gap-1 bg-white text-base shadow-sm">
            <h3 className="text-3xl">{tour?.name}</h3>
            <div className="mb-2 flex flex-wrap gap-5">
              {tour?.price?.adult && (
                <div>
                  <span>Adult: </span>
                  <span className="font-bold text-primary-600">USD ${tour?.price?.adult}</span>
                </div>
              )}
              {tour?.price?.child && (
                <div>
                  <span>Child: </span>
                  <span className="font-bold text-primary-600">USD ${tour?.price?.child}</span>
                </div>
              )}
            </div>
          </ModalHeader>
          <ModalBody>
            <Tabs variant="underlined" color="primary" aria-label="Options">
              <Tab key="description" title="Description">
                <h4 className="mb-4 text-xl font-semibold">Description</h4>
                <p>{tour?.description}</p>
                <p>Join Us on an Unforgettable Four-Wheel Drive ATV Adventure!</p>
                <p>
                  Rev up your engine and embark on an adrenaline-pumping journey through the stunning landscapes of Punta Cana. Our
                  Adventure ATVs tour offers the perfect blend of thrill, culture, and natural beauty, taking you off the beaten path to
                  explore the true essence of the Dominican Republic.
                </p>
                <h4 className="mb-4 text-xl font-semibold">Tour Description</h4>
                <p>
                  <strong>Explore Scenic Rural Roads: </strong>Kick off your adventure by navigating northern Punta Cana&apos;s rugged rural
                  roads and trails. With the guidance of our expert tour guide, you’ll steer through diverse terrains, feeling the rush of
                  excitement as you conquer each twist and turn.
                </p>
                <p>
                  <strong>Visit a Local Dominican Home: </strong>Our first stop is at a traditional Dominican home, where you’ll immerse
                  yourself in the local culture. Experience authentic Dominican hospitality as you sample fresh coffee, cocoa, and
                  tobacco—local staples that define the rich flavors of this vibrant region. Don’t miss the chance to try Mamajuana, the
                  famous Dominican drink that’s said to have stimulating properties.
                </p>
                <p>
                  <strong>Relax at Macao Beach: </strong>The adventure concludes at the breathtaking Macao Beach, where the white sands and
                  turquoise waters perfectly contrast the rugged ATV trails. Whether you dip in the ocean, relax on the sand, or simply soak
                  in the stunning seascapes, Macao Beach is the ultimate spot to rugged ATV trails. Whether you dip in the ocean, relax on
                  the sand, or simply soak in the stunning seascapes, Macao Beach is the ultimate spot to unwind after your thrilling ride.
                </p>
                <p>
                  This ATV tour in Punta Cana is the perfect way to combine the thrill of adventure with the rich cultural experiences of
                  the Dominican Republic. Whether you&apos;re splashing through mud on rural trails or unwinding on the pristine sands of
                  Macao Beach, this tour promises a day of excitement and discovery. Book your Adventure ATVs experience today and get ready
                  to conquer the trails of Punta Cana!
                </p>
              </Tab>
              <Tab key="itinerary" title="Itinerary">
                {Array.isArray(tour?.tour_itinerary) && (
                  <ul className="list-disc space-y-1 pl-5">
                    {tour?.tour_itinerary.map((itinerary) => (
                      <li key={itinerary}>{itinerary}</li>
                    ))}
                  </ul>
                )}
              </Tab>
              <Tab key="gallery" title="Gallery">
                <Image
                  classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                  src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                  className="h-full w-full object-cover object-center"
                  alt={tour?.name}
                />
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                  <Image
                    classNames={{ wrapper: "aspect-[16/9] overflow-hidden rounded-lg" }}
                    src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop"
                    className="h-full w-full object-cover object-center"
                    alt={tour?.name}
                  />
                </div>
              </Tab>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
