import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MUGISHA Prosper - AI & Backend Engineer | Portfolio",
  description: "Expert AI Engineer and Backend Engineer specializing in machine learning, computer vision, and intelligent web applications. Based in Kigali, Rwanda.",
  keywords: ["AI Engineer", "Machine Learning Engineer", "Backend Engineer", "React", "Node.js", "Python", "TensorFlow", "Computer Vision", "Web Development", "Kigali Rwanda"],
  authors: [{ name: "MUGISHA Prosper" }],
  openGraph: {
    type: "website",
    url: "https://mugishaprosper-seven.vercel.app/",
    title: "MUGISHA Prosper - AI & Backend Engineer",
    description: "Expert AI & Backend Engineer specializing in machine learning, computer vision, and intelligent web applications.",
    images: [
      {
        url: "https://mugishaprosper-seven.vercel.app/profile.jpg",
        width: 1200,
        height: 630,
        alt: "MUGISHA Prosper - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUGISHA Prosper - AI & Backend Engineer",
    description: "Expert AI & Backend Engineer specializing in machine learning, computer vision, and intelligent web applications.",
    images: ["https://mugishaprosper-seven.vercel.app/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
