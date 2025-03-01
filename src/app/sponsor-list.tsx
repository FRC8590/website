"use client";
import Image from "next/image";
import { motion } from "framer-motion";
/* className="grid auto-rows-fr grid-cols-3 gap-4 py-4" */
export default function SponsorList() {
    return (
        <motion.div
            className="grid gap-3 grid-cols-4 grid-rows-3"
            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <Image
                src="/sponsors/wt-ptso.png"
                width={200}
                height={200}
                alt="C.G. Woodson PTSO"
                className="sponsor-image"
            />
            <Image
                src="/sponsors/colonial-pipeline-co.svg"
                width={200}
                height={200}
                alt="Colonial Pipeline Co."
                className="sponsor-image"
            />
            <Image
                src="/sponsors/haas.png"
                width={200}
                height={200}
                alt="HAAS"
                className="sponsor-image"
            />
            <Image
                src="/sponsors/synergy.png"
                width={200}
                height={200}
                alt="Synergy"
                className="sponsor-image"
            />
            <Image
                src="/sponsors/mamma_lucia.png"
                width={200}
                height={200}
                alt="Mamma Lucia"
                className="sponsor-image"
            />
            <Image
                src="/sponsors/jctm.png"
                width={200}
                height={200}
                alt="JCTM"
                className="sponsor-image"
            />
        </motion.div>
    );
}
