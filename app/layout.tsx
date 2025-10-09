import "./globals.css";
import { cache } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { getHomeData } from "./utils/services/api/getServices";
import { HomeData } from "./utils/types/data";
import localFont from "next/font/local";

const fetchHomeData = cache(async (): Promise<Partial<HomeData>> => {
  try {
    const homeData = await getHomeData();
    return homeData || {};
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {};
  }
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const homeData = await fetchHomeData();
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title = homeData?.data?.metaTitle || "Default Title";
    const description =
      homeData?.data?.metaDescription || "Default Description";
    const ogTitle = homeData?.data?.ogTitle || title;
    const ogDescription = homeData?.data?.ogDescription || description;
    const ogImage = homeData?.data?.ogImage?.url || defaultImage;

    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_DOMAIN ||
          "https://www.sachithearchitect.com"
      ),
      title,
      description,
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN,
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        locale: "en",
        images: [
          {
            url: ogImage,
            alt: ogTitle,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Home",
      description: "Home Description",
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN,
      },
      openGraph: {
        title: "Home",
        description: "Home Description",
        locale: "en",
        images: [{ url: "/assets/common/heroImage.png", alt: "Home" }],
      },
    };
  }
};

const GilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = "https://www.sachithearchitect.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Sachithanand P Udayan",
        alternateName: ["Sachi The Architect", "Sachithanand P Udayan"],
        jobTitle: "Design Architect, Illustrator & Interior Designer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance Architect",
        },
        url: siteUrl,
        image: `${siteUrl}/assets/common/sachi.webp`,
        sameAs: [
          "https://www.instagram.com/sachithanand_",
          "https://www.linkedin.com/in/sachithanandpudayan",
        ],
        description:
          "Freelance design architect, illustrator, and interior designer specializing in minimal art, theming, and creative concepts for projects across UAE, GCC, Europe, and Asia.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "UAE, India",
        },
      },
      {
        "@type": "WebSite",
        name: "Sachithe Architect Portfolio",
        url: siteUrl,
        description:
          "Portfolio of Sachithanand P Udayan – Freelance Architect, Concept Designer, and Illustrator based in UAE with projects across GCC, Europe, and Asia.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        name: "Freelance Architecture & Design Services",
        url: siteUrl,
        image: `${siteUrl}/assets/common/sachi.webp`,
        description:
          "Providing freelance architectural design, interior design, theming, and illustration services across UAE, GCC, Europe, and Asia.",
        areaServed: [
          "United Arab Emirates",
          "Gulf Cooperation Council",
          "Europe",
          "Asia",
          "India",
          "Dubai",
          "Saudi Arabia",
          "Abu Dhabi",
          "Riyadh",
          "London",
        ],
        serviceType: [
          "Design Architecture",
          "Concept Architecture",
          "Illustration",
          "Minimal Art",
          "Interior Design",
          "Theming",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="Sachithanand P Udayan, Sachithe Architect, www.sachithearchitect.com, freelance architect, freelance design architect, freelance concept architect, freelance interior designer, freelance illustrator, architect portfolio, design architect UAE, concept architect Dubai, architectural designer GCC, interior designer UAE, theming architect Dubai, minimal art architecture, architectural illustrator, architectural visualization GCC, creative architect Europe, sustainable architecture Asia, modern architecture UAE, architecture and art portfolio, residential architecture GCC, interior design Dubai, artistic architecture Europe, landscape design UAE, architecture consultant Dubai, contemporary architecture portfolio, Indian architect in UAE, architecture firm Dubai, concept design architect, theming designer, art and architecture Dubai, minimalist architect Europe"
        />
        <meta name="publisher" content="Sachithanand P Udayan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: GilroyMedium.style.fontFamily }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
