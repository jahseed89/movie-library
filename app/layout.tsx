import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Library",
  description: "Application to display the trending movies from the TMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
