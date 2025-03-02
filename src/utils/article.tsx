"use client";
import GridBackground from "./grid-background";
import { motion } from "framer-motion";
import { HasChildren } from "@/utils/types";

export default function Article(
    props: HasChildren & {
        title: string;
        image: React.ReactNode;
        flip?: boolean;
        extra?: React.ReactNode;
    }
) {
    return (
        <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut",
            }}
        >
            <GridBackground>
                <div
                    className={`flex xl:flex-row flex-col ${
                        props.flip ? "xl:flex-row-reverse" : ""
                    }`}
                >
                    <div className="flex flex-col p-8 space-y-3">
                        <div className="h-fit w-fit bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-zinc-500 via-zinc-100 to-zinc-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="text-2xl lg:text-3xl font-bold">
                                {props.title}
                            </span>
                        </div>
                        <div className="flex flex-col space-y-6 text-base lg:text-lg text-zinc-200">
                            <p>{props.children}</p>
                            {props.extra && props.extra}
                        </div>
                    </div>
                    {props.image}
                </div>
            </GridBackground>
        </motion.div>
    );
}
