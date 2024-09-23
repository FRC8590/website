import type { HasChildren } from "./types";
import { FaCheckCircle } from "react-icons/fa";

export default function Check(props: HasChildren) {
    return (
        <li className="font-medium flex items-center space-x-1">
            <FaCheckCircle />
            <p>{props.children}</p>
        </li>
    );
}
