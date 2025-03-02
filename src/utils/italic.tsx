import { HasChildren } from "./types";

export default function Italic(props: HasChildren) {
    return <span className="italic">{props.children}</span>;
}
