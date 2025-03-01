"use client";
import type { HasChildren } from "./types";
import { motion } from "framer-motion";
import { ColorfulText } from "@/components/colorful-text";
import ReactDOMServer from "react-dom/server";

export default function SectionHeader(props: HasChildren) {
    return (
        <motion.header
            initial={{ opacity: 0.0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="flex items-center justify-center w-full py-4 xl:py-8 text-3xl lg:text-4xl xl:text-6xl font-semibold text-black dark:text-white"
        >
            {/* This is a bit hacky, but I don't care. */}
            <ColorfulText
                text={ReactDOMServer.renderToString(props.children)}
            />
        </motion.header>
    );
}
