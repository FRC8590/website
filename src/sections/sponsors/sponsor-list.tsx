"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function SponsorList() {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <p className="">As Trusted By</p>
            <div className="grid gap-3 grid-cols-4 grid-rows-3 place-content-center place-items-center auto-rows-fr">
                <Image
                    src="/sponsors/wt-ptso.png"
                    width={100}
                    height={100}
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
                    width={100}
                    height={100}
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
                    width={100}
                    height={100}
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
            </div>
        </motion.div>
    );
}
