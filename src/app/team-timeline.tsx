import Article from "./article";
import Image from "next/image";
import { Timeline } from "@/components/timeline";

export default function TeamTimeline() {
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
                            src="/years/charged_up.jpg"
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
