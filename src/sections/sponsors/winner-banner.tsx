import Image from "next/image";
export default function WinnerBanner(props: { event: string }) {
    return (
        <div className="w-1/4 hover:bg-blue-600 transition-all rounded-md bg-blue-700 flex items-center justify-between flex-col py-8 space-y-10 z-40 select-none">
            <Image
                src="/logos/frc_vertical_white.png"
                width={200}
                height={200}
                alt="FIRST Robotics Competition"
            />
            <p className="font-extrabold text-4xl py-4">WINNER</p>
            <div className="text-center font-extrabold text-xl">
                <p className="pb-4">2025</p>
                <div className="flex items-center justify-center space-x-1">
                    <Image
                        src="/logos/first_word_white.png"
                        width={55}
                        height={55}
                        alt="FIRST"
                    />
                    <p>CHESAPEAKE</p>
                </div>
                <p>
                    DISTRICT
                    <br /> {props.event.toUpperCase()}
                </p>
            </div>
        </div>
    );
}
