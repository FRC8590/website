import Br from "@/utils/br";
import Image from "next/image";
import GridBackground from "@/utils/grid-background";
import { NoiseBackground } from "@/components/noise-background";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

function SupportUsButton() {
    return (
        <NoiseBackground
            containerClassName="w-fit p-2 rounded-full mx-auto"
            gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
            ]}
        >
            <a
                href={DONATE_URL}
                className="flex h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-2 py-1 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
            >
                <div className="bg-zinc-900 px-4 py-2 rounded-full font-extrabold text-lg inline-flex space-x-1 h-full w-full cursor-pointer items-center justify-center bg-opacity-75 backdrop-blur-md">
                    <p>Donate Now!</p>
                </div>
            </a>
        </NoiseBackground>
    );
}

export default function SupportUs() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center">
            <GridBackground>
                <div className="text-base md:text-xl !m-0 !p-0 font-light w-full">
                    <div className="flex overflow-y-auto w-full">
                        <p className="p-8">
                            Consider donating to help provide STEM opportunities
                            to all students at Woodson. By donating, you help
                            foster student&apos;s passions by enabling our team
                            to purchase the necessary materials, tools, and
                            resources for building our robot. <Br />
                            <span className="font-medium text-lg md:text-3xl">
                                Join us by empowering the next generation of
                                innovators and leaders!
                            </span>
                        </p>
                        <SupportUsButton />
                    </div>
                    <div className="grid grid-rows-1 grid-cols-3 auto-rows-fr gap-6 p-4">
                        <div className="relative aspect-square">
                            <Image
                                src="/pictures/why-donate-1.jpg"
                                fill
                                alt="Team Image"
                                className="rounded-xl grayscale hover:grayscale-0 object-cover transition-all"
                            />
                        </div>
                        <div className="relative aspect-square">
                            <Image
                                src="/pictures/why-donate-2.jpg"
                                fill
                                alt="Team Image"
                                className="rounded-xl grayscale hover:grayscale-0 object-cover transition-all"
                            />
                        </div>
                        <div className="relative aspect-square">
                            <Image
                                src="/pictures/why-donate-3.jpg"
                                fill
                                alt="Team Image"
                                className="rounded-xl grayscale hover:grayscale-0 object-cover transition-all"
                            />
                        </div>
                    </div>
                </div>
            </GridBackground>
        </div>
    );
}
