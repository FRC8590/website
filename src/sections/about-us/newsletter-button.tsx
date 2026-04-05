"use client";
import { useModal } from "@/components/animated-modal";
import { NoiseBackground } from "@/components/noise-background";
import { BsEnvelopeHeartFill } from "react-icons/bs";

export default function NewsletterButton() {
    const modal = useModal();
    return (
        <NoiseBackground
            containerClassName="w-fit p-2 rounded-full mx-auto"
            gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
            ]}
        >
            <button
                className="flex h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-2 py-1 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
                onClick={() => modal.setOpen(true)}
            >
                <div className="bg-zinc-900 px-4 py-2 rounded-full font-extrabold text-lg inline-flex space-x-1 h-full w-full cursor-pointer items-center justify-center bg-opacity-75 backdrop-blur-md">
                    <BsEnvelopeHeartFill />
                    <p>Newsletter</p>
                </div>
            </button>
        </NoiseBackground>
    );
}
