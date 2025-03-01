"use client";
import type { HasChildren } from "./types";
import { motion } from "framer-motion";

export default function SectionHeader(props: HasChildren) {
    return (
        <motion.header
            initial={{ opacity: 0.0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="flex items-center justify-center w-full py-4 xl:py-8 text-3xl lg:text-4xl xl:text-6xl font-semibold text-black dark:text-white"
        >
            <div className="h-fit w-fit bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-zinc-600 via-zinc-100 to-zinc-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">{props.children}</span>
            </div>
        </motion.header>
    );
}
