"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";
import FRCLogo from "./frc-logo";

export default function Title() {
    return (
        <div className="w-full overflow-hidden">
            <Spotlight />
            <BackgroundLines>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex space-y-3 md:space-y-0 flex-col md:flex-row items-center w-full justify-between">
                        <Image
                            src="/logos/cavbotics.png"
                            width={225}
                            height={225}
                            alt="CAVBOTICS Logo"
                            className="invert dark:invert-0 select-none"
                        />

                        <FRCLogo />
                    </div>

                    <h1 className="py-8 lg:py-12 text-7xl xl:text-9xl font-bold text-center relative z-20 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-600 [text-shadow:0_0_rgba(0,0,0,0.1)] break-all">
                        Woodson <br className="sm:hidden" />
                        Robotics
                    </h1>
                </motion.div>
            </BackgroundLines>{" "}
        </div>
    );
}
