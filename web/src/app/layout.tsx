import Header from "@/patterns/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";
import Footer from "@/patterns/Footer";
import { UiContextProvider } from "@/context/UiContext";

const openSans = OpenSans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WebJump",
  description: "Pagina Inicial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <UiContextProvider>
          <Header />
          {children}
          <Footer />
        </UiContextProvider>
      </body>
    </html>
  );
}
