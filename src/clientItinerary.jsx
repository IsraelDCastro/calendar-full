import { Card, CardBody, Chip } from "@nextui-org/react";
import Timeline from "./timeline";
import { tours } from "./components/placeholderInfo";

export default function ClientItinerary() {
  const itimeraries = [
    {
      id: 1,
      day: 1,
      tour_id: [1, 2],
      tours: [tours.find((tour_holder) => tour_holder.id === 1), tours.find((tour_holder) => tour_holder.id === 2)]
    },
    {
      id: 2,
      day: 2,
      tour_id: [3, 4],
      tours: [tours.find((tour_holder) => tour_holder.id === 3), tours.find((tour_holder) => tour_holder.id === 4)]
    },
    {
      id: 3,
      day: 3,
      tour_id: [5],
      tours: [tours.find((tour_holder) => tour_holder.id === 5)]
    },
    {
      id: 4,
      day: 4,
      tour_id: [7, 8],
      tours: [tours.find((tour_holder) => tour_holder.id === 7), tours.find((tour_holder) => tour_holder.id === 8)]
    },
    {
      id: 5,
      day: 5,
      tour_id: [9, 10],
      tours: [tours.find((tour_holder) => tour_holder.id === 9), tours.find((tour_holder) => tour_holder.id === 10)]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <header
        className={`relative flex min-h-[50vh] items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?q=80')] bg-cover bg-center bg-no-repeat p-5 text-center md:min-h-[70vh] md:p-8 lg:p-12`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <h1 className="relative z-10 font-cookie text-5xl text-white md:w-7/12 md:text-8xl">
          Create your custom itinerary with Punta Cana Transfer
        </h1>
      </header>
      <section className="top-0 z-50 mx-auto p-8 lg:w-8/12">
        <Card shadow="none">
          <CardBody className="items-center gap-8 px-8 py-5 lg:flex-row lg:justify-between">
            <ul className="md:columns-2">
              <li>
                Full name: <strong>John Smith</strong>
              </li>
              <li>
                Email: <strong>john@smith.com</strong>
              </li>
              <li>
                Phone number: <strong>809-000-0000</strong>
              </li>
              <li className="flex flex-wrap lg:gap-3">
                <span>
                  Days: <strong>5</strong>
                </span>
                <span>
                  Adults: <strong>5</strong>
                </span>
                <span>
                  Children: <strong>5</strong>
                </span>
              </li>
              <li>
                Pick up location (hotel): <strong>Melia Caribe Beach Resort</strong>
              </li>
              <li className="flex flex-wrap lg:gap-3">
                <span>
                  Start date: <strong>01/01/2025</strong>
                </span>
                <span>
                  End date: <strong>01/06/2025</strong>
                </span>
              </li>
            </ul>
            <Chip color="success">Subtotal: USD $1,600.00</Chip>
          </CardBody>
        </Card>
      </section>
      <section className="mx-auto space-y-6 p-8 xl:w-10/12">
        <div className="relative hidden flex-wrap gap-8 font-cookie text-2xl leading-none sm:text-5xl md:flex">
          <div className="flex items-center justify-center">
            <h4 className="font-[inherit] leading-none">Days</h4>
          </div>
          <div className="md:ml-6">
            <h4 className="font-[inherit]">Let’s start</h4>
          </div>
        </div>
        {Array.isArray(itimeraries) &&
          itimeraries[0] &&
          itimeraries.map((itinerary, index) => <Timeline key={index} itinerary={itinerary} />)}
      </section>
    </div>
  );
}
