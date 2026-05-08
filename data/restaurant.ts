import type { BlogPost, Chef, EventOffering, GalleryImage, MenuCategory, Promotion, Testimonial } from "@/lib/types";

export const restaurant = {
  name: "EMBER & SPICE",
  tagline: "Crafted Flavors. Memorable Evenings.",
  description:
    "A modern fire-kissed dining room pairing seasonal California ingredients with spice-driven technique, polished service, and an intimate amber-lit atmosphere.",
  address: {
    street: "1846 Arden Row",
    city: "San Francisco",
    region: "CA",
    postalCode: "94110",
    country: "US",
  },
  phone: "+1 (415) 555-0186",
  email: "reservations@emberandspice.example",
  openingHours: ["Tu-Th 17:00-22:00", "Fr-Sa 17:00-23:30", "Su 16:30-21:00"],
  priceRange: "$$$",
  cuisine: ["Modern American", "Wood-Fired", "Seasonal"],
  coordinates: {
    latitude: 37.7599,
    longitude: -122.4148,
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const heroImages = [
  {
    src: "/hero-premium.jpg",
    alt: "Amber-lit modern restaurant dining room",
  },
  {
    src: "/food1.jpg",
    alt: "Chef plating a fine dining dish",
  },
];

export const featuredDishes = [
  {
    name: "Charred Ribeye au Poivre",
    description: "Dry-aged beef, ember-roasted shallot, cognac pepper jus, smoked marrow salt.",
    price: "$58",
    image: "/food1.jpg",
    tag: "Signature",
  },
  {
    name: "Saffron Sea Bass",
    description: "Crisp skin bass, fennel pollen, saffron beurre blanc, citrus herb salad.",
    price: "$44",
    image: "/food2.jpg",
    tag: "Coastal",
  },
  {
    name: "Ember Carrot Agnolotti",
    description: "Hand-folded pasta, brown butter, toasted pepita, chile crisp, aged ricotta.",
    price: "$32",
    image: "/food3.jpg",
    tag: "Seasonal",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    name: "First Impressions",
    description: "Layered starters built for sharing before the room settles into dinner.",
    items: [
      { name: "Coal-Roasted Oysters", details: "Smoked paprika butter, lemon ash, chive", price: "$24" },
      { name: "Whipped Feta & Chili Honey", details: "Grilled sourdough, black sesame, herbs", price: "$18" },
      { name: "Tuna Crudo", details: "Blood orange, green peppercorn, pickled fennel", price: "$22" },
    ],
  },
  {
    name: "From The Hearth",
    description: "Wood-fired mains with polished sauces and seasonal accompaniments.",
    items: [
      { name: "Charred Ribeye au Poivre", details: "14 oz dry-aged ribeye, cognac pepper jus", price: "$58" },
      { name: "Saffron Sea Bass", details: "Fennel pollen, saffron beurre blanc, herbs", price: "$44" },
      { name: "Spice-Crusted Lamb", details: "Pomegranate glaze, smoked eggplant, mint", price: "$48" },
    ],
  },
  {
    name: "Sweet Finish",
    description: "Date-night desserts with texture, warmth, and tableside detail.",
    items: [
      { name: "Burnt Honey Panna Cotta", details: "Fig compote, pistachio praline", price: "$15" },
      { name: "Dark Chocolate Torte", details: "Espresso cream, cocoa nib, sea salt", price: "$16" },
      { name: "Cardamom Basque Cheesecake", details: "Citrus caramel, vanilla chantilly", price: "$14" },
    ],
  },
];

export const chefs: Chef[] = [
  {
    name: "Mara Ellison",
    role: "Executive Chef",
    bio: "A fire-cooking specialist known for precise sauces, local sourcing, and restrained spice blends.",
    image: "/hero-premium.jpg",
  },
  {
    name: "Jon Bellamy",
    role: "Chef de Cuisine",
    bio: "Leads the nightly hearth menu with a focus on seafood, fermentation, and seasonal vegetables.",
    image: "/food1.jfif",
  },
  {
    name: "Selene Park",
    role: "Pastry Chef",
    bio: "Creates elegant desserts that balance smoke, spice, fruit, and deep chocolate notes.",
    image: "/food3.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The room feels cinematic, the service is calm, and the ribeye alone is worth booking ahead for.",
    author: "Priya N.",
    detail: "Anniversary dinner",
  },
  {
    quote: "A rare restaurant that feels special without feeling stiff. Every course had a reason to be there.",
    author: "Marcus T.",
    detail: "Private dining host",
  },
  {
    quote: "EMBER & SPICE has become our go-to recommendation for clients visiting the city.",
    author: "Elena R.",
    detail: "Local concierge",
  },
  {
    quote: "The tasting menu was polished, generous, and memorable from the oyster course to dessert.",
    author: "Daniel K.",
    detail: "Chef's counter guest",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/hero-premium.jpg",
    alt: "Moody restaurant bar with warm lights",
  },
  {
    src: "/food1.jpg",
    alt: "Fine dining plate with vibrant vegetables",
  },
  {
    src: "/food2.jpg",
    alt: "Elegant dinner table setting",
  },
  {
    src: "/food3.jpg",
    alt: "Wood fired dish with charred crust",
  },
  {
    src: "/food1.jfif",
    alt: "Chef preparing dinner service",
  },
  {
    src: "/food1.jpg",
    alt: "Plated tasting menu course",
  },
];

export const promotions: Promotion[] = [
  {
    title: "Golden Hour at the Hearth",
    description: "Tuesday through Thursday, enjoy oysters, ember snacks, and reserve cellar pours from 5-6 PM.",
    badge: "Weeknight",
  },
  {
    title: "Chef's Counter Tasting",
    description: "A six-course fire-led menu with optional wine pairings and direct views into the open kitchen.",
    badge: "Limited Seats",
  },
];

export const eventOfferings: EventOffering[] = [
  {
    title: "Private Dining Room",
    description: "A 28-seat candlelit room for client dinners, birthdays, rehearsal dinners, and celebrations.",
  },
  {
    title: "Full Restaurant Buyout",
    description: "Custom menus, beverage direction, floral partners, and event pacing for up to 110 guests.",
  },
  {
    title: "Chef's Table",
    description: "Eight counter seats with a curated tasting menu and tableside stories from the culinary team.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-fine-dining-experience-in-the-city",
    title: "Best Fine Dining Experience in the City",
    excerpt:
      "What separates a polished fine dining evening from an ordinary dinner, from pacing and room design to seasonal cooking.",
    category: "Fine Dining",
    publishedAt: "2026-03-08",
    author: "Mara Ellison",
    featuredImage: "/hero-premium.jpg",
    keywords: ["fine dining", "best restaurant in San Francisco", "modern restaurant"],
    faq: [
      {
        question: "What should I look for in a fine dining restaurant?",
        answer: "Look for seasonal menus, thoughtful pacing, polished service, strong beverage options, and a room that fits the occasion.",
      },
      {
        question: "Is EMBER & SPICE good for celebrations?",
        answer: "Yes. The dining room, chef's counter, and private dining room are designed for anniversaries, birthdays, and client dinners.",
      },
    ],
    sections: [
      {
        heading: "Fine Dining Starts Before the First Course",
        body: [
          "A memorable fine dining experience begins with intention. Lighting, table spacing, reservation timing, and greeting rituals all shape how relaxed the evening feels before a menu ever arrives.",
          "At EMBER & SPICE, the room is designed around warm sightlines, low amber light, and a visible hearth, giving guests a sense of occasion without making the experience feel overly formal.",
        ],
      },
      {
        heading: "Seasonal Menus Make the Meal Feel Current",
        body: [
          "The best restaurants avoid static menus. Seasonal produce, local seafood, and changing spice blends keep regular guests engaged while giving visitors a clear sense of place.",
          "A concise menu also helps the kitchen execute consistently, which is often the difference between an impressive dish and a truly polished dinner.",
        ],
      },
      {
        heading: "Service Should Guide, Not Interrupt",
        body: [
          "Great hospitality reads the table. Servers should explain dishes clearly, pace courses with care, and help guests choose wine or cocktails without turning the evening into a lecture.",
          "That balance is central to why guests return: they remember feeling looked after, not managed.",
        ],
      },
    ],
  },
  {
    slug: "top-romantic-dinner-spots",
    title: "Top Romantic Dinner Spots",
    excerpt:
      "A practical guide to choosing the right romantic dinner setting, including lighting, seating, menus, and reservation timing.",
    category: "Date Night",
    publishedAt: "2026-02-14",
    author: "Selene Park",
    featuredImage: "/food2.jpg",
    keywords: ["romantic dinner", "date night restaurant", "anniversary dinner"],
    faq: [
      {
        question: "What time is best for a romantic dinner reservation?",
        answer: "Early evening is quieter, while later reservations feel more atmospheric. For anniversaries, book at least one week ahead.",
      },
    ],
    sections: [
      {
        heading: "Choose Atmosphere Over Noise",
        body: [
          "A romantic restaurant should make conversation easy. Look for warm lighting, comfortable seating, thoughtful spacing, and a room that feels alive without being loud.",
        ],
      },
      {
        heading: "Order for Shared Moments",
        body: [
          "Start with a shareable plate, choose mains with contrasting textures, and finish with a dessert that gives the evening a final note of indulgence.",
        ],
      },
      {
        heading: "Make the Reservation Work for You",
        body: [
          "When booking, mention birthdays, proposals, anniversaries, or seating preferences. Good restaurants use that context to make the evening feel more personal.",
        ],
      },
    ],
  },
  {
    slug: "chef-secrets-behind-signature-dishes",
    title: "Chef Secrets Behind Signature Dishes",
    excerpt:
      "How chefs build memorable signature dishes with contrast, repetition, heat control, and restrained finishing touches.",
    category: "Chef Notes",
    publishedAt: "2026-01-27",
    author: "Mara Ellison",
    featuredImage: "/food1.jfif",
    keywords: ["signature dishes", "chef techniques", "restaurant cooking"],
    faq: [
      {
        question: "What makes a dish a signature dish?",
        answer: "A signature dish is distinctive, repeatable, tied to the restaurant's identity, and memorable enough that guests recommend it by name.",
      },
    ],
    sections: [
      {
        heading: "Contrast Creates Memory",
        body: [
          "The dishes guests remember usually contain contrast: crisp against soft, smoke against acid, richness against spice, or heat against something cooling.",
        ],
      },
      {
        heading: "Heat Control Is Everything",
        body: [
          "Wood fire gives flavor, but only when controlled carefully. Chefs use distance, timing, and resting periods to create char without drying out the center.",
        ],
      },
      {
        heading: "The Final Garnish Must Have a Job",
        body: [
          "A finishing oil, herb, or crunchy element should sharpen the dish. Decoration alone rarely survives on a serious menu.",
        ],
      },
    ],
  },
  {
    slug: "how-fresh-ingredients-change-flavor",
    title: "How Fresh Ingredients Change Flavor",
    excerpt:
      "Fresh ingredients influence aroma, texture, color, and balance, helping restaurants create food that feels vibrant and specific.",
    category: "Ingredients",
    publishedAt: "2026-01-10",
    author: "Jon Bellamy",
    featuredImage: "/food3.jpg",
    keywords: ["fresh ingredients", "seasonal restaurant", "local produce"],
    faq: [
      {
        question: "Do fresh ingredients really taste better?",
        answer: "Often, yes. Fresh produce and seafood usually offer stronger aroma, better texture, and more natural sweetness or acidity.",
      },
    ],
    sections: [
      {
        heading: "Freshness Shows Up as Aroma",
        body: [
          "Aroma is a major part of flavor. Herbs, citrus, seafood, and vegetables lose aromatic intensity over time, which is why careful sourcing matters.",
        ],
      },
      {
        heading: "Texture Changes the Whole Dish",
        body: [
          "Crisp greens, properly handled fish, and peak-season vegetables allow chefs to use lighter sauces and cleaner preparations.",
        ],
      },
      {
        heading: "Seasonality Gives a Restaurant Identity",
        body: [
          "Menus that follow the market feel grounded in their city and season. That local specificity is difficult to imitate.",
        ],
      },
    ],
  },
  {
    slug: "ultimate-guide-to-steak-pairings",
    title: "Ultimate Guide to Steak Pairings",
    excerpt:
      "Pair steak with wines, cocktails, sauces, vegetables, and desserts that complement char, fat, salt, and smoke.",
    category: "Pairings",
    publishedAt: "2025-12-18",
    author: "Jon Bellamy",
    featuredImage: "/food1.jpg",
    keywords: ["steak pairings", "wine pairing", "ribeye dinner"],
    faq: [
      {
        question: "What wine pairs best with ribeye?",
        answer: "Cabernet Sauvignon, Syrah, Malbec, and structured red blends work well because tannin balances ribeye's richness.",
      },
    ],
    sections: [
      {
        heading: "Match Richness With Structure",
        body: [
          "A well-marbled steak needs a pairing with grip. Tannic red wines, bitter greens, peppery sauces, and charred vegetables can all balance richness.",
        ],
      },
      {
        heading: "Use Sauce as the Bridge",
        body: [
          "Pepper jus, chimichurri, compound butter, or smoked salt can shift the best drink pairing. The sauce often matters as much as the cut.",
        ],
      },
      {
        heading: "Finish With Contrast",
        body: [
          "After steak, choose desserts with acidity, coffee, chocolate, or fruit. A balanced finish keeps the meal from feeling too heavy.",
        ],
      },
    ],
  },
  {
    slug: "best-desserts-for-date-nights",
    title: "Best Desserts for Date Nights",
    excerpt:
      "The best date-night desserts are shareable, elegant, not too heavy, and memorable enough to close the evening well.",
    category: "Date Night",
    publishedAt: "2025-11-30",
    author: "Selene Park",
    featuredImage: "/food2.jpg",
    keywords: ["date night desserts", "romantic dessert", "restaurant dessert"],
    faq: [
      {
        question: "What dessert is best for a date night?",
        answer: "Chocolate desserts, panna cotta, cheesecake, and fruit-forward desserts work well when they are balanced and easy to share.",
      },
    ],
    sections: [
      {
        heading: "Shareable Desserts Feel More Social",
        body: [
          "A dessert for two should invite conversation. Creamy textures, crisp garnishes, and small acidic accents keep each bite interesting.",
        ],
      },
      {
        heading: "Chocolate Still Works",
        body: [
          "Chocolate feels classic because it pairs well with coffee, red wine, amaro, berries, and spice. The key is keeping sweetness controlled.",
        ],
      },
      {
        heading: "End With a Clear Final Note",
        body: [
          "Great dessert menus give guests a sense of completion. A clean final flavor makes the whole dinner feel more intentional.",
        ],
      },
    ],
  },
];
