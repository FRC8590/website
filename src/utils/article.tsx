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
                    className={`flex space-y-6 md:space-y-0 items-center md:items-stretch md:flex-row flex-col md:max-h-[36rem] overflow-auto ${
                        props.flip ? "md:flex-row-reverse" : ""
                    }`}
                >
                    <div className="flex flex-col p-2 md:p-8 space-y-3 md:min-w-96 min-w-0 overflow-auto md:flex-1">
                        <div className="h-fit w-full text-center md:text-start bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-zinc-500 via-zinc-100 to-zinc-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="text-4xl font-bold">
                                {props.title}
                            </span>
                        </div>
                        <div className="text-center md:text-start flex flex-1 flex-col space-y-6 text-base lg:text-lg text-zinc-200">
                            <p>{props.children}</p>
                            {props.extra && props.extra}
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/2 md:flex-shrink-0 min-h-64 md:min-h-0">
                        {props.image}
                    </div>
                </div>
            </GridBackground>
        </motion.div>
    );
}
