import type { HasChildren } from "./types";

export default function SectionHeader(props: HasChildren) {
    return (
        <header className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
            {props.children}
        </header>
    );
}
