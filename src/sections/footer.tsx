import { AuroraBackground } from "@/components/aurora-background";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import Image from "next/image";
import Opposites from "@/utils/opposites";

export default function Footer() {
    return (
        <AuroraBackground>
            <footer
                className="w-full border-t border-black dark:border-zinc-900 px-12 xl:px-24 2xl:px-48"
                id="contact"
            >
                <Opposites>
                    <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 place-items-center gap-6 lg:gap-12 py-4">
                        <Image
                            src="/logos/cavbotics.png"
                            width={200}
                            height={100}
                            alt="CAVBOTICS Logo"
                            className="invert dark:invert-0 select-none"
                        />
                        <div>
                            <Image
                                src="/logos/first.png"
                                width={325}
                                height={200}
                                alt="FIRST Robotics Competition Logo"
                                className="dark:hidden select-none"
                            />
                            <Image
                                src="/logos/first_dark.png"
                                width={325}
                                height={200}
                                alt="FIRST Robotics Competition Logo"
                                className="hidden dark:block select-none"
                            />
                        </div>
                    </div>
                    <div className="text-white z-20 text-lg lg:text-xl font-medium">
                        <a
                            href="https://www.instagram.com/cgwrobotics"
                            className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                        >
                            <RiInstagramFill className="h-7 w-7" />
                            <p className="font-extrabold">Instagram</p>
                        </a>
                        <a
                            href="mailto:cgwrobotics@gmail.com"
                            className="flex items-center space-x-1 hover:text-zinc-400 transition-all"
                        >
                            <IoIosMail className="h-7 w-7" />
                            <p className="font-extrabold">
                                cgwrobotics@gmail.com
                            </p>
                        </a>
                        <div className="flex items-center space-x-1">
                            <FaAddressBook className="h-7 w-7" />
                            <p className="font-extrabold">
                                9525 Main St, Fairfax, VA 22031
                            </p>
                        </div>
                    </div>
                </Opposites>
            </footer>
        </AuroraBackground>
    );
}
