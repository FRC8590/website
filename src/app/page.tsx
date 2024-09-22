import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Spotlight } from "@/components/spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import React from "react";
import { Timeline } from "@/components/timeline";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/floating-navbar";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BackgroundLines } from "@/components/background-lines";
import { AuroraBackground } from "@/components/aurora-background";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Check(props: HasChildren) {
    return (
        <li className="font-medium flex items-center space-x-1">
            <FaCheckCircle />
            <p>{props.children}</p>
        </li>
    );
}

function Divider() {
    return (
        <div className="py-4 h-4 w-full">
            <hr className="w-full border-t border-zinc-700 dark:border-zinc-900" />
        </div>
    );
}

interface HasChildren {
    children: React.ReactNode;
}

function SectionHeader(props: HasChildren) {
    return (
        <header className="text-4xl font-semibold text-black dark:text-white">
            {props.children}
        </header>
    );
}

function Small(props: HasChildren) {
    return (
        <p className="text-zinc-400 dark:text-zinc-700 text-xl font-light italic">
            {props.children}
        </p>
    );
}

function Opposites(props: HasChildren) {
    return (
        <div className="flex items-center justify-between w-full py-2">
            {props.children}
        </div>
    );
}

function Article(props: {
    text: string;
    title: string;
    image: React.ReactNode;
    flip?: boolean;
}) {
    return (
        <GridBackground flip={props.flip}>
            <div className={`flex ${props.flip ? "flex-row-reverse" : ""}`}>
                <div className="flex flex-col p-8 space-y-3">
                    <header className="text-3xl font-semibold">
                        {props.title}
                    </header>
                    <TextGenerateEffect words={props.text} />
                </div>
                {props.image}
            </div>
        </GridBackground>
    );
}

function SponsorCard(props: HasChildren & { title: string; amount: string }) {
    return (
        <div className="dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] flex flex-col space-y-3 w-full p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mx-auto group">
            <header className="text-xl font-light">{props.title}</header>
            <p className="text-5xl font-bold">
                <span className="font-normal text-xl text-zinc-200 select-none">
                    $
                </span>
                {props.amount}
            </p>
            <ul>{props.children}</ul>
            <button className="text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b from-rose-500 to-rose-900 text-white hover:shadow-xl transition duration-200">
                More Information
            </button>
        </div>
    );
}

function Button(props: HasChildren) {
    return (
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            {props.children}
        </button>
    );
}

function TeamTimeline() {
    const data = [
        {
            title: "2024",
            content: (
                <Article
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua."
                    image={
                        <Image
                            src="/years/crescendo.jpg"
                            width={500}
                            height={500}
                            alt="Crescendo"
                            className="grayscale rounded-tr-lg rounded-br-lg"
                        />
                    }
                    title="Crescendo"
                />
            ),
        },
        {
            title: "2023",
            content: (
                <Article
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua."
                    image={
                        <Image
                            src="/banner.JPG"
                            width={500}
                            height={500}
                            alt="Charged Up"
                            className="grayscale rounded-tr-lg rounded-br-lg"
                        />
                    }
                    title="Charged Up"
                />
            ),
        },
        {
            title: "2022",
            content: (
                <Article
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua."
                    image={
                        <Image
                            src="/years/rapid_react.jpg"
                            width={500}
                            height={500}
                            alt="Rapid React"
                            className="grayscale rounded-tr-lg rounded-br-lg"
                        />
                    }
                    title="Rapid React"
                />
            ),
        },
        {
            title: "2021",
            content: (
                <Article
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua."
                    image={
                        <Image
                            src="/years/infinite_recharge.jpg"
                            width={500}
                            height={500}
                            alt="Infinite Recharge"
                            className="grayscale rounded-tr-lg rounded-br-lg"
                        />
                    }
                    title="Infinite Recharge"
                />
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

function FloatingNavbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: (
                <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "About",
            link: "/about",
            icon: (
                <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}

function GridBackground(props: HasChildren & { flip?: boolean }) {
    return (
        <div className="dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] w-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            {props.children}
        </div>
    );
}

export default function Home() {
    return (
        <>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-36 pt-16 dark:text-white">
                <section>
                    <Spotlight />
                    <Opposites>
                        <Image
                            src="/logos/cavbotics.png"
                            width={225}
                            height={225}
                            alt="CAVBOTICS Logo"
                            className="invert dark:invert-0"
                        />
                        <div>
                            <Image
                                src="/logos/frc.png"
                                width={325}
                                height={200}
                                alt="FIRST Robotics Competition Logo"
                                className="dark:hidden"
                            />
                            <Image
                                src="/logos/frc_dark.png"
                                width={325}
                                height={200}
                                alt="FIRST Robotics Competition Logo"
                                className="hidden dark:block"
                            />
                        </div>
                    </Opposites>{" "}
                    <h1 className="py-12 relative text-8xl font-bold">
                        Woodson Robotics
                    </h1>
                    <BackgroundBeams />
                </section>
                <Divider />
                <section className="flex items-center justify-center flex-col space-y-3">
                    <SectionHeader>As Trusted By</SectionHeader>
                    <div className="grid auto-rows-fr grid-cols-3 gap-4">
                        <Image
                            src="/sponsors/colonial-pipeline-co.svg"
                            width={200}
                            height={200}
                            alt="Colonial Pipeline Co."
                            className="grayscale"
                        />
                        <Image
                            src="/sponsors/colonial-pipeline-co.svg"
                            width={200}
                            height={200}
                            alt="Colonial Pipeline Co."
                            className="grayscale"
                        />
                        <Image
                            src="/sponsors/colonial-pipeline-co.svg"
                            width={200}
                            height={200}
                            alt="Colonial Pipeline Co."
                            className="grayscale"
                        />
                    </div>
                </section>
                <Divider />
                <section className="w-full">
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
                <section className="w-full">
                    <Opposites>
                        <SectionHeader>Previous Years</SectionHeader>
                        <Small>Smaller text for filler</Small>
                    </Opposites>
                    <TeamTimeline />
                </section>
                <Divider />
                <section className="w-full">
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
                <BackgroundBeamsWithCollision>
                    <section className="w-full pb-4">
                        <Opposites>
                            <SectionHeader>
                                Professional Sponsor Tiers
                            </SectionHeader>
                            <Small>Smaller text for filler</Small>
                        </Opposites>
                        <div className="grid auto-rows-fr grid-cols-4 gap-4">
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
                <footer className="w-full border-t border-black dark:border-zinc-900 px-48">
                    <Opposites>
                        <div className="flex flex-col">
                            <div className="grid grid-flow-row grid-cols-2 place-items-center gap-12 py-4">
                                <Image
                                    src="/logos/cavbotics.png"
                                    width={200}
                                    height={100}
                                    alt="CAVBOTICS Logo"
                                    className="invert dark:invert-0"
                                />
                                <div>
                                    <Image
                                        src="/logos/first.png"
                                        width={325}
                                        height={200}
                                        alt="FIRST Robotics Competition Logo"
                                        className="dark:hidden"
                                    />
                                    <Image
                                        src="/logos/first_dark.png"
                                        width={325}
                                        height={200}
                                        alt="FIRST Robotics Competition Logo"
                                        className="hidden dark:block"
                                    />
                                </div>
                            </div>
                            <p>Copyright Shenanigans. All Rights Reserved</p>
                        </div>
                        <div className="text-white z-20 text-xl font-light">
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
