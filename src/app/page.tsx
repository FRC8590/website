// Functionality
import Image from "next/image";
import React from "react";

// UI
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { AuroraBackground } from "@/components/aurora-background";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { Modal } from "@/components/animated-modal";

// Utilities
import Opposites from "@/utils/opposites";
import SectionHeader from "@/utils/section-header";
import Br from "@/utils/br";

// Components
import FloatingNavbar from "./floating-navbar";
import Title from "./title";
import Article from "./article";
import TeamTimeline from "./team-timeline";
import SponsorList from "./sponsor-list";
import Newsletter from "./newsletter";
import AboutUs from "./about-us";
import SponsorTiers from "./sponsor-tiers";

export default function Home() {
    return (
        <Modal>
            <Newsletter></Newsletter>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-2 xl:px-12 2xl:px-28 pt-16 dark:text-white min-w-72 overflow-x-hidden">
                <div className="py-32">
                    <section>
                        <Title />
                    </section>
                    <section className="flex items-center justify-center flex-col space-y-3 py-8">
                        <SponsorList />
                    </section>
                </div>
                <section className="w-full" id="about">
                    <SectionHeader>Who are we?</SectionHeader>
                    <AboutUs />
                </section>
                <section className="w-full py-8" id="years">
                    <SectionHeader>Previous Years</SectionHeader>
                    <TeamTimeline />
                </section>
                <BackgroundBeamsWithCollision className="flex-col">
                    <section className="w-full -z-20 py-8" id="donate">
                        <SectionHeader>Support Us!</SectionHeader>

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
                            Consider donating to help provide STEM opportunities
                            to all students at Woodson. By donating, you help
                            foster student's passions by enabling our team to
                            purchase the necessary materials, tools, and
                            resources for building our robot. <Br />
                            Join us by empowering the next generation of
                            innovators and leaders.
                        </Article>
                    </section>
                    <section className="w-full pb-4 pt-8" id="sponsorships">
                        <SectionHeader>
                            Professional Sponsor Tiers
                        </SectionHeader>
                        <SponsorTiers />
                    </section>
                </BackgroundBeamsWithCollision>
            </main>{" "}
            <AuroraBackground>
                <footer
                    className="w-full border-t border-black dark:border-zinc-900 px-12 xl:px-24 2xl:px-48"
                    id="contact"
                >
                    <Opposites>
                        <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 place-items-center gap-6 lg:gap-12 py-4">
                            <Image
                                src="/logos/cavbotics.png"
                                width={200}
                                height={100}
                                alt="CAVBOTICS Logo"
                                className="invert dark:invert-0 select-none"
                            />
                            <div>
                                <Image
                                    src="/logos/first.png"
                                    width={325}
                                    height={200}
                                    alt="FIRST Robotics Competition Logo"
                                    className="dark:hidden select-none"
                                />
                                <Image
                                    src="/logos/first_dark.png"
                                    width={325}
                                    height={200}
                                    alt="FIRST Robotics Competition Logo"
                                    className="hidden dark:block select-none"
                                />
                            </div>
                        </div>
                        <div className="text-white z-20 text-lg lg:text-xl font-medium">
                            <a
                                href="https://www.instagram.com/cgwrobotics"
                                className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                            >
                                <RiInstagramFill className="h-7 w-7" />
                                <p>Instagram</p>
                            </a>
                            <a
                                href="mailto:cgwrobotics@gmail.com"
                                className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                            >
                                <IoIosMail className="h-7 w-7" />
                                <p>cgwrobotics@gmail.com</p>
                            </a>
                            <div className="flex items-center space-x-1">
                                <FaAddressBook className="h-7 w-7" />
                                <p>9525 Main St, Fairfax, VA 22031</p>
                            </div>
                        </div>
                    </Opposites>
                </footer>
            </AuroraBackground>
        </Modal>
    );
}
