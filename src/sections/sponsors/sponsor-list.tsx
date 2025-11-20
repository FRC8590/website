"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

const SPONSORS = [
    <a href="https://woodsonhs.fcps.edu/" target="_blank" key={0}>
        <Image
            src="/sponsors/wt-ptso.png"
            width={100}
            height={100}
            alt="C.G. Woodson PTSO"
            className="sponsor-image"
        />
    </a>,
    <a href="https://www.ghaasfoundation.org/" target="_blank" key={1}>
        <Image
            src="/sponsors/haas.png"
            width={100}
            height={100}
            alt="HAAS"
            className="sponsor-image"
        />
    </a>,
    <a href="https://www.synergybis.com/" target="_blank" key={2}>
        <Image
            src="/sponsors/synergy.png"
            width={200}
            height={200}
            alt="Synergy"
            className="sponsor-image"
        />
    </a>,
    <a href="https://www.rtx.com/" target="_blank" key={3}>
        <Image
            src="/sponsors/rtx.png"
            width={200}
            height={200}
            alt="RTX"
            className="sponsor-image"
        />
    </a>,
    <a href="https://caringhandsvet.com/" target="_blank" key={4}>
        <Image
            src="/sponsors/caring-hands.png"
            width={100}
            height={100}
            alt="Caring Hands Animal Hospital"
            className="sponsor-image"
        />
    </a>,
];

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
            <InfiniteMovingCards items={SPONSORS} pauseOnHover={false} />
        </motion.div>
    );
}
