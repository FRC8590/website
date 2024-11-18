"use client";
import {
    ModalBody,
    ModalFooter,
    ModalContent,
    useModal,
} from "@/components/animated-modal";
import { useEffect, useState } from "react";

export default function Newsletter() {
    const modal = useModal();
    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem("newsletter") == null) {
                modal.setOpen(true);
            }
        }, 10000);
    }, []);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <ModalBody>
            <ModalContent>
                <h4 className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-100 font-bold text-center mb-4">
                    Subscribe to our newsletter!
                </h4>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-zinc-200 text-sm pb-4 w-2/3">
                        The team newsletter keeps parents and supporters
                        up-to-date with the latest developments in our
                        team&apos;s journey. It highlights upcoming
                        competitions, showcases recent achievements, and
                        provides insights into the team&apos;s design process
                        and technical challenges. With updates on robot
                        prototypes, fundraising efforts, and team events, the
                        newsletter is a great way for the community to stay
                        engaged and cheer on the team&apos;s progress throughout
                        the season.
                    </p>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <form
                            className="flex space-x-3 items-center justify-center"
                            onSubmit={async e => {
                                e.preventDefault();
                                setLoading(true);
                                const res = await fetch("/api/subscribe", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        email,
                                    }),
                                });
                                const json = await res.json();
                                setLoading(false);
                                if (!res.ok) {
                                    setError(json.message);
                                } else {
                                    // Success!
                                    localStorage.setItem("newsletter", "yes");
                                    modal.setOpen(false);
                                }
                            }}
                        >
                            <input
                                className="w-full p-4 bg-zinc-950 rounded-lg focus:outline-none text-white placeholder:text-zinc-500"
                                placeholder="your@email.com"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <button
                                disabled={loading}
                                type="submit"
                                className="disabled:animate-pulse hover:opacity-50 font-bold bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 hover:shadow-xl transition duration-200 p-4 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="text-rose-500">{error}</p>
                    </div>
                </div>
            </ModalContent>
            <ModalFooter className="gap-4">
                <button
                    onClick={() => {
                        modal.setOpen(false);
                        localStorage.setItem("newsletter", "no");
                    }}
                    className="px-2 py-1 bg-zinc-200 text-black dark:bg-black dark:border-black dark:text-white border border-zinc-300 rounded-md text-sm w-40"
                >
                    Don&apos;t Show Again
                </button>
            </ModalFooter>
        </ModalBody>
    );
}
