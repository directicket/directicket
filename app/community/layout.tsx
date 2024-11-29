import Header from "@/components/shared/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Directicket | Early access",
    description: "Get early access to Directicket.",
    icons: {
      icon: "/favicon.ico"
    }
  };

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        
        <main className="flex-1">{children}</main>
      </div>
    );
  }