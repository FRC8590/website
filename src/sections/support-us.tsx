import Br from "@/utils/br";
import Image from "next/image";
import { PinContainer } from "@/components/3d-pin";
import GridBackground from "@/utils/grid-background";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

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
