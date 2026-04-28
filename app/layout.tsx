import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AvivoCare · Digital omsorg som går att lita på",
  description: "Rutina samlar det dagliga arbetet på en plats. All relevant information för det operativa arbetet inom LSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
