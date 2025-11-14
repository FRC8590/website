import Article from "@/utils/article";
import Br from "@/utils/br";
import Image from "next/image";
import { PinContainer } from "@/components/3d-pin";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

export function DonateButton() {
    return (
        <div className="flex items-center justify-center">
            <a target="_blank" href={DONATE_URL} className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg" />
                <div className="text-3xl font-light px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Donate Now!
                </div>
            </a>
        </div>
    );
}

export default function SupportUs() {
    return (
        <PinContainer title="Donate Now!" href="https://google.com">
            <div className="p-4 text-lg flex flex-col tracking-tight h-full dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] w-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-zinc-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                Consider donating to help provide STEM opportunities to all
                students at Woodson. By donating, you help foster student&apos;s
                passions by enabling our team to purchase the necessary
                materials, tools, and resources for building our robot. <Br />
                Join us by empowering the next generation of innovators and
                leaders.
            </div>
        </PinContainer>
    );
}
