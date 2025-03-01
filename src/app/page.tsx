import React from "react";

import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Modal } from "@/components/animated-modal";
import SectionHeader from "@/utils/section-header";

import FloatingNavbar from "../sections/floating-navbar";
import Title from "../sections/title/title";
import TeamTimeline from "../sections/team-timeline";
import SponsorList from "../sections/sponsors/sponsor-list";
import Newsletter from "../sections/newsletter";
import AboutUs from "../sections/about-us";
import SponsorTiers from "../sections/sponsors/sponsor-tiers";
import SupportUs from "@/sections/support-us";
import Footer from "@/sections/footer";

export default function Home() {
    return (
        <Modal>
            <Newsletter></Newsletter>
            <FloatingNavbar />
            <main className="flex flex-col items-center justify-center w-full px-8 xl:px-12 2xl:px-28 pt-16 dark:text-white min-w-72 overflow-x-hidden">
                <div className="py-8 lg:py-32">
                    <section>
                        <Title />
                    </section>
                    <section>
                        <SponsorList />
                    </section>
                </div>
                <section className="w-full" id="about">
                    <SectionHeader>Who are we?</SectionHeader>
                    <AboutUs />
                </section>
                <section className="w-full py-8" id="years">
                    <SectionHeader>Previous Years</SectionHeader>
                    <TeamTimeline />
                </section>
                <BackgroundBeamsWithCollision className="flex-col">
                    <section className="w-full -z-20 py-8" id="donate">
                        <SectionHeader>Support Us!</SectionHeader>
                        <SupportUs />
                    </section>
                    <section className="w-full pb-4 pt-8" id="sponsorships">
                        <SectionHeader>
                            Professional Sponsor Tiers
                        </SectionHeader>
                        <SponsorTiers />
                    </section>
                </BackgroundBeamsWithCollision>
            </main>
            <Footer />
        </Modal>
    );
}
