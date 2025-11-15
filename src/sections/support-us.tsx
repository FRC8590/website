import Article from "@/utils/article";
import Br from "@/utils/br";
import Image from "next/image";
import { PinContainer } from "@/components/3d-pin";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

export default function SupportUs() {
    return (
        <PinContainer title="Donate Now!" href={DONATE_URL}>
            <div className="text-lg flex flex-col tracking-tight h-full dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] w-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-zinc-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                <div className="flex xl:flex-row flex-col">
                    <p className="p-8">
                        Consider donating to help provide STEM opportunities to
                        all students at Woodson. By donating, you help foster
                        student&apos;s passions by enabling our team to purchase
                        the necessary materials, tools, and resources for
                        building our robot. <Br />
                        Join us by empowering the next generation of innovators
                        and leaders.
                    </p>
                    <Image
                        src="/pictures/why-donate.jpg"
                        width={500}
                        height={500}
                        alt="Why Donate?"
                        className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all w-full"
                    />
                </div>
            </div>
        </PinContainer>
    );
}
