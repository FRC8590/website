import SponsorCard, { DriverCard } from "./sponsor-card";
import Check from "@/utils/check";

export default function SponsorTiers() {
    return (
        <>
            <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                <SponsorCard title="Wheel" amount="2,500">
                    <Check>Thank you note!</Check>
                    <Check>Social media mention</Check>
                    <Check>Logo on this website</Check>
                </SponsorCard>
                <SponsorCard title="Battery" amount="7,500">
                    <Check>Framed team photo with thank you sign</Check>
                    <Check>Highlight on social media</Check>
                    <Check>Small logo on robot</Check>
                </SponsorCard>
                <SponsorCard title="Motor" amount="10,000">
                    <Check>Medium banner with team pictures</Check>
                    <Check>Name and logo in videos</Check>
                    <Check>Medium-sized logo on the robot</Check>
                </SponsorCard>
                <SponsorCard title="Motherboard" amount="15,000">
                    <Check>Large banner with team pictures</Check>
                    <Check>Extensive social media coverage</Check>
                    <Check>Large logo on robot</Check>
                </SponsorCard>
            </div>
            <div className="lg:p-12">
                <DriverCard />
            </div>
        </>
    );
}
