"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

type NavItem = {
    name: string;
    link: string;
    icon?: JSX.Element;
};

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: NavItem[];
    className?: string;
}) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    delay: 1.5,
                }}
                className={cn(
                    "flex min-w-fit w-1/2 fixed top-4 inset-x-0 mx-auto rounded-lg dark:bg-zinc-700 dark:bg-opacity-25 dark:backdrop-blur-md bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-4  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: NavItem, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "transition-all relative dark:text-zinc-50 items-center flex space-x-1 text-zinc-600 hover:opacity-80"
                        )}
                    >
                        <span className="block">{navItem.icon}</span>
                        <span className="hidden sm:block font-medium text-zinc-100">
                            {navItem.name}
                        </span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
