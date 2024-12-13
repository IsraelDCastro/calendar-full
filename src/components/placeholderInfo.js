const tours = [
  {
    id: 1,
    name: "Saona Island Tour",
    description:
      "Embark on an unforgettable journey to Saona Island, a tropical paradise known for its crystal-clear turquoise waters, pristine white sandy beaches, and swaying palm trees. Sail aboard a luxurious catamaran or speedboat, enjoying the gentle sea breeze and vibrant Caribbean views. Upon arrival, relax under the sun, swim in the warm waters, or explore the island's lush surroundings. Indulge in a delicious Dominican-style buffet lunch featuring fresh seafood, grilled meats, and tropical fruits, all while surrounded by breathtaking natural beauty. Perfect for those seeking relaxation, adventure, and a true taste of paradise.",
    price: {
      adult: 75,
      child: 45
    },
    tags: ["beach", "relaxation", "catamaran"],
    categories: ["nature", "island"],
    time: "all_day",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (7:00 AM)",
      "Travel to the port (8:00 AM)",
      "Boat ride to Saona Island (9:00 AM)",
      "Relax and swim on the beach (10:30 AM)",
      "Enjoy a Dominican lunch (12:30 PM)",
      "Return to the port and transfer back to hotel (3:00 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
    ]
  },
  {
    id: 2,
    name: "Hoyo Azul at Scape Park",
    description:
      "Immerse yourself in the wonders of Scape Park with a visit to Hoyo Azul, a stunning natural sinkhole with vibrant turquoise waters surrounded by lush greenery. Begin your adventure with a scenic trek through the park's tropical trails, where you'll discover diverse flora and fauna. At Hoyo Azul, take a refreshing dip in the cool, crystal-clear waters or simply relax and marvel at this natural wonder. The tour also includes time to explore additional attractions and activities within Scape Park, ensuring a day filled with excitement, relaxation, and connection with nature.",
    price: {
      adult: 89,
      child: 60
    },
    tags: ["adventure", "nature", "cenote"],
    categories: ["park", "natural_wonder"],
    time: "morning",
    image:
      "https://images.unsplash.com/photo-1533105045747-b9d71a0955f9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tour_itinerary: [
      "Pickup from hotel (8:00 AM)",
      "Entrance to Scape Park (9:00 AM)",
      "Guided visit to Hoyo Azul (9:30 AM)",
      "Free time for additional park activities (10:30 AM)",
      "Return to hotel (12:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
    ]
  },
  {
    id: 3,
    name: "Buggies Off-Road Adventure",
    description:
      "Get ready for an adrenaline-packed experience as you drive a buggy through rugged trails and unspoiled landscapes in Punta Cana. This off-road adventure takes you on a thrilling journey through the Dominican countryside, where you'll visit a hidden cenote and have the opportunity to take a refreshing swim in its crystal-clear waters. Continue your journey to the famous Macao Beach, known for its golden sands and spectacular ocean views. Whether you're a thrill-seeker or simply looking for a unique way to explore the area, this adventure promises excitement and unforgettable memories.",
    price: {
      adult: 65,
      child: 45
    },
    tags: ["adventure", "off-road", "fun"],
    categories: ["adventure", "exploration"],
    time: "afternoon",
    image:
      "https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tour_itinerary: [
      "Pickup from hotel (1:30 PM)",
      "Drive to starting point (2:00 PM)",
      "Off-road driving through trails (2:30 PM)",
      "Swim in a cenote (3:30 PM)",
      "Relax at Macao Beach (4:00 PM)",
      "Return to hotel (5:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "01:00 PM", transfer_time: { start: "01:00 PM", end: "02:00 PM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "01:15 PM", transfer_time: { start: "01:15 PM", end: "02:00 PM" } }
      }
    ]
  },
  {
    id: 4,
    name: "Los Haitises National Park",
    description:
      "Explore the natural beauty of Los Haitises National Park, a breathtaking haven of biodiversity and ecological treasures. Journey through mangrove forests by boat, navigating among limestone caves and unique rock formations. Discover ancient petroglyphs left by the indigenous Taino people, and observe an array of bird species that call the park home. This eco-tour combines history, culture, and untouched wilderness, making it a must for nature lovers and adventurers alike.",
    price: {
      adult: 99,
      child: 65
    },
    tags: ["nature", "history", "boat"],
    categories: ["eco-tour", "culture"],
    time: "all_day",
    image:
      "https://plus.unsplash.com/premium_photo-1661883801442-3fdb21a619f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tour_itinerary: [
      "Pickup from hotel (6:30 AM)",
      "Drive to port (7:30 AM)",
      "Boat tour through mangroves (8:00 AM)",
      "Visit caves with Taíno art (9:30 AM)",
      "Lunch at a local restaurant (12:00 PM)",
      "Return to hotel (4:00 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
    ]
  },
  {
    id: 5,
    name: "Swim with Dolphins",
    description:
      "Dive into a once-in-a-lifetime experience with the Swim with Dolphins tour, perfect for families and marine life enthusiasts. Begin your day with a detailed briefing to ensure safety and maximize your interaction time. Enjoy an interactive session with friendly dolphins, where you can touch, swim, and even receive a playful kiss from these intelligent creatures. The marine park also offers captivating live shows featuring other aquatic animals, making it a well-rounded adventure. Create unforgettable memories as you connect with the wonders of the sea in this morning excursion.",
    price: {
      adult: 120,
      child: 95
    },
    tags: ["marine", "interactive", "family"],
    categories: ["adventure", "marine_life"],
    time: "morning",
    image:
      "https://images.unsplash.com/photo-1491986542380-fdf7aebad979?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tour_itinerary: [
      "Pickup from hotel (9:00 AM)",
      "Arrival at marine park (9:30 AM)",
      "Briefing and safety instructions (10:00 AM)",
      "Dolphin interaction (10:30 AM)",
      "Optional marine life shows (11:30 AM)",
      "Return to hotel (12:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
    ]
  },
  {
    id: 6,
    name: "Altos de Chavón and Chavón River Cruise",
    description:
      "Step back in time with a visit to the enchanting Altos de Chavón, a Mediterranean-inspired village perched above the scenic Chavón River. Wander cobblestone streets, explore art galleries, and discover cultural treasures in this historic and artistic gem. Following a delightful lunch overlooking the river, embark on a tranquil cruise along its serene waters. Revel in the lush, tropical scenery and learn about the region’s rich history. This all-day tour is a harmonious blend of culture, relaxation, and natural beauty.",
    price: {
      adult: 90,
      child: 65
    },
    tags: ["culture", "history", "river"],
    categories: ["culture", "relaxation"],
    time: "all_day",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (7:30 AM)",
      "Drive to Altos de Chavón (9:00 AM)",
      "Explore the village and museums (10:00 AM)",
      "Lunch with a river view (12:30 PM)",
      "Cruise along Chavón River (2:00 PM)",
      "Return to hotel (5:00 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
    ]
  },
  {
    id: 7,
    name: "Fishing Charter in Punta Cana",
    description:
      "Set out on a thrilling private fishing adventure in the crystal-clear Caribbean waters of Punta Cana. Board a well-equipped fishing boat and head to prime spots known for their abundance of species like mahi-mahi, marlin, and tuna. Whether you’re an experienced angler or a novice, the expert crew will guide you through an unforgettable deep-sea fishing experience. Relax, soak up the sun, and enjoy the thrill of reeling in your catch while surrounded by breathtaking ocean views. This tour is a must for fishing enthusiasts seeking adventure and tranquility.",
    price: {
      adult: 150,
      child: null
    },
    tags: ["fishing", "adventure", "private"],
    categories: ["adventure", "water"],
    time: "morning",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (6:00 AM)",
      "Board the fishing boat (7:00 AM)",
      "Deep-sea fishing (8:00 AM)",
      "Return to shore with catches (11:00 AM)",
      "Return to hotel (12:00 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
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
    time: "afternoon",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (2:00 PM)",
      "Arrival at ecological reserve (2:30 PM)",
      "Walk through the trails (3:00 PM)",
      "Swim in lagoons (4:00 PM)",
      "Return to hotel (5:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "01:00 PM", transfer_time: { start: "01:00 PM", end: "02:00 PM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "01:15 PM", transfer_time: { start: "01:15 AM", end: "02:00 PM" } }
      }
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
    time: "afternoon",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (1:30 PM)",
      "Board the catamaran (2:00 PM)",
      "Snorkeling session (2:30 PM)",
      "Relax on board with drinks (3:30 PM)",
      "Return to hotel (5:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "01:00 PM", transfer_time: { start: "01:00 PM", end: "02:00 PM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "01:15 PM", transfer_time: { start: "01:15 AM", end: "02:00 PM" } }
      }
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
    time: "morning",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (8:00 AM)",
      "Visit a local farm (9:00 AM)",
      "Learn about coffee and cacao production (10:00 AM)",
      "Enjoy local crafts and music (11:00 AM)",
      "Return to hotel (12:30 PM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "07:15 AM", transfer_time: { start: "07:15 AM", end: "08:00 AM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "07:20 AM", transfer_time: { start: "07:20 AM", end: "08:00 AM" } }
      }
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
    time: "only_night",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop",
    tour_itinerary: [
      "Pickup from hotel (8:00 PM)",
      "Arrival at Coco Bongo (9:00 PM)",
      "Enjoy the show (9:30 PM)",
      "Dance and party (11:00 PM)",
      "Return to hotel (2:00 AM)"
    ],
    pick_up_hotel_locations: [
      {
        "Melia Caribe Beach": { pick_up_time: "06:00 PM", transfer_time: { start: "06:00 PM", end: "07:30 PM" } }
      },
      {
        "Hard Rock Hotel and Casino": { pick_up_time: "06:15 PM", transfer_time: { start: "06:15 AM", end: "07:30 PM" } }
      }
    ]
  }
];

