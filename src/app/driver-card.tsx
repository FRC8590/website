"use client";
import { BackgroundGradient } from "@/components/background-gradient";
import Check from "@/utils/check";

export default function DriverCard() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-1/2">
                <BackgroundGradient
                    className="rounded-[22px] w-full bg-white dark:bg-zinc-950"
                    colorCycle={3}
                    blurClass="blur-xl"
                >
                    <div className="p-8 dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] flex flex-col space-y-3 w-full rounded-[22px] border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mx-auto group">
                        <header className="text-xl font-light">Driver</header>
                        <p className="text-5xl font-bold">
                            <span className="font-normal text-xl text-zinc-200 select-none">
                                $
                            </span>
                            20,000
                        </p>
                        <ul>
                            <Check>Name the robot</Check>
                            <Check>Team gifts and merchandise</Check>
                            <Check>Large signed photo of the team</Check>
                        </ul>
                        <button className="text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b from-rose-500 to-rose-900 text-white hover:shadow-xl transition duration-200">
                            More Information
                        </button>
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
}
