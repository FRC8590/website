"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Title() {
    return (
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

                <div>
                    <Image
                        src="/logos/frc.png"
                        width={325}
                        height={200}
                        alt="FIRST Robotics Competition Logo"
                        className="dark:hidden select-none"
                    />
                    <Image
                        src="/logos/frc_dark.png"
                        width={325}
                        height={200}
                        alt="FIRST Robotics Competition Logo"
                        className="hidden dark:block select-none"
                    />
                </div>
            </div>
            <h1 className="py-8 lg:py-12 text-7xl xl:text-9xl font-bold text-center relative z-20 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                Woodson Robotics
            </h1>
        </motion.div>
    );
}
