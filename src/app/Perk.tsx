export default function Perk({ perk, color }: { perk: string; color: string }) {
    return (
        <>
            <li className="flex items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${color}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
                <p className="text-slate-700 dark:text-slate-100">{perk}</p>
            </li>
        </>
    );
}
