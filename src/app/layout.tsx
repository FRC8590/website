import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import HTMLComment from "@/utils/html-comment";

import "./globals.css";

export const metadata: Metadata = {
    title: "Woodson Robotics",
    description: "The Home of Team 8590 -- CAVBOTICS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="bTfG6GYTmG67kWHo603wcTSgFGfCApbB7OQtqy8eBAs"
                />
            </head>
            <body
                className={`${GeistSans.className} antialiased dark bg-black bg-grid-white/[0.03]`}
                suppressHydrationWarning
            >
                <HTMLComment comment="Peter was here." />
                {children}
            </body>
        </html>
    );
}
