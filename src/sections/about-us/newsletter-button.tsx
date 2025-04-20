"use client";
import { useModal } from "@/components/animated-modal";
import { BsEnvelopeHeartFill } from "react-icons/bs";

export default function NewsletterButton() {
    const modal = useModal();
    return (
        <div>
            <button
                onClick={() => modal.setOpen(true)}
                className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] outline-none"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3845ff_0%,#ff4252_50%,#3845ff_100%)]"></span>
                <div className="inline-flex space-x-1 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-3 py-1 text-base md:text-lg font-extrabold text-white backdrop-blur-3xl">
                    <BsEnvelopeHeartFill />
                    <p>Newsletter</p>
                </div>
            </button>
        </div>
    );
}
