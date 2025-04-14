import Image from "next/image";

export default function FRCLogo() {
    return (
        <div>
            <Image
                src="/logos/frc.png"
                width={325}
                height={200}
                alt="FIRST Robotics Competition Logo"
                className="dark:hidden select-none"
            />
            <Image
                src="/logos/frc_dark.png"
                width={325}
                height={200}
                alt="FIRST Robotics Competition Logo"
                className="hidden dark:block select-none"
            />
        </div>
    );
}
