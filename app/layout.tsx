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
        process.env.NEXT_PUBLIC_BASE_DOMAIN || "http://localhost:3000"
      ),
      title,
      description,
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
  return (
    <html lang="en" suppressHydrationWarning>
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
