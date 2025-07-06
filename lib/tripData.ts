export interface Trip {
  id: string
  tag: string
  slug: string
  title: string
  disclosed: boolean
  discription: string
  location: string
  date: string
  startDate: string
  endDate: string
  price: string
  image: string[]
  duration: string
  pickup: string
  category: string
  tags: string[]
  overview: string
  itinerary: string[]
  inclusions: string[]
  exclusions: string[]
  batches: string[]
  thingsToPack: string[]
}

export const trips: Trip[] = [
  {
    id: "corbett-nainital-2025-07",
    tag: "July 2025",
    slug: "corbett-nainital",
    title: "Jim Corbett & Nainital",
    disclosed: true,
    discription: "Ready to see Mountains?",
    location: "Uttarakhand",
    date: "18 Jul 2025 - 20 Jul 2025",
    startDate: "2025-07-18",
    endDate: "2025-07-20",
    price: "₹9,999",
    image: ["/trips_image/jim2.webp", "/trips_image/jim3.webp", "/trips_image/jim4.webp"],
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
      "Delhi - Jim Corbett - Nainital - Delhi by AC Bus/Traveller",
      "Hotel stay",
      "Jeep Safari, Corbett Fall / Sarita Tal & Mall Road",
      "Trekking",
      "Bonfire",
      "Musical Night"
    ],
    exclusions: [
      "Extra meals",
      "Personal expenses",
      "Water activities",
      "Room service and mineral water",
      "Anything not mentioned in the inclusions",
      "Snow-chained vehicle",
      "Unforeseen weather/road issues",
      "5% GST"
    ],
    batches: ["18 Jul 2025 - 20 Jul 2025"],
    thingsToPack: [
      "Rucksack with rain-cover",
      "Sports shoes",
      "Warm clothes & raincoat",
      "Toiletries & cold cream",
      "Power bank & torch",
      "ID proofs & documents",
      "Snacks, cash, reusable bottle"
    ]
  },
  {
    id: "sarika-2025-07",
    tag: "July 2025",
    slug: "sarika-tiger-crocodile",
    title: "Sariska & Siliserh",
    disclosed: false,
    discription: "Ready for crocodile sighting?",
    location: "Rajasthan",
    date: "Coming Soon",
    startDate: "Coming Soon",
    endDate: "Coming Soon",
    price: "₹4,999",
    image: ["/trips_image/sarika2.webp","/trips_image/sarika1.webp","/trips_image/sarika3.webp","/trips_image/sarika4.webp"],
    duration: "1 Night 2 Days",
    pickup: "Delhi",
    category: "Jungle",
    tags: [],

    overview:
      "Experience the wilderness of Rajasthan at Sariska Tiger Reserve. Witness majestic tigers and crocodiles in their natural habitat, enjoy forest rides, and sleep under the stars near jungle camps.",
    itinerary: [
      "Day 1: Depart from Delhi early morning, reach Sariska by noon. Jungle safari followed by evening bonfire and camping.",
      "Day 2: Early morning crocodile sighting tour and return to Delhi post-lunch."
    ],
    inclusions: [
      "Transport from Delhi and back",
      "1 Night jungle stay (camping or guest house)",
      "Jungle Safari (Tiger & Crocodile spotting)",
      "Bonfire & Light Music",
      "Guide and Entry Charges"
    ],
    exclusions: [
      "Personal Expenses",
      "Extra Meals and Snacks",
      "Room Service",
      "Water Bottles or Beverages",
      "5% GST"
    ],
    batches: [
      "25 Jul 2025 - 26 Jul 2025",
      "1 Aug 2025 - 2 Aug 2025"
    ],
    thingsToPack: [
      "Cap/hat & sunglasses",
      "Sunscreen",
      "Mosquito repellent",
      "Binoculars & camera",
      "Power bank",
      "Shoes with grip",
      "Reusable water bottle"
    ]
  },
  {
    id: "corbett-nainital-2025-08",
    tag: "August 2025",
    slug: "corbett-nainital",
    title: "Jim Corbett & Nainital",
    disclosed: true,
    discription: "Ready to see Mountains?",
    location: "Uttarakhand",
    date: "18 Aug 2025 - 20 Aug 2025",
    startDate: "2025-08-18",
    endDate: "2025-08-20",
    price: "₹9,999",
    image: ["/trips_image/jim2.webp", "/trips_image/jim3.webp", "/trips_image/jim4.webp"],
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
      "Delhi - Jim Corbett - Nainital - Delhi by AC Bus/Traveller",
      "Hotel stay",
      "Jeep Safari, Corbett Fall / Sarita Tal & Mall Road",
      "Trekking",
      "Bonfire",
      "Musical Night"
    ],
    exclusions: [
      "Extra meals",
      "Personal expenses",
      "Water activities",
      "Room service and mineral water",
      "Anything not mentioned in the inclusions",
      "Snow-chained vehicle",
      "Unforeseen weather/road issues",
      "5% GST"
    ],
    batches: ["18 August 2025 - 20 August 2025"],
    thingsToPack: [
      "Rucksack with rain-cover",
      "Sports shoes",
      "Warm clothes & raincoat",
      "Toiletries & cold cream",
      "Power bank & torch",
      "ID proofs & documents",
      "Snacks, cash, reusable bottle"
    ]
  },
  {
    id: "sarika-2025-08",
    tag: "August 2025",
    slug: "sarika-tiger-crocodile",
    title: "Sariska & Siliserh",
    disclosed: false,
    discription: "Ready for crocodile sighting?",
    location: "Rajasthan",
    date: "Coming Soon",
    startDate: "Coming Soon",
    endDate: "Coming Soon",
    price: "₹4,999",
    image: ["/trips_image/sarika2.webp","/trips_image/sarika1.webp","/trips_image/sarika3.webp","/trips_image/sarika4.webp"],
    duration: "1 Night 2 Days",
    pickup: "Delhi",
    category: "Jungle",
    tags: [],

    overview:
      "Experience the wilderness of Rajasthan at Sariska Tiger Reserve. Witness majestic tigers and crocodiles in their natural habitat, enjoy forest rides, and sleep under the stars near jungle camps.",
    itinerary: [
      "Day 1: Depart from Delhi early morning, reach Sariska by noon. Jungle safari followed by evening bonfire and camping.",
      "Day 2: Early morning crocodile sighting tour and return to Delhi post-lunch."
    ],
    inclusions: [
      "Transport from Delhi and back",
      "1 Night jungle stay (camping or guest house)",
      "Jungle Safari (Tiger & Crocodile spotting)",
      "Bonfire & Light Music",
      "Guide and Entry Charges"
    ],
    exclusions: [
      "Personal Expenses",
      "Extra Meals and Snacks",
      "Room Service",
      "Water Bottles or Beverages",
      "5% GST"
    ],
    batches: [
      "25 Jul 2025 - 26 Jul 2025",
      "1 Aug 2025 - 2 Aug 2025"
    ],
    thingsToPack: [
      "Cap/hat & sunglasses",
      "Sunscreen",
      "Mosquito repellent",
      "Binoculars & camera",
      "Power bank",
      "Shoes with grip",
      "Reusable water bottle"
    ]
  },{
    id: "corbett-nainital-2025-09",
    tag: "September 2025",
    slug: "corbett-nainital",
    title: "Jim Corbett & Nainital",
    disclosed: true,
    discription: "Ready to see Mountains?",
    location: "Uttarakhand",
    date: "18 September 2025 - 20 September 2025",
    startDate: "2025-08-18",
    endDate: "2025-08-20",
    price: "₹9,999",
    image: ["/trips_image/jim2.webp", "/trips_image/jim3.webp", "/trips_image/jim4.webp"],
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
      "Delhi - Jim Corbett - Nainital - Delhi by AC Bus/Traveller",
      "Hotel stay",
      "Jeep Safari, Corbett Fall / Sarita Tal & Mall Road",
      "Trekking",
      "Bonfire",
      "Musical Night"
    ],
    exclusions: [
      "Extra meals",
      "Personal expenses",
      "Water activities",
      "Room service and mineral water",
      "Anything not mentioned in the inclusions",
      "Snow-chained vehicle",
      "Unforeseen weather/road issues",
      "5% GST"
    ],
    batches: ["18 Sep 2025 - 20 Sep 2025"],
    thingsToPack: [
      "Rucksack with rain-cover",
      "Sports shoes",
      "Warm clothes & raincoat",
      "Toiletries & cold cream",
      "Power bank & torch",
      "ID proofs & documents",
      "Snacks, cash, reusable bottle"
    ]
  },
  {
    id: "sarika-2025-09",
    tag: "September 2025",
    slug: "sarika-tiger-crocodile",
    title: "Sariska & Siliserh",
    disclosed: false,
    discription: "Ready for crocodile sighting?",
    location: "Rajasthan",
    date: "Coming Soon",
    startDate: "Coming Soon",
    endDate: "Coming Soon",
    price: "₹4,999",
    image: ["/trips_image/sarika2.webp","/trips_image/sarika1.webp","/trips_image/sarika3.webp","/trips_image/sarika4.webp"],
    duration: "1 Night 2 Days",
    pickup: "Delhi",
    category: "Jungle",
    tags: [],

    overview:
      "Experience the wilderness of Rajasthan at Sariska Tiger Reserve. Witness majestic tigers and crocodiles in their natural habitat, enjoy forest rides, and sleep under the stars near jungle camps.",
    itinerary: [
      "Day 1: Depart from Delhi early morning, reach Sariska by noon. Jungle safari followed by evening bonfire and camping.",
      "Day 2: Early morning crocodile sighting tour and return to Delhi post-lunch."
    ],
    inclusions: [
      "Transport from Delhi and back",
      "1 Night jungle stay (camping or guest house)",
      "Jungle Safari (Tiger & Crocodile spotting)",
      "Bonfire & Light Music",
      "Guide and Entry Charges"
    ],
    exclusions: [
      "Personal Expenses",
      "Extra Meals and Snacks",
      "Room Service",
      "Water Bottles or Beverages",
      "5% GST"
    ],
    batches: [
      "25 Jul 2025 - 26 Jul 2025",
      "1 Aug 2025 - 2 Aug 2025"
    ],
    thingsToPack: [
      "Cap/hat & sunglasses",
      "Sunscreen",
      "Mosquito repellent",
      "Binoculars & camera",
      "Power bank",
      "Shoes with grip",
      "Reusable water bottle"
    ]
  }
  
]
