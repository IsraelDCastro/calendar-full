import Blog from "./blog";
import ClientItinerary from "./clientItinerary";
import CommonFC from "./commonFC";
import DnDCalendar from "./dndCalendar";
import DnDFC from "./dndFC";
import PageLayout from "./layout";
import ShowBlog from "./showBlog";
import ShowTour from "./showTour";
import TextTiptapEditor from "./testTiptapEditor";

const routes = [
  {
    element: <PageLayout />,
    children: [
      { path: "/", element: <CommonFC /> },
      { path: "/dnd-fc", element: <DnDFC /> },
      { path: "/dnd-calendar", element: <DnDCalendar /> },
      { path: "/client-itinerary", element: <ClientItinerary /> },
      { path: "/tiptap-editor", element: <TextTiptapEditor /> },
      { path: "/show-tour", element: <ShowTour /> },
      { path: "/blog/", element: <Blog /> },
      { path: "/blog/:blog_slug", element: <ShowBlog /> },
      { path: "/*", element: <h1>No found page</h1> }
    ]
  }
];

export default routes;
