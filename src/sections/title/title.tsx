"use client";
import Image from "next/image";
import { Countdown } from "@/components/countdown"
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";
import FRCLogo from "./frc-logo";
import WinnerBanner from "./winner-banner";
import Br from "@/utils/br";
import AnimatedTooltip from "@/components/animated-tooltip";
import Italic from "@/utils/italic";

interface TeamProps {
    number: number;
    name: string;
    link: string;
}

function Team(props: TeamProps) {
    return (
        <AnimatedTooltip name={props.name}>
            <a
                className="hover:opacity-75 transition-all font-bold text-blue relative inline-block px-1 rounded-lg bg-gradient-to-r dark:from-blue-500 dark:to-blue-700"
                href={props.link}
                target="_blank"
            >
                Team {props.number}
            </a>
        </AnimatedTooltip>
    );
}

function ChampionshipWin() {
    return (
        <WinnerBanner event="championship">
            <p className="inline">
                At the district championship, we were met with unfavorable
                matchups and placed 46th out of 54 teams prior to alliance
                picks. Despite this unfortunate placement, we had one of the
                strongest individual performances, allowing for an opportunity
                at being picked during alliance selection. <Br />
                Only appearing as the final pick of the very last picking round,
                it was uncertain whether we would make it to the playoffs.
            </p>{" "}
            <p className="inline">
                However, due to the excellent work of our scouting and outreach teams, we were selected as the final alliance partner
                of Alliance 1 alongside{" "}
            </p>
            <Team
                number={422}
                name={"The Mech Tech Dragons"}
                link="https://mechtechrobotics.com/"
            />
            <p className="inline"> and</p>{" "}
            <Team
                number={449}
                name={"The Blair Robot Project"}
                link="https://robot.mbhs.edu/"
            />
            .{" "}
            <p className="inline">
                Showing off an excellent performance by scoring over one-third
                of our team&apos;s coral in most rounds, we achieved victory
                with a final score of 203 to 174 in our final match, securing
                our spot at the world championship.
            </p>
            <Image
                src="/pictures/district-win.jpg"
                width={1000}
                height={500}
                alt="Team 8590 photo."
                className="rounded-md py-2"
            />
        </WinnerBanner>
    );
}

function BethesdaWin() {
    return (
        <WinnerBanner event="bethesda md event">
            <p className="inline">
                At our second event in Bethesda, we were a part of the 3rd
                alliance, being the first pick of{" "}
            </p>
            <Team
                number={1731}
                name="Fresta Valley Robotics Club"
                link="https://www.team1731.org/"
            />
            <p className="inline">. Together with them and </p>
            <Team
                number={2867}
                name="ElkLogics"
                link="https://frc-events.firstinspires.org/team/2867"
            />
            <p className="inline">
                , our team emerged victorious, placing 1st with a score of 128
                to 121 in our final match. In addition to our win, we were
                honored with the <Italic>Engineering Quality</Italic> award.
                <Br />
                Ranking 12th overall in district qualifying points, we were
                guaranteed our spot at the district championship! This was our
                first time winning a district qualifying event in the history of
                our team, and our first time qualifying for districts.{" "}
            </p>{" "}
            <div className="flex items-center justify-center">
                <Image
                    src="/pictures/bethesda-win.jpg"
                    width={350}
                    height={250}
                    alt="Team 8590 photo."
                    className="rounded-md py-2"
                />
            </div>
        </WinnerBanner>
    );
}

export default function Title() {
    return (
        <div className="w-full overflow-hidden">
            <Spotlight />
            <BackgroundLines>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className="w-screen flex items-center justify-center flex-col"
                >
                    <div className="hidden lg:flex flex-row items-center w-5/6 justify-between">
                        <BethesdaWin />
                        <Image
                            src="/logos/cavbotics.png"
                            width={225}
                            height={225}
                            alt="CAVBOTICS Logo"
                            className="invert dark:invert-0 select-none"
                        />

                        <FRCLogo />
                        <ChampionshipWin />
                    </div>
                    <div className="flex flex-col space-y-3 lg:hidden items-center justify-center">
                        <div className="flex space-x-3 items-center justify-center">
                            <BethesdaWin />
                            <ChampionshipWin />
                        </div>
                        <div className="flex space-y-3 flex-col md:flex-row md:space-x-3 items-center justify-center">
                            <Image
                                src="/logos/cavbotics.png"
                                width={225}
                                height={225}
                                alt="CAVBOTICS Logo"
                                className="invert dark:invert-0 select-none"
                            />

                            <FRCLogo />
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className="py-8 lg:py-12 text-7xl xl:text-9xl font-bold text-center relative z-20 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-600 [text-shadow:0_0_rgba(0,0,0,0.1)] break-words">
                            Woodson Robotics
                        </h1>
                    </div>
                </motion.div>
                <Countdown />
            </BackgroundLines>{" "}
        </div>
    );
}
