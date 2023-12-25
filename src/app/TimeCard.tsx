import GradientDark from "./GradientDark";

export default function TimeCard({
    value,
    label,
    timerDone,
}: {
    value: number;
    label: string;
    timerDone: boolean;
}) {
    return (
        <div
            className={`flex flex-col items-center justify-center border dark:border-zinc-800 border-zinc-100 rounded-lg p-2 drop-shadow-md hover:cursor-default select-none ${
                timerDone ? "animate-pulse" : ""
            }`}
        >
            <p className={`text-5xl ${timerDone ? "animate-bounce" : ""}`}>
                <GradientDark>{value}</GradientDark>
            </p>{" "}
            <p className="text-zinc-500 font-bold dark:text-zinc-400">
                {label}
            </p>
        </div>
    );
}
