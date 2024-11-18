import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
    title: "Woodson Robotics",
    description: "The Home of CAVBOTICS 8590",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${GeistSans.className} antialiased dark bg-black bg-grid-white/[0.03]`}
            >
                {children}
            </body>
        </html>
    );
}
