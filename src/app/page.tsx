import React from "react";

import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Modal } from "@/components/animated-modal";
import SectionHeader from "@/utils/section-header";

import FloatingNavbar from "../sections/floating-navbar";
import Title from "../sections/title/title";
import TeamTimeline from "../sections/team-timeline";
import SponsorList from "../sections/sponsors/sponsor-list";
import Newsletter from "../sections/newsletter";
import AboutUs from "../sections/about-us/about-us";
import SponsorTiers from "../sections/sponsors/sponsor-tiers";
import SupportUs from "@/sections/support-us";
import Footer from "@/sections/footer";

export default function Home() {
    return (
        <Modal>
            <Newsletter></Newsletter>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-6 xl:px-12 2xl:px-28 pt-16 dark:text-white min-w-[23rem] overflow-x-hidden">
                <div className="py-16">
                    <section>
                        <Title />
                    </section>
                    <section>
                        <SponsorList />
                    </section>
                </div>
                <section className="w-full" id="about">
                    <SectionHeader text="Who are we?" />
                    <AboutUs />
                </section>
                <section className="w-full py-8" id="years">
                    <SectionHeader text="Previous Years" />
                    <TeamTimeline />
                </section>
                <BackgroundBeamsWithCollision className="flex-col">
                    <section className="w-full py-8" id="donate">
                        <SectionHeader text="Support Us!" />
                        <SupportUs />
                    </section>
                    <section className="w-full pb-4 pt-8" id="sponsorships">
                        <SectionHeader text="Professional Sponsor Tiers" />
                        <SponsorTiers />
                    </section>
                </BackgroundBeamsWithCollision>
            </main>
            <Footer />
        </Modal>
    );
}
