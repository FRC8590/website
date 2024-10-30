import Article from "./article";
import Image from "next/image";
import { Timeline } from "@/components/timeline";

export default function TeamTimeline() {
    const data = [
        {
            title: "2024",
            content: (
                <Article
                    text="In Crescendo, teams would shoot or insert foam hoops into deposits on the sides of the arena to score points.
                    At the end of the game, teams would try to hang onto metal chains to score extra points.
                    In this event, our team competed at two qualifying events and won the Innovation in Control award."
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
                />
            ),
        },
        {
            title: "2023",
            content: (
                <Article
                    text="In Charged Up, teams compete to put cones and cubes on designated nodes to score points.
                    Teams can also score points by balancing their robots on the platform. At the end of the game, teams balance
                    all of their robots to score extra points. At this event, our team
                    competed in two qualifying events."
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
                />
            ),
        },
        {
            title: "2022",
            content: (
                <Article
                    text="In Rapid React, teams competed against each other to score points by shooting cargo into the center hoop.
                    At the end of the game, teams climb onto metal rungs to score more points. This game's theme was based on sustainable
                    energy development and presented by Haas. In this event, our team made it to 4 events, winning 6 awards, including the
                    Rookie Inspiration award and the championship division's highest rookie seed award."
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
