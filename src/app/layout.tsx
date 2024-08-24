import { GeistSans } from "geist/font/sans";

export const metadata = {
    title: "CAVBOTICS 8590",
    description: "Woodson Robotics Team",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
