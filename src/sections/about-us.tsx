"use client";
import Image from "next/image";
import Article from "../utils/article";
import Br from "@/utils/br";
import { useModal } from "@/components/animated-modal";
import { BsEnvelopeHeartFill } from "react-icons/bs";

export default function AboutUs() {
    const modal = useModal();
    return (
        <div className="flex flex-col space-y-6">
            <Article
                image={
                    <Image
                        src="/pictures/team.jpg"
                        width={500}
                        height={500}
                        alt="Our Team"
                        className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all w-full"
                    />
                }
                title="Our Team"
            >
                We allow students to develop STEM capabilities, as well as
                allowing them to try out and experience different fields of
                STEM, and presenting them with competitions that they can help
                contribute, and participate in, along with assisting them in
                getting real-world experience.
                <Br />
                <div>
                    <button
                        onClick={() => modal.setOpen(true)}
                        className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] outline-none"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3845ff_0%,#ff4252_50%,#3845ff_100%)]"></span>
                        <div className="inline-flex space-x-1 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-3 py-1 text-base md:text-lg font-extrabold text-white backdrop-blur-3xl">
                            <BsEnvelopeHeartFill />
                            <p>Newsletter</p>
                        </div>
                    </button>
                </div>
            </Article>
            <Article
                image={
                    <Image
                        src="/pictures/mission.jpg"
                        width={500}
                        height={500}
                        alt="Our Mission"
                        className="grayscale rounded-tl-lg rounded-bl-lg hover:grayscale-0 transition-all w-full"
                    />
                }
                title="Our Mission"
                flip
            >
                Our mission as a student-run FRC team is to create a welcoming
                and encouraging environment that enables STEM students to
                improve their skills in robotics and the engineering process. As
                a student-run team, we have extra responsibilities, as we take
                it upon ourselves to educate new members and ensure they succeed
                when they eventually pursue STEM in the future.
                <Br />
                We encourage our students to make connections and support them
                to make sure everyone&apos;s voices are heard in the club.
                Lastly, our goal is to succeed, as we can reach more people
                through our achievements and help more students in the future.
                Together, these things drive our determination and help to make
                our team environment the best it can be.
            </Article>
        </div>
    );
}
