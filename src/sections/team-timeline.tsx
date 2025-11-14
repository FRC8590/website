import Article from "../utils/article";
import Image from "next/image";
import Italic from "@/utils/italic";
import Br from "@/utils/br";
import { Timeline } from "@/components/timeline";

export default function TeamTimeline() {
    const data = [
        {
            title: "2025",
            content: (
                <Article
                    image={
                        <Image
                            src="/years/reefscape.jpg"
                            width={500}
                            height={500}
                            alt="Reefscape"
                            className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all"
                        />
                    }
                    title="Reefscape"
                >
                    In <Italic>Reefscape</Italic>, our robots launched short PVC
                    pipes onto reef structures and cleared large game pieces
                    from the field to earn points. During endgame, teams raced
                    to hang on elevated cages for crucial bonus points.
                    <Br /> That year, our team earned two awards, won a regional
                    event, and won the district championship against the top
                    teams in the DMV, securing our place at the World
                    Championship.
                </Article>
            ),
        },
        {
            title: "2024",
            content: (
                <Article
                    image={
                        <Image
                            src="/years/crescendo.jpg"
                            width={500}
                            height={500}
                            alt="Crescendo"
                            className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all"
                        />
                    }
                    title="Crescendo"
                >
                    In <Italic>Crescendo</Italic>, teams would shoot or insert
                    foam hoops into deposits on the sides of the arena to score
                    points. At the end of the game, teams would try to hang onto
                    metal chains to score extra points. <Br />
                    In this event, our team competed at two qualifying events
                    and won the <Italic>Innovation in Control</Italic> award.
                </Article>
            ),
        },
        {
            title: "2023",
            content: (
                <Article
                    image={
                        <Image
                            src="/years/charged_up.jpg"
                            width={500}
                            height={500}
                            alt="Charged Up"
                            className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all"
                        />
                    }
                    title="Charged Up"
                >
                    In <Italic>Charged Up</Italic>, teams competed to put cones
                    and cubes on designated nodes to score points. Teams could
                    also score points by balancing their robots on the platform.
                    At the end of the game, teams balance all of their robots to
                    score extra points. <Br />
                    At this event, our team competed in two qualifying events.
                </Article>
            ),
        },
        {
            title: "2022",
            content: (
                <Article
                    image={
                        <Image
                            src="/years/rapid_react.jpg"
                            width={500}
                            height={500}
                            alt="Rapid React"
                            className="grayscale rounded-tr-lg rounded-br-lg hover:grayscale-0 transition-all"
                        />
                    }
                    title="Rapid React"
                >
                    In <Italic>Rapid React</Italic>, teams competed against each
                    other to score points by shooting cargo into the center
                    hoop. At the end of the game, teams would climb onto metal
                    rungs to score more points. <Br />
                    In this event, our team made it to 4 events, winning 6
                    awards, including the <Italic>
                        Rookie Inspiration
                    </Italic>{" "}
                    award and the championship division&apos;s highest rookie
                    seed award.
                </Article>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
