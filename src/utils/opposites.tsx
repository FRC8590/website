import type { HasChildren } from "./types";

export default function Opposites(props: HasChildren) {
    return (
        <div className="flex items-center justify-between w-full py-2 flex-col lg:flex-row">
            {props.children}
        </div>
    );
}
