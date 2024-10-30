"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    let interval: NodeJS.Timeout | null = null;

    let kickoffDate = new Date("2025-01-06T12:00:00");
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
            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <p className="font-medium text-sm lg:text-xl text-center py-1">
                FRC KICKOFF
            </p>
            <div className="flex items-center justify-center flex-col lg:flex-row space-y-3 lg:space-y-0 w-2/3">
                <div className="w-1/2 bg-blue-700 text-white p-3 lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg lg:rounded-none">
                    <div className="flex items-center space-x-12">
                        <div className="flex items-center space-x-1">
                            <p className="text-xl md:text-3xl font-extrabold">
                                {days}
                            </p>
                            <p className="font-light md:text-xl">days</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <p className="text-xl md:text-3xl font-extrabold">
                                {hours}
                            </p>
                            <p className="font-light md:text-xl">hours</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-red-700 text-white p-3 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-none rounded-lg flex items-center space-x-12">
                    <div className="flex items-center space-x-1">
                        <p className="text-xl md:text-3xl font-extrabold">
                            {minutes}
                        </p>
                        <p className="font-light md:text-xl">minutes</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <p className="text-xl md:text-3xl font-extrabold">
                            {seconds}
                        </p>
                        <p className="font-light md:text-xl">seconds</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
