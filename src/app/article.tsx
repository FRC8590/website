import GridBackground from "./grid-background";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function Article(props: {
    text: string;
    title: string;
    image: React.ReactNode;
    flip?: boolean;
}) {
    return (
        <GridBackground>
            <div
                className={`flex xl:flex-row flex-col ${
                    props.flip ? "xl:flex-row-reverse" : ""
                }`}
            >
                <div className="flex flex-col p-8 space-y-3">
                    <header className="text-2xl lg:text-3xl font-semibold">
                        {props.title}
                    </header>
                    <TextGenerateEffect words={props.text} />
                </div>
                {props.image}
            </div>
        </GridBackground>
    );
}
