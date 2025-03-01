"use client";
import type { HasChildren } from "./types";
import { motion } from "framer-motion";

export default function SectionHeader(props: HasChildren) {
    return (
        <motion.header
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="text-center py-4 xl:py-8 text-3xl lg:text-4xl xl:text-6xl font-semibold text-black dark:text-white"
        >
            {props.children}
        </motion.header>
    );
}
