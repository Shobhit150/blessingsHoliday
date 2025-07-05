
export interface Trip {
    tag: string
    slug: string
    title: string
    location: string
    date: string
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
        tag: "July 2025",
        slug: "jibhi-tirthan-valley",
        title: "Jibhi & Tirthan Valley",
        location: "Himachal",
        date: "11 Jul 2025 - 15 Jul 2025",
        price: "₹7,500",
        image: "/images/trip1.JPG",
        duration: "3 Days 2 Nights",
        pickup: "Delhi-Delhi",
        category: "Weekend Trips",
        tags: ["Bonfire", "Stay", "Transfers", "Meals", "Trekking", "Explorations"],
        overview: "Jibhi and Tirthan valley is one of the most peaceful and soul relaxing destinations...",
        itinerary: [
            "Delhi to Jibhi | Overnight Journey",
            "Jibhi Arrival | Jibhi Waterfall & Leisure",
            "Drive to Jalori Pass & Trek to Serolsar Lake",
            "Hike to Chhoie Waterfall | Depart for Delhi",
            "Delhi Arrival | Trip Ends"
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
        tag: "August 2025",
        slug: "leh-ladakh-roadtrip",
        title: "Leh-Ladakh Roadtrip",
        location: "Ladakh",
        date: "15 Aug 2025 - 24 Aug 2025",
        price: "₹29,999",
        image: "/images/trip1.JPG",
        duration: "10 Days 9 Nights",
        pickup: "Manali-Leh",
        category: "Adventure",
        tags: ["Biking", "Mountains", "Adventure", "Photography", "Camping"],
        overview: "Experience the thrill of high-altitude passes and serene lakes in Ladakh on this unforgettable road trip.",
        itinerary: [
            "Manali Arrival & Orientation",
            "Drive to Jispa",
            "Jispa to Sarchu",
            "Sarchu to Leh",
            "Leh Local Sightseeing",
            "Leh to Nubra Valley",
            "Nubra to Pangong Lake",
            "Pangong to Leh",
            "Leh to Manali",
            "Departure"
        ],
        inclusions: [
            "Bike + Fuel",
            "Accommodation",
            "Meals (Breakfast & Dinner)",
            "Mechanical Support",
            "Permits",
            "Trip Leader"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Riding Gear",
            "Insurance",
            "Personal Expenses"
        ],
        batches: [
            "15 Aug 2025 - 24 Aug 2025",
            "22 Aug 2025 - 31 Aug 2025"
        ],
        priceSummary: {
            quad: "₹27,999",
            triple: "₹28,999",
            double: "₹29,999"
        },
        thingsToPack: [
            "Riding Gear",
            "Thermals & Woolens",
            "Sunscreen & Lip balm",
            "Hydration Pack",
            "Valid ID Proof",
            "Portable Oxygen Can"
        ]
    },
    {
        tag: "July 2025",
        slug: "goa-beach-chill",
        title: "Goa Beach Chill",
        location: "Goa",
        date: "25 Jul 2025 - 30 Jul 2025",
        price: "₹14,999",
        image: "/images/trip1.JPG",
        duration: "5 Days 4 Nights",
        pickup: "Goa-Goa",
        category: "Beach Vacation",
        tags: ["Beach", "Sunset", "Nightlife", "Cruise", "Relaxation"],
        overview: "Relax by the serene beaches, enjoy water sports, and explore the vibrant Goan nightlife.",
        itinerary: [
            "Arrival in Goa & Transfer to Hotel",
            "North Goa Tour: Baga, Calangute, Fort Aguada",
            "South Goa Tour: Palolem, Colva, Churches",
            "Cruise Party",
            "Leisure Day & Departure"
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
    },
    {
        tag: "September 2025",
        slug: "kerala-backwaters",
        title: "Kerala Backwaters Escape",
        location: "Kerala",
        date: "10 Sep 2025 - 15 Sep 2025",
        price: "₹18,499",
        image: "/images/trip1.JPG",
        duration: "6 Days 5 Nights",
        pickup: "Cochin-Cochin",
        category: "Leisure",
        tags: ["Backwaters", "Houseboat", "Ayurveda", "Culture", "Nature"],
        overview: "Drift through the tranquil backwaters of Kerala in a traditional houseboat and rejuvenate your soul.",
        itinerary: [
            "Arrival in Cochin & Transfer to Munnar",
            "Munnar Sightseeing",
            "Transfer to Alleppey",
            "Houseboat Stay",
            "Kumarakom Visit",
            "Departure"
        ],
        inclusions: [
            "Airport Transfers",
            "5 Nights Accommodation",
            "Daily Breakfast",
            "Houseboat Cruise",
            "Local Guide"
        ],
        exclusions: [
            "Airfare",
            "Lunch/Dinner",
            "Ayurveda Sessions",
            "Entry Fees",
            "Personal Expenses"
        ],
        batches: [
            "10 Sep 2025 - 15 Sep 2025",
            "20 Sep 2025 - 25 Sep 2025"
        ],
        priceSummary: {
            quad: "₹16,999",
            triple: "₹17,999",
            double: "₹18,499"
        },
        thingsToPack: [
            "Cotton Clothes",
            "Umbrella",
            "Mosquito Repellent",
            "Camera",
            "Sunglasses",
            "Sandals & Walking Shoes"
        ]
    }
];
