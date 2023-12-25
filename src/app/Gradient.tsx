export interface GradientProps {
    children: React.ReactNode;
    className?: string;
}

export default function Gradient({ children, className }: GradientProps) {
    return (
        <span
            className={`bg-gradient-to-r from-rose-400 to-rose-600 inline-block text-transparent bg-clip-text ${className} font-bold dark:from-rose-600 dark:to-rose-800`}
        >
            {children}
        </span>
    );
}
