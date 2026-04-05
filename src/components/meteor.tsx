import { cn } from "@/utils/cn";
import React from "react";

function seededRandom(seed: number) {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
}

export const Meteors = ({
    number,
    className,
}: {
    number?: number;
    className?: string;
}) => {
    const meteors = new Array(number || 20).fill(true);
    return (
        <>
            {meteors.map((el, idx) => {
                const r1 = seededRandom(idx);
                const r2 = seededRandom(idx + 100);
                const r3 = seededRandom(idx + 200);

                return (
                    <span
                        key={"meteor" + idx}
                        className={cn(
                            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-red-700 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-red-500 before:to-transparent",
                            className,
                        )}
                        style={{
                            top: 0,
                            left: Math.floor(r1 * 800 - 400) + "px",
                            animationDelay: (r2 * 0.6 + 0.2).toFixed(6) + "s",
                            animationDuration: Math.floor(r3 * 8 + 2) + "s",
                        }}
                    ></span>
                );
            })}
        </>
    );
};
