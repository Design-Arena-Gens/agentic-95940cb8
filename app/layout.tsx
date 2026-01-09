import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "./(marketing)/components/header";
import { Footer } from "./(marketing)/components/footer";

export const metadata: Metadata = {
  title: "Auton AI | Autonomous Agentic Cyber Defense Platform",
  description:
    "Auton AI by ObscuraQ Technologies delivers a unified agentic cybersecurity platform blending autonomous detection, automated response, and executive visibility.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brand-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-black">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
