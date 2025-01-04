"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { HasChildren } from "@/utils/types";
function Slot(props: HasChildren & { label: string }) {
    return (
        <div className="flex items-center space-x-1">
            <p className="text-2xl font-extrabold">{props.children}</p>
            <p className="font-light text-lg">{props.label}</p>
        </div>
    );
}

export default function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    let interval: NodeJS.Timeout | null = null;

    const kickoffDate = new Date("2025-01-04T12:00:00");
    const updateTime = () => {
        const currentDate = new Date();
        const diff = kickoffDate.getTime() - currentDate.getTime();

        if (diff <= 0 && interval) {
            clearInterval(interval);
            return;
        }

        const seconds = diff / 1000;
        setDays(Math.floor(seconds / 3600 / 24));
        setHours(Math.floor(seconds / 3600) % 24);
        setMinutes(Math.floor(seconds / 60) % 60);
        setSeconds(Math.floor(seconds % 60));
    };
    useEffect(() => {
        interval = setInterval(() => {
            updateTime();
        }, 1000);
        updateTime();
    });
    return (
        <motion.div
            className="flex flex-col select-none items-center justify-center"
            initial={{ opacity: 0.0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <div className="flex items-center justify-center flex-col lg:flex-row space-y-3 lg:space-y-0 w-2/3 xl:w-2/5">
                <div className="lg:w-1/2 bg-blue-700 text-white p-3 lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg lg:rounded-none grid">
                    <div className="flex items-center space-x-6 justify-self-end">
                        <Slot label="days">{days}</Slot>
                        <Slot label="hours">{hours}</Slot>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-red-700 text-white p-3 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-none rounded-lg grid">
                    <div className="flex items-center space-x-6 justify-self-start">
                        <Slot label="mins">{minutes}</Slot>
                        <Slot label="secs">{seconds}</Slot>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
