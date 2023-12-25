import { useRef } from "react";

export default function StepButton({ incStep }: { incStep: () => void }) {
    let ref: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);
    return (
        <button
            ref={ref}
            className="dark:border-zinc-900 dark:bg-zinc-950 dark:hover:bg-zinc-800 border-zinc-200 dark:disabled:border-emerald-400 dark:disabled:text-emerald-300 dark:disabled:bg-emerald-900 disabled:border-emerald-400 disabled:text-emerald-500 border rounded-full p-2 font-bold hover:bg-zinc-100 transition-all disabled:bg-emerald-100 flex items-center justify-center space-x-1 group"
            onClick={() => {
                ref.current!.disabled = true;
                incStep();
            }}
        >
            <p className="group-disabled:hidden font-normal text-zinc-500">
                Next Step
            </p>
            <p className="hidden group-disabled:inline-block font-normal">
                Completed
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hidden group-disabled:block text-emerald-500 dark:group-disabled:text-emerald-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
        </button>
    );
}
