import {
    IconMessageFilled,
    IconCoinFilled,
    IconUserFilled,
} from "@tabler/icons-react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FloatingNav } from "@/components/floating-navbar";
import { MdWorkHistory } from "react-icons/md";

export default function FloatingNavbar() {
    const navItems = [
        {
            name: "About Us",
            link: "#about",
            icon: <IconUserFilled className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Our Past",
            link: "#years",
            icon: <MdWorkHistory className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Donations",
            link: "#donate",
            icon: <FaMoneyBill1Wave className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Sponsorships",
            link: "#sponsorships",
            icon: <IconCoinFilled className="h-6 w-6 text-zinc-100" />,
        },
        {
            name: "Contact Us",
            link: "#contact",
            icon: <IconMessageFilled className="h-6 w-6 text-zinc-100" />,
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
