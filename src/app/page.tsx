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
import { Modal } from "@/components/animated-modal";

// Utilities
import Opposites from "@/utils/opposites";
import SectionHeader from "@/utils/section-header";
import Check from "@/utils/check";

// Components

import FloatingNavbar from "./floating-navbar";
import Title from "./title";
import SponsorCard from "./sponsor-card";
import Article from "./article";
import TeamTimeline from "./team-timeline";
import SponsorList from "./sponsor-list";
import DriverCard from "./driver-card";
import Countdown from "./countdown";

export default function Home() {
    return (
        <Modal>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-2 2xl:px-28 pt-16 dark:text-white min-w-72 overflow-x-auto">
                <section className="lg:pt-12 xl:pt-24">
                    <Spotlight />
                    <Title />
                    <Countdown />
                    <BackgroundBeams />
                </section>
                <section className="flex items-center justify-center flex-col space-y-3 py-8">
                    <SponsorList />
                </section>
                <section className="w-full" id="about">
                    <SectionHeader>Who are we?</SectionHeader>
                    <div className="flex flex-col space-y-6">
                        <Article
                            text="We are C.G. Woodson's Robotics team.
                            We allow students to develop STEM capabilities, as well as allowing them to try out
                            and experience different fields of STEM, and presenting them with competitions that they can help contribute,
                            and participate in, along with assisting them in getting real-world experience."
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
                        />
                        <Article
                            text="Our mission as a student-run FRC team is to create a welcoming and encouraging
                            environment that enables STEM students to improve their skills in robotics and the engineering process. 
                            As a student-run team, we have extra responsibilities, as we take it upon ourselves to educate new members 
                            and ensure they succeed when they eventually pursue STEM in the future. We encourage our students to make 
                            connections and support them to make sure everyone's voices are heard in the club. Lastly, our goal is to succeed,
                            as we can reach more people through our achievements and help more students in the future. Together, these things drive our
                            determination and help to make our team environment the best it can be."
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
                        />
                    </div>
                </section>
                <section className="w-full py-8" id="years">
                    <SectionHeader>Previous Years</SectionHeader>
                    <TeamTimeline />
                </section>
                <BackgroundBeamsWithCollision className="flex-col">
                    <section className="w-full -z-20 py-8" id="donate">
                        <SectionHeader>Support Us!</SectionHeader>

                        <Article
                            text="Consider donating to help provide STEM opportunities to all students at Woodson.
                            By donating, you help foster student's passions by enabling our team to purchase the necessary materials,
                            tools, and resources for building our robot. Join us by empowering the next generation of innovators and leaders."
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
                        />
                    </section>
                    <section className="w-full pb-4 pt-8" id="sponsorships">
                        <SectionHeader>
                            Professional Sponsor Tiers
                        </SectionHeader>
                        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SponsorCard title="Wheel" amount="2,500">
                                <Check>Thank you note!</Check>
                                <Check>Social media mention</Check>
                                <Check>Logo on this website</Check>
                            </SponsorCard>
                            <SponsorCard title="Battery" amount="7,500">
                                <Check>
                                    Framed team photo with thank you sign
                                </Check>
                                <Check>Highlight on social media</Check>
                                <Check>Small logo on robot</Check>
                            </SponsorCard>
                            <SponsorCard title="Motor" amount="10,000">
                                <Check>Medium Banner with team pictures</Check>
                                <Check>Name and logo in videos</Check>
                                <Check>Medium-sized logo on the robot</Check>
                            </SponsorCard>
                            <SponsorCard title="Motherboard" amount="15,000">
                                <Check>Large banner with team pictures</Check>
                                <Check>Extensive social media coverage</Check>
                                <Check>Large logo on robot</Check>
                            </SponsorCard>
                        </div>
                        <div className="lg:p-12">
                            <DriverCard />
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
        </Modal>
    );
}
