export interface Trip {
    id: string
    tag: string
    slug: string
    title: string
    location: string
    date: string
    startDate: string
    endDate: string
    price: string
    image: string
    duration: string
    pickup: string
    category: string
    tags: string[]
    overview: string
    itinerary: string[]
    inclusions: string[]
    exclusions: string[]
    batches: string[]
    priceSummary: {
      quad: string
      triple: string
      double: string
    }
    thingsToPack: string[]
  }
  
  export const trips: Trip[] = [
    {
      id: "corbett-nainital-2025-07",
      tag: "July 2025",
      slug: "corbett-nainital",
      title: "Corbett & Nainital",
      location: "Uttarakhand",
      date: "18 Jul 2025 - 20 Jul 2025",
      startDate: "2025-07-18",
      endDate: "2025-07-20",
      price: "₹9,999",
      image: "/trips_image/corbett_1.webp",
      duration: "2 Nights 3 Days",
      pickup: "Delhi-Delhi",
      category: "Weekend Trips",
      tags: ["Bonfire", "Stay", "Meals", "Trekking", "Explorations"],
      overview:
        "Embark on a cinematic journey through the wild and the wonderful! Experience the thrill of the untamed jungles of Jim Corbett and the magical charm of Nainital's lakes and hills. Think 'Yeh Jawaani Hai Deewani' — bonfires under the stars, laughter echoing through the valleys, and stories you'll be telling for years.",
      itinerary: [
        "Day 1: Delhi to Jim Corbett - Arrival, Leisure Activities, Jungle Ride",
        "Day 2: Drive to Nainital via Corbett Falls/Sarita Tal, Water Activities",
        "Day 3: Nainital Mall Road - Leisure & Departure for Delhi (5:00 PM)"
      ],
      inclusions: [
        "Transportation from Delhi to Delhi",
        "2 Nights Accommodation",
        "Trip Captain",
        "4 Meals",
        "Bonfire",
        "Toll Taxes & Parking"
      ],
      exclusions: [
        "Extra meals",
        "Insurance",
        "Entry fees",
        "Snow-chained vehicle",
        "Unforeseen weather/road issues",
        "5% GST"
      ],
      batches: [
        "11 Jul 2025 - 15 Jul 2025",
        "18 Jul 2025 - 22 Jul 2025",
        "25 Jul 2025 - 29 Jul 2025"
      ],
      priceSummary: {
        quad: "₹7,500",
        triple: "₹8,200",
        double: "₹9,000"
      },
      thingsToPack: [
        "Rucksack with rain-cover",
        "Trekking shoes",
        "Warm clothes & raincoat",
        "Toiletries & cold cream",
        "Power bank & torch",
        "ID proofs & documents",
        "Snacks, cash, reusable bottle"
      ]
    },
    {
      id: "goa-2025-07",
      tag: "July 2025",
      slug: "goa-beach-chill",
      title: "Sariska Tiger and crocodile",
      location: "Rajasthan",
      date: "Not decided",
      startDate: "2025-07-25",
      endDate: "2025-07-30",
      price: "₹4,999",
      image: "/images/goa.jpg",
      duration: "2 Days 1 Nights",
      pickup: "Delhi",
      category: "Jungle",
      tags: ["Beach", "Sunset", "Nightlife", "Cruise", "Relaxation"],
      overview:
        "Relax by the serene beaches, enjoy water sports, and explore the vibrant Goan nightlife.",
      itinerary: [
        "Day 1: Arrival in Goa & Transfer to Hotel",
        "Day 2: North Goa Tour - Baga, Calangute, Fort Aguada",
        "Day 3: South Goa Tour - Palolem, Colva, Churches",
        "Day 4: Cruise Party",
        "Day 5: Leisure Day & Departure"
      ],
      inclusions: [
        "Airport Pickup & Drop",
        "4 Nights Stay",
        "Daily Breakfast",
        "Sightseeing Tours",
        "Cruise Entry"
      ],
      exclusions: [
        "Lunch & Dinner",
        "Flight Tickets",
        "Personal Expenses",
        "Water Sports",
        "5% GST"
      ],
      batches: [
        "25 Jul 2025 - 30 Jul 2025",
        "1 Aug 2025 - 6 Aug 2025"
      ],
      priceSummary: {
        quad: "₹13,499",
        triple: "₹14,999",
        double: "₹16,999"
      },
      thingsToPack: [
        "Beachwear & Casuals",
        "Sunscreen & Sunglasses",
        "Flip Flops",
        "Power Bank",
        "Camera",
        "Water Bottle"
      ]
    }
  ]
  