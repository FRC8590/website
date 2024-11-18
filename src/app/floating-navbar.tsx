import {
    IconMessage,
    IconHistory,
    IconCash,
    IconCoin,
    IconUsers,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/floating-navbar";

export default function FloatingNavbar() {
    const navItems = [
        {
            name: "About Us",
            link: "#about",
            icon: <IconUsers className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Our Past",
            link: "#years",
            icon: <IconHistory className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Donations",
            link: "#donate",
            icon: <IconCash className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Sponsorships",
            link: "#sponsorships",
            icon: <IconCoin className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Contact Us",
            link: "#contact",
            icon: <IconMessage className="h-6 w-6 text-zinc-100" />,
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
