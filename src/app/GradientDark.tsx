import { GradientProps } from "./Gradient";

export default function GradientDark({ children, className }: GradientProps) {
    return (
        <span
            className={`bg-gradient-to-t from-zinc-500 to-black inline-block text-transparent bg-clip-text ${className} font-bold dark:from-zinc-400 dark:to-zinc-50`}
        >
            {children}
        </span>
    );
}
