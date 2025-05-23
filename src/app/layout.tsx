// src/app/layout.tsx
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/Themecontext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Charger Unbounded via next/font/google
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-unbounded", // Changement de nom pour plus de clarté
});

export const metadata: Metadata = {
  title: "SPRINTER - Agence de design créatif",
  description:
    "Agence de design créatif spécialisée dans les solutions visuelles innovantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${unbounded.variable} antialiased`}>
        <ThemeProvider>
          <header className="sticky top-0 z-50 bg-white shadow-md">
            <Navbar />
          </header>

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
