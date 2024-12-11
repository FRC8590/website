"use client";
import type { HasChildren } from "@/utils/types";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/background-gradient";
import Check from "@/utils/check";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

export function DonateButton() {
    return (
        <a
            target="_blank"
            href={DONATE_URL}
            className="text-center hover:opacity-50 text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b text-white hover:shadow-xl transition duration-200 from-rose-500 to-rose-900"
        >
            Donate Now!
        </a>
    );
}

export function SponsorButton() {
    return (
        <div className="flex flex-col space-y-2">
            <PacketButton />
            <DonateButton />
        </div>
    );
}

export function PacketButton() {
    return (
        <button
            onClick={() => {
                saveAs(
                    "/sponsors.pdf",
                    "Woodson Cavbotics Sponsorship Packet.pdf"
                );
            }}
            className="hover:opacity-50 text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b from-sky-500 to-sky-900 text-white hover:shadow-xl transition duration-200"
        >
            More Information
        </button>
    );
}

function SponsorTierTitle(props: { name: string; amount: string }) {
    return (
        <>
            <header className="text-xl font-light select-none">
                {props.name}
            </header>
            <div className="text-5xl font-bold select-none hover:scale-105 transition-all w-fit">
                <span className="font-normal text-xl text-zinc-200 select-none">
                    <
                </span>
                {props.amount}
            </div>
        </>
    );
}

export default function SponsorCard(
    props: HasChildren & { title: string; amount: string }
) {
    return (
        <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.1,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] flex flex-col space-y-3 w-full p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-zinc-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mx-auto group"
        >
            <SponsorTierTitle name={props.title} amount={props.amount} />
            <ul>{props.children}</ul>
            <SponsorButton />
        </motion.div>
    );
}

export function DriverCard() {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.5,
                duration: 1.5,
                ease: "easeInOut",
            }}
            className="flex items-center justify-center py-4 lg:py-4"
        >
            <div className="w-full lg:w-1/2">
                <BackgroundGradient
                    className="rounded-[22px] w-full bg-white dark:bg-zinc-950"
                    colorCycle={3}
                    blurClass="blur-xl"
                >
                    <div className="p-8 dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] flex flex-col space-y-3 w-full rounded-[22px] border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-zinc-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mx-auto group">
                        <SponsorTierTitle name="Driver" amount="20,000" />
                        <ul>
                            <Check>Name the robot</Check>
                            <Check>Team gifts and merchandise</Check>
                            <Check>Large signed photo of the team</Check>
                        </ul>
                        <SponsorButton />
                    </div>
                </BackgroundGradient>
            </div>
        </motion.div>
    );
}
