import type { Metadata } from "next";
import "./globals.css";
import { DEVELOPER_PROFILE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${DEVELOPER_PROFILE.handle} | Full-Stack & Systems Engineer Portfolio`,
  description: DEVELOPER_PROFILE.bio,
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "Turborepo",
    "TypeScript",
    "C++",
    "Java OOP",
    "OAuth 2.0",
    "Socket.io",
    "MongoDB",
    "MySQL",
    "Redis",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
