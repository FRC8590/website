"use client";
import type { HasChildren } from "./types";
import { motion } from "framer-motion";

export default function SectionHeader(props: HasChildren) {
    return (
        <motion.header
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="py-4 text-3xl lg:text-4xl font-semibold text-black dark:text-white"
        >
            {props.children}
        </motion.header>
    );
}
