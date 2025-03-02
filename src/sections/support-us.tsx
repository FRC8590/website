import Article from "@/utils/article";
import Br from "@/utils/br";
import Image from "next/image";

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
        >
            Consider donating to help provide STEM opportunities to all students
            at Woodson. By donating, you help foster student&apos;s passions by
            enabling our team to purchase the necessary materials, tools, and
            resources for building our robot. <Br />
            Join us by empowering the next generation of innovators and leaders.
        </Article>
    );
}
