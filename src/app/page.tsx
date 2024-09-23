// Functionality
import Image from "next/image";
import React from "react";

// UI
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Spotlight } from "@/components/spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import { AuroraBackground } from "@/components/aurora-background";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";

// Utilities
import Divider from "@/utils/divider";
import Opposites from "@/utils/opposites";
import SectionHeader from "@/utils/section-header";
import Check from "@/utils/check";
import Small from "@/utils/small";

// Components

import FloatingNavbar from "./floating-navbar";
import Title from "./title";
import SponsorCard from "./sponsor-card";
import Article from "./article";
import TeamTimeline from "./team-timeline";
import SponsorList from "./sponsor-list";

export default function Home() {
    return (
        <>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-2 xl:px-36 pt-16 dark:text-white min-w-72 overflow-x-auto">
                <section className="lg:pt-24">
                    <Spotlight />
                    <Title />
                    <BackgroundBeams />
                </section>
                <Divider />
                <section className="flex items-center justify-center flex-col space-y-3">
                    <header className="font-medium text-zinc-100 text-lg">
                        As Trusted By
                    </header>
                    <SponsorList />
                </section>
                <Divider />
                <section className="w-full" id="about">
                    <Opposites>
                        <SectionHeader>Who are we?</SectionHeader>
                        <Small>Smaller text for filler</Small>
                    </Opposites>
                    <div className="flex flex-col space-y-6">
                        <Article
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                            image={
                                <Image
                                    src="/pictures/team.jpg"
                                    width={500}
                                    height={500}
                                    alt="Our Team"
                                    className="grayscale rounded-tr-lg rounded-br-lg"
                                />
                            }
                            title="Our Team"
                        />
                        <Article
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                            image={
                                <Image
                                    src="/pictures/mission.jpg"
                                    width={500}
                                    height={500}
                                    alt="Our Mission"
                                    className="grayscale rounded-tl-lg rounded-bl-lg"
                                />
                            }
                            title="Our Mission"
                            flip
                        />
                    </div>
                </section>
                <Divider />
                <section className="w-full" id="years">
                    <Opposites>
                        <SectionHeader>Previous Years</SectionHeader>
                        <Small>Smaller text for filler</Small>
                    </Opposites>
                    <TeamTimeline />
                </section>
                <Divider />
                <BackgroundBeamsWithCollision className="flex-col">
                    <section className="w-full -z-20" id="donate">
                        <Opposites>
                            <SectionHeader>Support Us!</SectionHeader>
                            <Small>Smaller text for filler</Small>
                        </Opposites>
                        <Article
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                            image={
                                <Image
                                    src="/pictures/why-donate.jpg"
                                    width={500}
                                    height={500}
                                    alt="Why Donate?"
                                    className="grayscale rounded-tr-lg rounded-br-lg"
                                />
                            }
                            title="Why Donate?"
                        />
                    </section>
                    <Divider />
                    <section className="w-full pb-4" id="sponsorships">
                        <Opposites>
                            <SectionHeader>
                                Professional Sponsor Tiers
                            </SectionHeader>
                            <Small>Smaller text for filler</Small>
                        </Opposites>
                        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SponsorCard title="Wheel" amount="5,000">
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                            </SponsorCard>
                            <SponsorCard title="Battery" amount="10,000">
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                            </SponsorCard>
                            <SponsorCard title="Motor" amount="15,000">
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                            </SponsorCard>
                            <SponsorCard title="Motherboard" amount="20,000">
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                                <Check>Feature</Check>
                            </SponsorCard>
                        </div>
                    </section>
                </BackgroundBeamsWithCollision>
            </main>{" "}
            <AuroraBackground>
                <footer
                    className="w-full border-t border-black dark:border-zinc-900 px-12 xl:px-48"
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
                                href="https://instagram.com"
                                className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                            >
                                <RiInstagramFill className="h-7 w-7" />
                                <p>Instagram</p>
                            </a>
                            <a
                                href="mailto:wtwcsr@gmail.com"
                                className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                            >
                                <IoIosMail className="h-7 w-7" />
                                <p>wtwcsr@gmail.com</p>
                            </a>
                            <div className="flex items-center space-x-1">
                                <FaAddressBook className="h-7 w-7" />
                                <p>9525 Main St, Fairfax, VA 22031</p>
                            </div>
                        </div>
                    </Opposites>
                </footer>
            </AuroraBackground>
        </>
    );
}
