import { Inter, Montserrat, Playfair_Display, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import EnquiryModal from "@/components/layout/EnquiryModal";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });
const hindi = Tiro_Devanagari_Hindi({ variable: "--font-tiro", subsets: ["devanagari", "latin"], weight: "400", style: ["normal", "italic"] });

export const metadata = {
  title: {
    default: "Gurukul Vidyapeeth, Jind | CBSE Senior Secondary School",
    template: "%s | Gurukul Vidyapeeth, Jind",
  },
  description:
    "Shri Lajja Ram Bashesar Dass Gurukul Vidyapeeth, Gohana Road, Pandu Pindara, Jind — CBSE affiliated (No. 530999) school from Nursery to Class XII in Hindi & English medium. संस्कारमय जीवन पर आधारित आधुनिक शिक्षा केन्द्र. Admissions open 2027-28.",
  keywords: ["Gurukul Vidyapeeth Jind", "Shri Lajja Ram Bashesar Dass Gurukul Vidyapeeth", "CBSE school Jind", "Pandu Pindara school", "Gohana Road Jind school", "530999"],
};

export const viewport = {
  themeColor: "#0b1640",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${hindi.variable} h-full antialiased`}
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
