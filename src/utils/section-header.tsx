"use client";
import { motion } from "framer-motion";
import { ColorfulText } from "@/components/colorful-text";

export default function SectionHeader(props: { text: string }) {
    return (
        <motion.header
            initial={{ opacity: 0.0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="flex items-center justify-center w-full py-4 xl:py-8 text-3xl lg:text-4xl xl:text-6xl font-semibold text-black dark:text-white"
        >
            <ColorfulText text={props.text} />
        </motion.header>
    );
}
