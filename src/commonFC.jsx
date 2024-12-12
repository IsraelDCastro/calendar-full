import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

export default function CommonFC() {
  const getEventTimes = (duration) => {
    switch (`${duration}`) {
      case "all_day":
        return { startHour: 8, endHour: 18 }; // 8 AM - 6 PM
      case "morning":
        return { startHour: 8, endHour: 12 }; // 8 AM - 1 PM
      case "half_day":
        return { startHour: 13, endHour: 18 }; // 1 PM - 6 PM
      case "only_night":
        return { startHour: 20, endHour: 26 }; // 8 PM - 2 AM (26 = 2 AM next day)
      default:
        return { startHour: 8, endHour: 13 }; // Default 9 AM - 1 PM
    }
  };

  const tours = [
    {
      id: 1,
      name: "Saona Island Tour",
      description: "Sail on a catamaran or speedboat to a stunning tropical island with turquoise waters and white sandy beaches.",
      price: {
        adult: 75,
        child: 45
      },
      tags: ["beach", "relaxation", "catamaran"],
      categories: ["nature", "island"],
      duration: "all_day",
      time: "morning",
      image: "https://example.com/saona-island.jpg",
      tour_itinerary: [
        "Pickup from hotel (7:00 AM)",
        "Travel to the port (8:00 AM)",
        "Boat ride to Saona Island (9:00 AM)",
        "Relax and swim on the beach (10:30 AM)",
        "Enjoy a Dominican lunch (12:30 PM)",
        "Return to the port and transfer back to hotel (3:00 PM)"
      ]
    },
    {
      id: 2,
      name: "Hoyo Azul at Scape Park",
      description: "Discover a natural turquoise sinkhole surrounded by lush greenery and explore the adventures of Scape Park.",
      price: {
        adult: 89,
        child: 60
      },
      tags: ["adventure", "nature", "cenote"],
      categories: ["park", "natural_wonder"],
      duration: "half_day",
      time: "morning",
      image: "https://example.com/hoyo-azul.jpg",
      tour_itinerary: [
        "Pickup from hotel (8:00 AM)",
        "Entrance to Scape Park (9:00 AM)",
        "Guided visit to Hoyo Azul (9:30 AM)",
        "Free time for additional park activities (10:30 AM)",
        "Return to hotel (12:30 PM)"
      ]
    },
    {
      id: 3,
      name: "Buggies Off-Road Adventure",
      description: "Drive a buggy through rugged trails, visit a cenote, and explore Macao Beach.",
      price: {
        adult: 65,
        child: 45
      },
      tags: ["adventure", "off-road", "fun"],
      categories: ["adventure", "exploration"],
      duration: "half_day",
      time: "afternoon",
      image: "https://example.com/buggies-adventure.jpg",
      tour_itinerary: [
        "Pickup from hotel (1:30 PM)",
        "Drive to starting point (2:00 PM)",
        "Off-road driving through trails (2:30 PM)",
        "Swim in a cenote (3:30 PM)",
        "Relax at Macao Beach (4:00 PM)",
        "Return to hotel (5:30 PM)"
      ]
    },
    {
      id: 4,
      name: "Los Haitises National Park",
      description: "Explore mangroves, caves with Taíno paintings, and stunning rock formations.",
      price: {
        adult: 99,
        child: 65
      },
      tags: ["nature", "history", "boat"],
      categories: ["eco-tour", "culture"],
      duration: "all_day",
      time: "morning",
      image: "https://example.com/los-haitises.jpg",
      tour_itinerary: [
        "Pickup from hotel (6:30 AM)",
        "Drive to port (7:30 AM)",
        "Boat tour through mangroves (8:00 AM)",
        "Visit caves with Taíno art (9:30 AM)",
        "Lunch at a local restaurant (12:00 PM)",
        "Return to hotel (4:00 PM)"
      ]
    },
    {
      id: 5,
      name: "Swim with Dolphins",
      description: "Experience an interactive swim with dolphins and enjoy other marine life shows.",
      price: {
        adult: 120,
        child: 95
      },
      tags: ["marine", "interactive", "family"],
      categories: ["adventure", "marine_life"],
      duration: "half_day",
      time: "morning",
      image: "https://example.com/swim-dolphins.jpg",
      tour_itinerary: [
        "Pickup from hotel (9:00 AM)",
        "Arrival at marine park (9:30 AM)",
        "Briefing and safety instructions (10:00 AM)",
        "Dolphin interaction (10:30 AM)",
        "Optional marine life shows (11:30 AM)",
        "Return to hotel (12:30 PM)"
      ]
    },
    {
      id: 6,
      name: "Altos de Chavón and Chavón River Cruise",
      description: "Visit a Mediterranean-style village and enjoy a boat ride along the scenic Chavón River.",
      price: {
        adult: 90,
        child: 65
      },
      tags: ["culture", "history", "river"],
      categories: ["culture", "relaxation"],
      duration: "all_day",
      time: "morning",
      image: "https://example.com/altos-chavon.jpg",
      tour_itinerary: [
        "Pickup from hotel (7:30 AM)",
        "Drive to Altos de Chavón (9:00 AM)",
        "Explore the village and museums (10:00 AM)",
        "Lunch with a river view (12:30 PM)",
        "Cruise along Chavón River (2:00 PM)",
        "Return to hotel (5:00 PM)"
      ]
    },
    {
      id: 7,
      name: "Fishing Charter in Punta Cana",
      description: "Enjoy a private fishing experience in the Caribbean waters.",
      price: {
        adult: 150,
        child: null
      },
      tags: ["fishing", "adventure", "private"],
      categories: ["adventure", "water"],
      duration: "half_day",
      time: "morning",
      image: "https://example.com/fishing-charter.jpg",
      tour_itinerary: [
        "Pickup from hotel (6:00 AM)",
        "Board the fishing boat (7:00 AM)",
        "Deep-sea fishing (8:00 AM)",
        "Return to shore with catches (11:00 AM)",
        "Return to hotel (12:00 PM)"
      ]
    },
    {
      id: 8,
      name: "Ojos Indígenas Ecological Reserve",
      description: "Discover freshwater lagoons and walk through a lush ecological reserve.",
      price: {
        adult: 40,
        child: 20
      },
      tags: ["nature", "ecology", "relaxation"],
      categories: ["nature", "park"],
      duration: "half_day",
      time: "afternoon",
      image: "https://example.com/ojos-indigenas.jpg",
      tour_itinerary: [
        "Pickup from hotel (2:00 PM)",
        "Arrival at ecological reserve (2:30 PM)",
        "Walk through the trails (3:00 PM)",
        "Swim in lagoons (4:00 PM)",
        "Return to hotel (5:30 PM)"
      ]
    },
    {
      id: 9,
      name: "Catamaran and Snorkel Adventure",
      description: "Sail along the coast, snorkel in coral reefs, and enjoy drinks on board.",
      price: {
        adult: 75,
        child: 50
      },
      tags: ["water", "snorkeling", "relaxation"],
      categories: ["adventure", "water"],
      duration: "half_day",
      time: "afternoon",
      image: "https://example.com/catamaran-snorkel.jpg",
      tour_itinerary: [
        "Pickup from hotel (1:30 PM)",
        "Board the catamaran (2:00 PM)",
        "Snorkeling session (2:30 PM)",
        "Relax on board with drinks (3:30 PM)",
        "Return to hotel (5:30 PM)"
      ]
    },
    {
      id: 10,
      name: "Cultural Dominican Experience",
      description: "Learn about Dominican traditions, from coffee and cacao production to local crafts.",
      price: {
        adult: 55,
        child: 35
      },
      tags: ["culture", "history", "learning"],
      categories: ["culture", "educational"],
      duration: "half_day",
      time: "morning",
      image: "https://example.com/dominican-culture.jpg",
      tour_itinerary: [
        "Pickup from hotel (8:00 AM)",
        "Visit a local farm (9:00 AM)",
        "Learn about coffee and cacao production (10:00 AM)",
        "Enjoy local crafts and music (11:00 AM)",
        "Return to hotel (12:30 PM)"
      ]
    },
    {
      id: 11,
      name: "Coco Bongo Nightclub Experience",
      description: "Enjoy a vibrant night of music, acrobatics, and entertainment at the famous Coco Bongo nightclub.",
      price: {
        adult: 120,
        child: null
      },
      tags: ["nightlife", "party", "entertainment"],
      categories: ["nightlife", "party"],
      duration: "only_night",
      time: "only_night",
      image: "https://example.com/coco-bongo.jpg",
      tour_itinerary: [
        "Pickup from hotel (8:00 PM)",
        "Arrival at Coco Bongo (9:00 PM)",
        "Enjoy the show (9:30 PM)",
        "Dance and party (11:00 PM)",
        "Return to hotel (2:00 AM)"
      ]
    }
  ];

  const initialEvents = tours.map((tour, index) => {
    const { startHour, endHour } = getEventTimes(tour.duration, tour.time);
    const dayOffset = Math.floor(index / 2); // Distribuir en días consecutivos

    return {
      id: tour.id,
      title: `${tour.name} ($${tour.price.adult})`,
      start: `2024-11-${25 + dayOffset}T${String(startHour).padStart(2, "0")}:00:00`,
      end: `2024-11-${25 + dayOffset}T${String(endHour).padStart(2, "0")}:00:00`,
      backgroundColor: "#4CAF50",
      borderColor: "#388E3C"
    };
  });

  const [events, setEvents] = useState(initialEvents); // Manejo de eventos en el estado

  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.startStr,
          end: info.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    console.log(`Evento movido: ${info.event.title}`);
  };

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      height="920px"
      scrollTime="08:00:00"
      events={events}
      slotMinTime="06:00:00"
      slotMaxTime="27:00:00"
      validRange={{
        start: "2024-11-25",
        end: "2024-11-30"
      }}
      headerToolbar={{
        left: "",
        center: "title",
        right: ""
      }}
      slotEventOverlap={false}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }}
      editable // Habilita arrastre
      eventDrop={handleEventDrop}
    />
  );
}
