import Image from "next/image";
import {
    ModalBody,
    ModalFooter,
    ModalContent,
    useModal,
    ModalProvider,
} from "@/components/animated-modal";
import React from "react";
import { HasChildren } from "@/utils/types";
interface WinnerBannerProps {
    event: string;
}

export function WinInformation(props: WinnerBannerProps & HasChildren) {
    const modal = useModal();
    return (
        <ModalBody>
            <ModalContent>
                <h4 className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-100 font-bold text-center mb-4">
                    Event Win!
                </h4>
                <div className="">{props.children}</div>
            </ModalContent>
            <ModalFooter className="gap-4">
                <button
                    onClick={() => {
                        modal.setOpen(false);
                    }}
                    className="px-2 py-1 bg-zinc-200 text-black dark:bg-black dark:border-black dark:text-white border border-zinc-300 rounded-md text-sm w-40"
                >
                    Don&apos;t Show Again
                </button>
            </ModalFooter>
        </ModalBody>
    );
}

function WinnerBannerBody(props: WinnerBannerProps & HasChildren) {
    const modal = useModal();
    return (
        <>
            <WinInformation {...props} />
            <button
                onClick={() => modal.setOpen(true)}
                className="w-fit hover:bg-blue-600 transition-all rounded-md bg-blue-700 flex items-center justify-between flex-col p-2 space-y-1 z-40 select-none"
            >
                <Image
                    src="/logos/frc_vertical_white.png"
                    width={80}
                    height={80}
                    alt="FIRST Robotics Competition"
                />
                <p className="font-extrabold text-base py-4">WINNER</p>
                <div className="text-center font-extrabold text-xs">
                    <p className="pb-4">2025</p>
                    <div className="flex items-center justify-center space-x-1">
                        <Image
                            src="/logos/first_word_white.png"
                            width={35}
                            height={35}
                            alt="FIRST"
                        />
                        <p>CHESAPEAKE</p>
                    </div>
                    <p>
                        DISTRICT
                        <br /> {props.event.toUpperCase()}
                    </p>
                </div>
            </button>
        </>
    );
}

export default function WinnerBanner(props: WinnerBannerProps & HasChildren) {
    return (
        <ModalProvider>
            <WinnerBannerBody {...props} />
        </ModalProvider>
    );
}
