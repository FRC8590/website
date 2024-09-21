import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Spotlight } from "@/components/spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import React from "react";
import { Timeline } from "@/components/timeline";

function Divider() {
    return (
        <div className="py-4 h-4 w-full">
            <hr className="w-full border-t border-zinc-700" />
        </div>
    );
}

interface HasChildren {
    children: React.ReactNode;
}

function SectionHeader(props: HasChildren) {
    return <header className="text-4xl font-semibold">{props.children}</header>;
}

function Small(props: HasChildren) {
    return <p className="text-zinc-400 text-xl font-light">{props.children}</p>;
}

function Opposites(props: HasChildren) {
    return (
        <div className="flex items-center justify-between w-full py-2">
            {props.children}
        </div>
    );
}

function Article(props: HasChildren & { title: string }) {
    return (
        <div className="flex flex-col space-y-3 bg-zinc-100 rounded-lg p-4 w-2/3">
            <header className="text-2xl font-semibold">{props.title}</header>
            <p>{props.children}</p>
        </div>
    );
}

function SponsorCard(props: HasChildren & { title: string; amount: string }) {
    return (
        <div className="rounded-lg bg-zinc-100 p-4 flex flex-col space-y-3">
            <header className="text-lg font-light">{props.title}</header>
            <p className="text-4xl font-bold">
                <span className="font-normal text-2xl">$</span>
                {props.amount}
            </p>
            <ul>{props.children}</ul>
        </div>
    );
}

function Button(props: HasChildren) {
    return (
        <button className="rounded-lg bg-zinc-100 p-2 text-xl font-bold">
            {props.children}
        </button>
    );
}

function TeamTimeline() {
    const data = [
        {
            title: "2024",
            content: (
                <Image
                    src="/banner.JPG"
                    width={200}
                    height={200}
                    alt="FIRST Logo"
                />
            ),
        },
        {
            title: "2023",
            content: (
                <Image
                    src="/banner.JPG"
                    width={200}
                    height={200}
                    alt="FIRST Logo"
                />
            ),
        },
        {
            title: "2022",
            content: (
                <Image
                    src="/banner.JPG"
                    width={200}
                    height={200}
                    alt="FIRST Logo"
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

export default function Home() {
    return (
        <>
            <nav className="p-12">Navbar</nav>
            <main className="flex flex-col items-center justify-center w-full px-36">
                <section>
                    <div className="flex items-center justify-between">
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="CAVBOTICS Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                    </div>
                    <h1 className="text-8xl">Woodson Robotics</h1>
                </section>
                <Divider />
                <section className="flex items-center justify-center flex-col space-y-3">
                    <SectionHeader>As Trusted By</SectionHeader>
                    <div className="grid auto-rows-fr grid-cols-3 gap-4">
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                        <Image
                            src="/banner.JPG"
                            width={200}
                            height={200}
                            alt="FIRST Logo"
                        />
                    </div>
                </section>
                <Divider />
                <section className="w-full">
                    <Opposites>
                        <SectionHeader>Some Slogan</SectionHeader>
                        <Small>Smaller text for filler</Small>
                    </Opposites>
                    <div className="flex flex-col space-y-6">
                        <Opposites>
                            <Article title="Our Team">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Article>
                            <Image
                                src="/banner.JPG"
                                width={500}
                                height={500}
                                alt="FIRST Logo"
                            />
                        </Opposites>
                        <Opposites>
                            <Image
                                src="/banner.JPG"
                                width={500}
                                height={500}
                                alt="FIRST Logo"
                            />
                            <Article title="Our Mission">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Article>
                        </Opposites>
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
                    <Opposites>
                        <div className="flex flex-col space-y-3">
                            <Article title="Why Donate?">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Article>
                            <div>
                                <Button>Donate!</Button>
                            </div>
                        </div>
                        <Image
                            src="/banner.JPG"
                            width={500}
                            height={500}
                            alt="FIRST Logo"
                        />
                    </Opposites>
                </section>
                <Divider />
                <section className="w-full">
                    <Opposites>
                        <SectionHeader>
                            Professional Sponsor Tiers
                        </SectionHeader>
                        <Small>Smaller text for filler</Small>
                    </Opposites>
                    <div className="grid auto-rows-fr grid-cols-4 gap-4">
                        <SponsorCard title="Wheel" amount="5,000">
                            <li>Feature</li>
                            <li>Feature</li>
                            <li>Feature</li>
                        </SponsorCard>
                        <SponsorCard title="Battery" amount="10,000">
                            <li>Feature</li>
                            <li>Feature</li>
                            <li>Feature</li>
                        </SponsorCard>
                        <SponsorCard title="Motor" amount="15,000">
                            <li>Feature</li>
                            <li>Feature</li>
                            <li>Feature</li>
                        </SponsorCard>
                        <SponsorCard title="Motherboard" amount="20,000">
                            <li>Feature</li>
                            <li>Feature</li>
                            <li>Feature</li>
                        </SponsorCard>
                    </div>
                    <div className="flex items-center justify-center space-x-3 py-4">
                        <Small>Some stupid question?</Small>
                        <Button>Download Packet</Button>
                    </div>
                </section>
            </main>{" "}
            <footer className="w-full border-t border-black px-48">
                <Opposites>
                    <div className="flex flex-col">
                        <div className="flex space-x-12">
                            <Image
                                src="/banner.JPG"
                                width={200}
                                height={200}
                                alt="FIRST Logo"
                            />
                            <Image
                                src="/banner.JPG"
                                width={200}
                                height={200}
                                alt="FIRST Logo"
                            />
                        </div>
                        <p>Copyright Shenanigans. All Rights Reserved</p>
                    </div>
                    <div>
                        <p>Instagram</p>
                        <p>Email</p>
                        <p>Address</p>
                    </div>
                </Opposites>
            </footer>
        </>
    );
}
