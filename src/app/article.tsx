"use client";
import GridBackground from "./grid-background";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { motion } from "framer-motion";

export default function Article(props: {
    text: string;
    title: string;
    image: React.ReactNode;
    flip?: boolean;
    extra?: React.ReactNode;
}) {
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
                        <header className="text-2xl lg:text-3xl font-semibold">
                            {props.title}
                        </header>
                        <div className="flex flex-col space-y-6">
                            <TextGenerateEffect words={props.text} />
                            {props.extra && props.extra}
                        </div>
                    </div>
                    {props.image}
                </div>
            </GridBackground>
        </motion.div>
    );
}
