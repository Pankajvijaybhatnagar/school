import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import EnquiryModal from "@/components/layout/EnquiryModal";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata = {
  title: {
    default: "RPS Group of Schools | 28 Years of Excellence in Education",
    template: "%s | RPS Group of Schools",
  },
  description:
    "RPS Group of Schools — under the aegis of Rao Pahlad Singh Education Society, Mahendergarh. CBSE schools in Mahendergarh, Rewari and Gurugram. NEET 2026: 140 RPSians scored 500+. Admissions Open 2026-27.",
  keywords: ["RPS School", "RPS Mahendergarh", "RPS Rewari", "RPS Gurugram Sector 89", "Best CBSE School Haryana", "NEET coaching school", "Rao Pahlad Singh"],
};

export const viewport = {
  themeColor: "#0b1640",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <EnquiryModal />
      </body>
    </html>
  );
}
