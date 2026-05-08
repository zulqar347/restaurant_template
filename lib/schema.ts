import { restaurant } from "@/data/restaurant";
import { getReadingTime } from "@/lib/blog";
import type { BlogPost } from "@/lib/types";

const siteUrl = "https://emberandspice.example";

function absoluteImageUrl(src: string) {
  return src.startsWith("http") ? src : `${siteUrl}${src}`;
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.description,
    image: `${siteUrl}/hero-premium.jpg`,
    telephone: restaurant.phone,
    email: restaurant.email,
    priceRange: restaurant.priceRange,
    servesCuisine: restaurant.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.region,
      postalCode: restaurant.address.postalCode,
      addressCountry: restaurant.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.coordinates.latitude,
      longitude: restaurant.coordinates.longitude,
    },
    openingHours: restaurant.openingHours,
    url: siteUrl,
    acceptsReservations: true,
    sameAs: [restaurant.socials.instagram, restaurant.socials.facebook],
  };
}

export function blogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImageUrl(post.featuredImage),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: restaurant.name,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    timeRequired: `PT${getReadingTime(post)}M`,
  };
}

export function faqSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
