import Article from "@/utils/article";
import Br from "@/utils/br";
import Image from "next/image";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

export function DonateButton() {
    return (
        <div className="flex items-center justify-center">
            <a target="_blank" href={DONATE_URL} className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg" />
                <div className="text-3xl font-light px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Donate Now!
                </div>
            </a>
        </div>
    );
}

export default function SupportUs() {
    return (
        <Article
            image={
                <Image
                    src="/pictures/why-donate.jpg"
                    width={500}
                    height={500}
                    alt="Why Donate?"
                    className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all w-full"
                />
            }
            title="Why Donate?"
            extra={<DonateButton />}
        >
            Consider donating to help provide STEM opportunities to all students
            at Woodson. By donating, you help foster student&apos;s passions by
            enabling our team to purchase the necessary materials, tools, and
            resources for building our robot. <Br />
            Join us by empowering the next generation of innovators and leaders.
        </Article>
    );
}
