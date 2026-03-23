import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siwar Khalfaoui | Full Stack Developer",
  description:
    "I'm Siwar, a Full Stack Developer and Software Engineering student at ESPRIT, building modern web applications.",
  authors: [{ name: "Siwar Khalfaoui" }],
  openGraph: {
    title: "Siwar Khalfaoui | Full Stack Developer",
    description:
      "I'm Siwar, a Full Stack Developer and Software Engineering student at ESPRIT, building modern web applications.",
    url: "https://siwar-khalfaoui.vercel.app/",
    siteName: "Siwar Khalfaoui Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}