import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to Jewellery Store",
  description: "Gold and Diamond Jewellery Store since 2018",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap"
        rel="stylesheet"
      />
      <a
        target="_blank"
        href="https://wa.me/911111111111?text=Hello%20Jewellery%20Store!%20I%20have%20an%20enquiry"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </html>
  );
}
