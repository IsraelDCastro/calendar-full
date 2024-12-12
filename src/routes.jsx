import ClientItinerary from "./clientItinerary";
import CommonFC from "./commonFC";
import DnDCalendar from "./dndCalendar";
import DnDFC from "./dndFC";
import PageLayout from "./layout";

const routes = [
  {
    element: <PageLayout />,
    children: [
      { path: "/", element: <CommonFC /> },
      { path: "/dnd-fc", element: <DnDFC /> },
      { path: "/dnd-calendar", element: <DnDCalendar /> },
      { path: "/client-itinerary", element: <ClientItinerary /> },
      { path: "/*", element: <h1>No found page</h1> }
    ]
  }
];

export default routes;
