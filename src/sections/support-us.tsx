import Br from "@/utils/br";
import Image from "next/image";
import { PinContainer } from "@/components/3d-pin";

const DONATE_URL =
    "https://educatefairfax.app.neoncrm.com/forms/woodson-robotics";

export default function SupportUs() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer title="Donate!" href={DONATE_URL}>
                <div className="flex items-center justify-center w-full basis-full flex-col p-4 tracking-tight text-zinc-100/50 sm:basis-1/2 h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-100">
                        Donate Now!
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal w-full">
                        <div className="flex flex-row overflow-y-auto w-full">
                            <p className="p-8">
                                Consider donating to help provide STEM
                                opportunities to all students at Woodson. By
                                donating, you help foster student&apos;s
                                passions by enabling our team to purchase the
                                necessary materials, tools, and resources for
                                building our robot. <Br />
                                Join us by empowering the next generation of
                                innovators and leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
