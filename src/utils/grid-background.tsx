import { Meteors } from "@/components/meteor";
import type { HasChildren } from "@/utils/types";

export default function GridBackground(props: HasChildren) {
    return (
        <>
            <div className="relative overflow-hidden">
                <Meteors number={10} />{" "}
                <div className="dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] w-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-zinc-950 bg-zinc-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                    {props.children}
                </div>
            </div>
        </>
    );
}
