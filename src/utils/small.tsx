import type { HasChildren } from "./types";

export default function Small(props: HasChildren) {
    return (
        <p className="text-zinc-400 dark:text-zinc-700 text-lg lg:text-xl font-light italic">
            {props.children}
        </p>
    );
}
