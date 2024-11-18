import { saveAs } from "file-saver";

export default function SponsorButton() {
    return (
        <button
            onClick={() => {
                saveAs(
                    "/sponsors.pdf",
                    "Woodson Cavbotics Sponsorship Packet.pdf"
                );
            }}
            className="hover:opacity-50 text-lg px-8 py-1 font-semibold rounded-lg bg-gradient-to-b from-rose-500 to-rose-900 text-white hover:shadow-xl transition duration-200"
        >
            More Information
        </button>
    );
}
