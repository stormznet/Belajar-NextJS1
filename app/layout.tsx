import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "./components/Header/header";

const inter = Inter({ subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "900", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppinsMedium.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