const hotels = [
  "Punta Cana Airport (PUJ)",
  "AirBnB Punta Cana Zone",
  "AirBnB Bavaro Zone",
  "Alsol Del Mar",
  "Ancora",
  "Bahia Principe Bavaro",
  "Bahia Principe Punta Cana",
  "Bahia Principe Aquamarine",
  "Bahia Principe Esmeralda",
  "Bahia Principe Ambar",
  "Bahia Principe Turquesa",
  "Bahia Principe Fantasia",
  "Bavaro Princess",
  "Barcelo Bavaro Beach",
  "Barcelo Bavaro Palace",
  "Be Live Collection Punta Cana",
  "BlueBay Grand Punta Cana",
  "Bavaro Green",
  "Caribe Club Princess",
  "Catalonia Bavaro",
  "Catalonia Royal Bavaro",
  "Coral Village",
  "Jewel Palm Beach",
  "Eden Roc",
  "Falcon's Resorts by Melia",
  "Four Points by Sheraton",
  "Garden Suites by Melia",
  "Golden Bear Lodge",
  "Hyatt Zilara Cap Cana",
  "Hyatt Ziva Cap Cana",
  "Iberostar Bavaro",
  "Iberostar Grand Bavaro",
  "Iberostar Dominicana",
  "Iberostar Punta Cana",
  "IFA Villas Bavaro",
  "Impressive Premium Punta Cana",
  "Impressive Punta Cana",
  "Estrella del Mar",
  "Los Corales Beach Village",
  "Karibo Punca Cana",
  "Margaritaville",
  "Majestic Colonial",
  "Majestic Elegance",
  "Majestic Mirage",
  "Melia Caribe Beach",
  "Melia Punta Cana Beach",
  "Royalton Splash",
  "Dreams Flora",
  "Dreams Royal Beach",
  "Occidental Caribe",
  "Occidental Punta Cana",
  "Ocean Blue And Sand",
  "Grand Palladium Punta Cana",
  "Grand Palladium Bavaro",
  "Grand Palladium Palace",
  "Paradisus Palma Real",
  "Paradisus Palma Real The Reserva",
  "Paradisus Punta Cana",
  "Playa Turquesa Ocean Club",
  "Presidencial Suites (Punta Cana)",
  "Hard Rock Hotel and Casino",
  "Punta Cana Village",
  "Riu Palace Bavaro",
  "Riu Naiboa",
  "Riu Palace Punta Cana",
  "Riu Bambu",
  "Riu Palace Macao",
  "Riu Republica",
  "Royalton Punta Cana",
  "Royalton Bavaro",
  "Sanctuary Cap Cana",
  "Secret Royal Beach",
  "Paradisus Grand Cana",
  "Tropical Deluxe Princess",
  "Tortuga Bay",
  "TRS Turquesa",
  "TRS Cap Cana",
  "Vic Arena Blanca",
  "Vista Sol Punta Cana",
  "Westin Punta Cana",
  "Whala Bavaro",
  "Whala! Urban Punta Cana",
  "Radisson Blu Resort",
  "Hideaway by Royalton",
  "Serenade Punta Cana",
  "Finest Punta Cana",
  "Live Aqua Beach Resort Punta Cana",
  "Chic By Royalton",
  "Dreams Macao Beach Punta Cana",
  "Excellence Punta Cana",
  "Excellence El Carmen",
  "Nickelodeon Punta Cana",
  "Dreams Onyx Punta Cana",
  "Playa Palmera",
  "Ocean El Faro",
  "Sensatori Hotels",
  "Sivory",
  "Zoetry",
  "La Romana (Bayahibe)",
  "La Romana Cruise Port",
  "Villa Luna",
  "Hilton La Romana",
  "Viva Wyndham Dominicus Beach",
  "Viva Wyndham Dominicus Palace",
  "Whala! Bayahibe",
  "Hotel Alkquimia Bayahibe",
  "Cadaques Bayahibe",
  "Iberostar Hacienda Dominicus",
  "Catalonia Gran Dominicus",
  "Be Live Collection Canoa",
  "Hotel Sol Dominicus",
  "Dreams Dominicus La Romana",
  "Hotel Villa Iguana",
  "Hotel Bayahibe",
  "Weare Bayahibe",
  "Hotel el Eden",
  "Byblos",
  "Breathless Punta Cana Resort and Spa",
  "Punta Cana (Bavaro and Cap Cana)",
  "La Romana Airport (LRM)",
  "Secrets Cap Cana",
  "Catalonia Royal La Romana",
  "Santo Domingo Airport (SDQ)",
  "Hotel Adam Suites",
  "Antiguo Hotel Europa",
  "Hotel Billini",
  "Hotel Boutique",
  "Casas Del XVI Boutique",
  "Hotel Courtyard by Mamot",
  "Hodelpa Caribe",
  "Hotel Conde de Penalba",
  "Hotel Frances",
  "Hotel Jade",
  "Hotel San Marco",
  "JW Marriott la Choza",
  "Hotel Mercury Comercial",
  "Hotel Napolitano",
  "Hotel Quality Real",
  "Hotel Ramada Princess",
  "Hotel Renaissance Jaragua",
  "Hotel Sheraton",
  "Hotel Weston Suites",
  "Higuero Airport (JBQ)",
  "Juan Dolio",
  "Boca Chica",
  "Samana Las Terrenas",
  "Samana Las Galeras",
  "Samana El Catey Airport (AZS)",
  "Santiago Airpot (STI)",
  "Camp David Ranch",
  "Hodelpa Centro Plaza",
  "Hodelpa Garden Court",
  "Hodelpa Gran Almirante",
  "Hotel Century Plaza",
  "Hotel Platino",
  "Hotel De La Mansion",
  "Puerto Plata Airport (POP)",
  "Puerto Plata Cabarete",
  "Puerto Plata Sosua",
  "Be Live Colletion Marien",
  "Beach House Playa Dorada",
  "Blue bay villas Doradas",
  "Blue Jacktar",
  "Casa Colonial",
  "Club Reina del Mar",
  "Cofresi Palm Beach Resort",
  "Hotel Hodelpa",
  "Grand Paradise",
  "Iberostar Costa Dorada",
  "Lifestyle Holiday",
  "Presidential Suites (Puerto Plata)",
  "Puerto Plata Village",
  "Riu Bachata",
  "La Romana (Pier and Casa de Campo)",
  "Puerto Plata (Cofresi and Playa Dorada)",
  "Matum Hotel and Casino",
  "Cabrera, Abreu and Rio San Juan",
  "Embassy Suites by Hilton",
  "Hotel Occidental Embajador",
  "Catalonia Santo Domingo",
  "Hotel Dominican Fiesta",
  "Barcelo Santo Domingo",
  "Sun camp eco-Village",
  "Sunscape Puerto Plata",
  "Gran ventana Beach Resort",
  "Viva Wyndham Heaven",
  "Monspit",
  "Grand Sirenis",
  "Grand Bahia Principe La Romana",
  "Temptation Miches Resort",
  "Bahia Principe Luxury Bouganville",
  "Uvero Tropical",
  "Lopesan Costa Bavaro Resort, Spa and Casino",
  "Dominican Fiesta Hotel Santo Domingo",
  "Custom",
  "Villa Cocoloba",
  "Blue Mall Punta Cana",
  "Desire Miches Resort Punta Cana",
  "AC Hotel by Marriott Punta Cana",
  "Sunscape Coco Punta Cana",
  "Club Med Miches Playa Esmeralda",
  "Nelsons Apartment",
  "Sunscape Dominicus La Romana",
  "Puerto Plata",
  "Green Coast Beach Hotel",
  "Secrets Tides Punta Cana",
  "Tracadero",
  "Infinity Bar & Lounge",
  "Nuovo Hotel Catalina",
  "Costa Atlantica Beach Condos",
  "Luca Hotel",
  "La Romana City",
  "Wyndham Alltra Samana",
  "HM Bayahibe",
  "HM Alma",
  "Hodelpa Nicolás de Ovando",
  "Villa Colonial",
  "Whala! Boca Chica",
  "Renaissance Santo Domingo Jaragua Hotel",
  "Quintas Don Felix Gil",
  "Pearl Beach",
  "Viva V Samana by Wyndham",
  "Faranda Single 1",
  "Holiday Inn Santo Domingo",
  "Airbnb Santo Domingo City",
  "Gran Hotel Europa Trademark Colletion By Wyndham",
  "Caribe Deluxe Princess Resort",
  "Iberostar Selection Bavaro",
  "Hyatt Inclusive Collection",
  "Massage Las Galeras",
  "Club Med Punta Cana",
  "InterContinental Real Santo Domingo",
  "Grand Bavaro Princess",
  "Embassy Suites Santo Domingo",
  "Coral Costa Caribe Hotel",
  "Iberostar Selection Hacienda Dominicus",
  "La Isabela International Airport",
  "Caribe Deluxe Princess",
  "Radisson Hotel Santo Domingo",
  "Casa Marina Beach and Reef Resort",
  "Melia Wellness Punta Cana",
  "Bella Vida Hotel",
  "Zona Colonial",
  "Jardín Colonial Boutique Hotel",
  "SBG Punta Cana",
  "JW Marriott Santo Domingo",
  "Coco Bongo",
  "Doña Pula Restaurant",
  "Hilton Garden Inn",
  "Weston Suites Hotels",
  "Sports Illustrated Resorts Marina",
  "Oro Nightclub",
  "Jellyfish Restaurant",
  "Bahia Principe Grand Samana",
  "Punta Cana Princess",
  "Hotel MT Plaza Brisas",
  "Luxury Recovery House",
  "Royalton Splash Punta Cana, An Autograph Collection All-Inclusive Resort",
  "Sunrise Miches Beach Resort by Marriott",
  "Bahia Principe Grand El Portillo",
  "W&P Santo Domingo",
  "Drink Point Bavaro",
  "La Cana Golf Club",
  "Bahia Principe Grand Punta cana",
  "Hampton by Hilton Santo Domingo"
];

export { tours, hotels };
