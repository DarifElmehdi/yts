import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import wtfilm from "./wtfilm.png";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata() {
  return {
    metadataBase: "https://wtfilm.vercel.app/",
    keywords: [
      "Watch movies online",
      "Latest movies 2024",
      "Popular movie streaming",
      "Best movie streaming sites",
      "Stream movies in HD",
      "Free movie streaming",
      "Watch movies in 4K",
      "Latest movie releases",
      "New movies online",
      "Watch popular movies",
      "Best movies to watch",
      "Movie streaming platforms",
      "HD movie streaming",
      "Stream new releases",
      "Watch trending movies",
      "Online movie website",
      "Top movie streaming site",
      "Full HD movies online",
      "Watch movies legally",
      "New movie streaming site",
      "Watch movies anytime",
      "4K movies online",
      "Best movies 2024",
      "Free HD movie streaming",
      "Movie streaming without ads",
      "Watch blockbuster movies",
      "Stream top movies",
      "Movie recommendations 2024",
      "Free movie watchlists",
      "Latest movie trailers",
      "Top-rated movies 2024",
      "Online cinema experience",
      "Watch the latest blockbusters",
      "New release movie streaming",
      "Movie trends 2024",
      "Best films to watch",
      "Unlimited movie streaming",
      "Free movie websites",
      "Movie streaming in 4K",
      "Latest Hollywood movies",
      "Movie watchlist 2024",
      "High-quality movie streaming",
      "Movies online without ads",
      "Best streaming movies",
      "Trending films online",
      "Watch full movies free",
      "Latest movie updates",
      "Top movie streaming platform",
      "Best online movies 2024",
      "Stream movies instantly",
      "Online streaming for movies",
      "Watch 2024 new releases",
      "Popular movies in 4K",
      "Movie streaming without signup",
      "Best free streaming sites",
      "Latest action movies 2024",
      "Watch free movies online",
      "Stream top-rated movies",
      "Free online movie site",
      "Watch movies now",
      "Best movie websites",
      "Watch films in 4K",
      "Latest movie trailers 2024",
      "Online movie releases",
      "Free movie download site",
      "Stream movies without limits",
      "Watch top movies free",
      "Movie streaming free HD",
      "Best movie streaming platform",
      "Watch 2024 blockbusters",
      "Latest movie recommendations",
      "Top films to stream",
      "Best movies online 2024",
      "Stream movies at home",
      "Full movies streaming",
      "Watch latest movies now",
      "Movie streaming websites 2024",
      "Best cinema online",
      "Latest movies free",
      "Watch movies no ads",
      "New movie releases online",
      "Watch movies 2024",
      "Online movie database",
      "Best streaming platforms 2024",
      "2024 movie streaming",
      "Latest movie watchlist",
      "Top movie streaming sites",
      "Watch 2024 films online",
      "Best movie streaming apps",
      "Movie streaming services",
      "Watch trending films",
      "Stream top movies online",
      "Free HD movies no signup",
      "Watch the latest releases",
      "Stream films in HD",
      "Best free movies to watch",
      "Watch films instantly",
      "Free movie watchlist 2024",
      "Top-rated 2024 films",
      "Watch free movies in 4K",
    ],
    title: "WTFilm - Watch Movies For Free",

    description:
      "Welcome to WTFilm, your premier destination for streaming the latest movies and staying updated on popular films. Enjoy seamless viewing in 1080p, 4K, or even 3D, with no buffering no ads — just pure entertainment at your fingertips.",

    openGraph: {
      title: "WTFilm - Watch Movies For Free",
      description:
        "Join WTFilm to watch and discover the latest hit movies. Stream in high-quality formats without interruptions, ensuring a top-notch entertainment experience.",
      image: "path/to/your/image.jpg", // Replace with your actual image URL
      url: "https://wtfilm.vercel.app/", // Your website URL
      type: "website", // Open Graph type
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="3QhXpuHPCCRSKUwMj3dG45B564ntQhiTkThY1lY3yWE"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
