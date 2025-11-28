import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mugisha Prosper - AI Engineer",
  description: "AI Engineer and Full-Stack Developer specializing in machine learning, backend systems, and modern web applications. Based in Kigali, Rwanda.",
  keywords: ["AI Engineer", "Machine Learning", "Full-Stack Developer", "Backend Engineer", "React", "Node.js", "Python", "TensorFlow"],
  authors: [{ name: "Mugisha Prosper" }],
  openGraph: {
    type: "website",
    url: "https://mugishaprosper-seven.vercel.app",
    title: "Mugisha Prosper - AI Engineer",
    description: "AI Engineer and Full-Stack Developer",
    siteName: "Mugisha Prosper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugisha Prosper - AI Engineer & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer specializing in machine learning, backend systems, and modern web applications.",
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
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
