"use client";
import type { HasChildren } from "@/utils/types";
import { motion } from "framer-motion";

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
            <header className="text-xl font-light">{props.title}</header>
            <p className="text-5xl font-bold">
                <span className="font-normal text-xl text-zinc-200 select-none">
                    $
                </span>
                {props.amount}
            </p>
            <ul>{props.children}</ul>
            <button className="text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b from-rose-500 to-rose-900 text-white hover:shadow-xl transition duration-200">
                More Information
            </button>
        </motion.div>
    );
}
