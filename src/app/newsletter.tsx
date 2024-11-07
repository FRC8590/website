"use client";
import {
    ModalBody,
    ModalFooter,
    ModalContent,
    useModal,
} from "@/components/animated-modal";
import { useEffect } from "react";

export default function Newsletter() {
    const modal = useModal();
    useEffect(() => {
        setTimeout(() => {
            modal.setOpen(true);
        }, 10000);
    }, []);
    return (
        <ModalBody>
            <ModalContent>
                <h4 className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-100 font-bold text-center mb-8">
                    Subscribe to our newsletter!
                </h4>
                <div className="flex justify-center items-center"></div>
            </ModalContent>
            <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                    No Thanks
                </button>
            </ModalFooter>
        </ModalBody>
    );
}
