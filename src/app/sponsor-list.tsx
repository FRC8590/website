"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorList() {
    return (
        <motion.div
            className="grid auto-rows-fr grid-cols-3 gap-4"
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.8,
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <Image
                src="/sponsors/colonial-pipeline-co.svg"
                width={200}
                height={200}
                alt="Colonial Pipeline Co."
                className="grayscale"
            />
            <Image
                src="/sponsors/colonial-pipeline-co.svg"
                width={200}
                height={200}
                alt="Colonial Pipeline Co."
                className="grayscale"
            />
            <Image
                src="/sponsors/colonial-pipeline-co.svg"
                width={200}
                height={200}
                alt="Colonial Pipeline Co."
                className="grayscale"
            />
        </motion.div>
    );
}
