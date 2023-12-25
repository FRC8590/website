"use client";
import Image from "next/image";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { saveAs } from "file-saver";
import Confetti from "react-confetti";
import Divider from "./Divider";
import Gradient from "./Gradient";
import GradientDark from "./GradientDark";
import Perk from "./Perk";
import TimeCard from "./TimeCard";
import StepButton from "./StepButton";
import Carousel from "./Carousel";

export default function Home() {
    const [voices, setVoices] = useState([] as SpeechSynthesisVoice[]);
    const [voiceSupported, setVoiceSupported] = useState(true);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [shouldShowTimerConfetti, setShouldShowTimerConfetti] =
        useState(false);
    const [lockConfetti, setLockConfetti] = useState(false);

    const [showTimerConfetti, setShowTimerConfetti] = useState(false);
    const [isTimerDone, setIsTimerDone] = useState(false);

    let kickoffDate = new Date("2024-01-06T12:00:00");
    let interval: NodeJS.Timeout | null = null;

    const updateTime = () => {
        const currentDate = new Date();
        const diff = kickoffDate.getTime() - currentDate.getTime();

        if (diff <= 0 && interval) {
            setIsTimerDone(true);
            setShouldShowTimerConfetti(true);
            clearInterval(interval);
            return;
        }

        const seconds = diff / 1000;
        setDays(Math.floor(seconds / 3600 / 24));
        setHours(Math.floor(seconds / 3600) % 24);
        setMinutes(Math.floor(seconds / 60) % 60);
        setSeconds(Math.floor(seconds % 60));
    };
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        interval = setInterval(() => {
            updateTime();
        }, 1000);
        updateTime();
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && shouldShowTimerConfetti)
                    setShowTimerConfetti(true);
            });
        });
        observer.observe(document.getElementById("countdown")!);

        window.speechSynthesis.addEventListener("voiceschanged", () => {
            setVoices(window.speechSynthesis.getVoices());
            if (voices.length != 0) setVoiceSupported(true);
        });

        if (localStorage.theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    });

    useEffect(() => {
        if (localStorage.theme) setTheme(localStorage.theme);
    }, [theme]);

    const playAudio = () => {
        if (voices.length == 0) {
            return setVoiceSupported(false);
        }
        var msg = new SpeechSynthesisUtterance();
        msg.text = "First Robotics Competition";
        window.speechSynthesis.speak(msg);
    };

    const saveFile = () => {
        saveAs("/sponsors.pdf", "sponsorship_information.pdf");
    };

    const dialogRef: MutableRefObject<HTMLDialogElement | null> = useRef(null);
    let [stepIndex, setStepIndex] = useState(1);
    const incStep = () => setStepIndex(stepIndex + 1);
    const [donationDone, setDonationDone] = useState(false);

    return (
        <>
            <dialog
                ref={dialogRef}
                aria-modal="true"
                className="p-4 border-zinc-100 bg-white rounded-lg w-5/6 md:w-2/3 dark:bg-zinc-900 dark:border-zinc-800 border dark:text-white"
            >
                <div className="flex justify-between w-full items-center">
                    <header className="text-2xl lg:text-4xl">
                        <GradientDark>Donation</GradientDark>
                        <p className="text-lg hidden md:block">
                            All donations are fully tax-deductible.
                        </p>
                    </header>
                    <button
                        className="hover:opacity-50 transition-all"
                        onClick={() => {
                            dialogRef.current!.close();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="md:w-12 md:h-12 w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <Divider />
                {!donationDone && (
                    <div className="grid grid-cols-1 auto-rows-fr text-xl gap-3">
                        <div className="flex items-center justify-center space-y-3 flex-col md:flex-row md:space-x-3 md:space-y-0">
                            <p className="text-center">
                                Get a <Gradient>check</Gradient> ready.
                            </p>
                            <StepButton incStep={incStep} />
                        </div>
                        {stepIndex > 1 && (
                            <div className="flex space-x-3 items-center justify-center flex-col md:flex-row md:space-x-3 md:space-y-0">
                                <p className="text-center">
                                    Write{" "}
                                    <Gradient>Woodson High School FRC</Gradient>{" "}
                                    in the memo.
                                </p>
                                <StepButton incStep={incStep} />
                            </div>
                        )}
                        {stepIndex > 2 && (
                            <div className="flex space-x-3 items-center justify-center flex-col md:flex-row md:space-x-3 md:space-y-0">
                                <p className="text-center">
                                    Mail the check to{" "}
                                    <Gradient>
                                        9525 Main St, Fairfax, VA 22031
                                    </Gradient>
                                </p>
                                <button
                                    className="rounded-full p-2 border border-rose-300 text-rose-500 hover:bg-rose-200 transition-all dark:border-rose-500 dark:text-rose-500 dark:hover:bg-rose-600 dark:hover:text-white"
                                    onClick={() => {
                                        setDonationDone(true);
                                    }}
                                >
                                    Finish
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {donationDone && (
                    <div className="flex items-center justify-center flex-col space-y-3 text-xl overflow-y-hidden overflow-x-hidden">
                        <Confetti recycle={false} className="w-full h-full" />
                        <Image
                            src="/logo.png"
                            height={300}
                            width={300}
                            alt="Cavbotics Logo"
                            className="invert dark:invert-0"
                        />
                        <p className="text-center">Thank you for donating!</p>
                    </div>
                )}
                <Divider />
                <p className="text-sm md:text-lg">
                    For recurring donations, material donations, or any other
                    inquiries, please reach out to us at{" "}
                    <a
                        href="mailto:frc@wtwcsr.org"
                        className="underline hover:text-rose-400 transition-colors text-rose-500 font-bold"
                    >
                        frc@wtwcsr.org
                    </a>
                    .
                </p>
            </dialog>
            <nav className="dark:bg-zinc-950">
                <div className="flex justify-between p-4 items-center flex-col md:flex-row space-y-2 md:space-y-0">
                    <Image
                        src="/logo.png"
                        height={150}
                        width={150}
                        alt="Cavbotics Logo"
                        className="invert dark:invert-0"
                    />
                    <div className="flex md:space-x-12 items-center md:flex-row flex-col space-y-3 md:space-y-0">
                        <div className="items-center rounded-full p-1 border-zinc-100 border dark:border-zinc-900 space-x-1">
                            <button
                                className={`p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all ${
                                    theme === "light"
                                        ? "bg-zinc-200 dark:bg-zinc-800"
                                        : ""
                                }`}
                                onClick={() => {
                                    document.body.classList.remove("dark");
                                    localStorage.theme = "light";
                                    setTheme("light");
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-slate-700 dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    />
                                </svg>
                            </button>

                            <button
                                className={`p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all ${
                                    theme === "dark"
                                        ? "bg-zinc-200 dark:bg-zinc-800"
                                        : ""
                                }`}
                                onClick={() => {
                                    document.body.classList.add("dark");
                                    localStorage.theme = "dark";
                                    setTheme("dark");
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-slate-700 dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex space-x-3">
                            <a
                                className="rounded-lg border-zinc-100 border p-2 flex hover:border-rose-500 hover:bg-rose-500 group transition-all"
                                href="#frc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 text-slate-700 group-hover:text-white transition-all dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                    />
                                </svg>
                            </a>
                            <a
                                className="rounded-lg border-zinc-100 border p-2 flex hover:border-rose-500 hover:bg-rose-500 group transition-all"
                                href="#team"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 text-slate-700 group-hover:text-white transition-all dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                className="rounded-lg border-zinc-100 border p-2 flex hover:border-rose-500 hover:bg-rose-500 group transition-all"
                                href="#support"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 text-slate-700 group-hover:text-white transition-all dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                className="rounded-lg border-zinc-100 border p-2 flex hover:border-rose-500 hover:bg-rose-500 group transition-all"
                                href="#contact"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 text-slate-700 group-hover:text-white transition-all dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <Divider />
            </nav>
            <main className="dark:bg-zinc-950">
                <div className="flex min-h-screen items-center justify-center space-y-16 flex-col dark:bg-zinc-950">
                    {isTimerDone && (
                        <div className="flex space-x-2 items-center justify-center text-sm">
                            <span className="text-rose-500 bg-rose-100 dark:text-rose-300 dark:bg-rose-900 font-bold p-2 rounded-full">
                                Event
                            </span>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                FRC has started!
                            </p>
                            <a
                                href="#frc"
                                role="button"
                                className="dark:border-zinc-800 dark:text-zinc-400 border-zinc-200 border rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-600 transition-all dark:hover:bg-zinc-900"
                            >
                                Read about it
                            </a>
                        </div>
                    )}
                    <div className="flex items-center flex-col justify-center space-y-6 p-4 md:p-0">
                        <div className="flex items-center flex-col space-y-3 border-dotted border-4 border-zinc-100 dark:border-zinc-800 p-4 rounded">
                            <h1 className="font-bold text-4xl md:text-5xl lg:text-8xl drop-shadow-sm text-slate-700 dark:text-slate-100 text-center">
                                Woodson <Gradient>Robotics</Gradient>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-zinc-600 text-center dark:text-zinc-300">
                                Providing Students with{" "}
                                <Gradient>Hands-On</Gradient> STEM Opportunities
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-3 font-semibold text-xl md:text-2xl xl:text-3xl">
                            <a
                                className="rounded-lg text-white bg-gradient-to-r dark:from-rose-600 dark:to-rose-800 from-rose-400 to-rose-600 p-3 drop-shadow-lg hover:opacity-70 transition-opacity duration-200 font-bold flex items-center justify-center"
                                href="#contact"
                                role="button"
                            >
                                <span>Contact Us</span>
                            </a>
                            <a
                                href="#frc"
                                className="border-zinc-200 border rounded-lg p-4 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-700 hover:bg-zinc-100 transition-all drop-shadow-sm"
                                role="button"
                            >
                                What is FRC?
                            </a>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 auto-rows-fr px-2 md:px-32">
                        <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg dark:border-zinc-800">
                            <div className="flex flex-col space-y-3">
                                <div className="flex justify-between">
                                    <header className="text-sm ">
                                        <span className="pointer-default select-none text-rose-500 bg-rose-100 dark:text-rose-300 dark:bg-rose-900 font-bold p-2 rounded-full">
                                            About Us
                                        </span>
                                    </header>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 dark:text-zinc-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                        />
                                    </svg>
                                </div>
                                <header className="text-3xl font-bold">
                                    <GradientDark>Who are we?</GradientDark>
                                </header>
                            </div>
                            <Divider />
                            <p className="text-slate-700 dark:text-slate-100">
                                Woodson Cavbotics provides students with unique
                                STEM opportunities to help them explore
                                different fields of STEM through competitions
                                and <Gradient>real world experience.</Gradient>
                            </p>
                        </div>

                        <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg dark:border-zinc-800">
                            <div className="flex flex-col space-y-3">
                                <div className="flex justify-between">
                                    <header className="text-sm">
                                        <span className="pointer-default select-none text-rose-600 bg-rose-100 dark:text-rose-300 dark:bg-rose-900 font-bold p-2 rounded-full">
                                            Our Mission
                                        </span>
                                    </header>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 dark:text-zinc-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.867 19.125h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                </div>
                                <header className="text-3xl font-bold">
                                    <GradientDark>
                                        Explore, Learn, and Compete
                                    </GradientDark>
                                </header>
                            </div>
                            <Divider />
                            <p className="text-slate-700 dark:text-slate-100">
                                Students work together in teams across various
                                competitions, learn from trained mentors, and
                                experience STEM at a level that will prepare
                                them for their{" "}
                                <Gradient>future careers.</Gradient>
                            </p>
                        </div>
                    </section>

                    <div
                        className="flex flex-col items-center justify-center space-y-2 pt-3"
                        id="countdown"
                    >
                        {!lockConfetti && showTimerConfetti && (
                            <Confetti
                                recycle={false}
                                onConfettiComplete={() => {
                                    setLockConfetti(true);
                                }}
                            />
                        )}
                        <Image
                            src="/first_dark.png"
                            alt="FIRST Logo (Dark)"
                            width={100}
                            height={100}
                            className="dark:hidden"
                        />

                        <Image
                            src="/first_white.png"
                            alt="FIRST Logo (Light)"
                            width={100}
                            height={100}
                            className="hidden dark:block"
                        />
                        <h3 className="text-xl">
                            <GradientDark>Time Until Kickoff</GradientDark>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-fr">
                            <TimeCard
                                value={days}
                                label={"days"}
                                timerDone={isTimerDone}
                            />
                            <TimeCard
                                value={hours}
                                label={"hours"}
                                timerDone={isTimerDone}
                            />
                            <TimeCard
                                value={minutes}
                                label={"minutes"}
                                timerDone={isTimerDone}
                            />
                            <TimeCard
                                value={seconds}
                                label={"seconds"}
                                timerDone={isTimerDone}
                            />
                        </div>
                    </div>

                    <section>
                        <div className="custom-shape-divider-bottom-1702071167">
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="shape-fill"
                                ></path>
                            </svg>
                        </div>

                        <div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 items-center justify-center p-6">
                            <h2 className="text-4xl p-4 text-center">
                                <GradientDark>Our Sponsors</GradientDark>
                                <Divider />
                            </h2>
                            <div className="flex flex-col space-y-6 items-center justify-center">
                                <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row space-x-3 items-center justify-center">
                                    <Image
                                        src="/synergy.svg"
                                        width={200}
                                        height={200}
                                        alt="Synergy"
                                    />
                                    <Image
                                        src="/afa.png"
                                        width={200}
                                        height={200}
                                        alt="Air & Space Forces Association"
                                    />
                                    <Image
                                        src="/acosta.webp"
                                        width={200}
                                        height={200}
                                        alt="Acousta Countracting Services, LLC."
                                    />
                                    <Image
                                        src="/ptso.png"
                                        width={100}
                                        height={100}
                                        alt="Woodson PTSO"
                                    />
                                    <Image
                                        src="/sigrev.jpeg"
                                        width={100}
                                        height={100}
                                        alt="Signature Renovations"
                                    />
                                </div>
                                <p className="text-sm font-bold flex space-y-3 lg:flex-row flex-col lg:space-y-0 lg:space-x-2 items-center justify-center">
                                    <GradientDark>
                                        Want your company logo here?
                                    </GradientDark>
                                    <a
                                        href="#support"
                                        role="button"
                                        className="dark:border-zinc-800 dark:text-zinc-400 border-zinc-200 bg-white border rounded-full p-2 dark:bg-zinc-950 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-600 transition-all dark:hover:bg-zinc-900 drop-shadow-md"
                                    >
                                        Sponsorships
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="custom-shape-divider-top-1702071760">
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="shape-fill"
                                ></path>
                            </svg>
                        </div>
                    </section>

                    <section
                        className="flex items-center justify-center flex-col"
                        id="frc"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-center">
                                <GradientDark>What is FRC?</GradientDark>
                            </h2>
                            <p className="text-center text-zinc-500 dark:text-zinc-300 p-2 md:p-0">
                                &quot;Combining the excitement of sport with the
                                rigors of science and technology&quot;
                            </p>
                            <Divider />
                        </div>

                        <div className="flex space-y-6 flex-col lg:flex-row lg:space-x-6 items-center justify-center p-4 lg:p-0">
                            <div className="lg:w-1/3 border-zinc-100 rounded-lg p-2 border-dashed border-2 dark:border-zinc-800">
                                {!voiceSupported && (
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-rose-400 dark:text-rose-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                            />
                                        </svg>

                                        <p className="text-sm font-bold text-rose-400 dark:text-rose-600">
                                            Your browser doesn&apos;t support
                                            text-to-speech!
                                        </p>
                                    </div>
                                )}
                                <div className="flex space-x-2 items-center">
                                    <header className="text-slate-700 font-bold text-2xl dark:text-slate-100">
                                        FIRST Robotics Competition{" "}
                                        <span className="text-zinc-500 bg-zinc-100 rounded-lg p-1 text-sm cursor-default dark:bg-zinc-900 dark:text-zinc-400">
                                            noun
                                        </span>
                                    </header>
                                    <button
                                        className="dark:bg-zinc-900 dark:hover:bg-blue-900 dark:disabled:bg-rose-900 bg-zinc-100 p-2 rounded-full hover:bg-blue-100 transition-all hover:scale-105 disabled:bg-rose-100 disabled:scale-100"
                                        onClick={playAudio}
                                        disabled={!voiceSupported}
                                    >
                                        {voiceSupported ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 dark:text-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <p className="text-zinc-500 text-lg dark:text-zinc-300">
                                    /fɜrst ˌroʊˈbɑtɪks ˌkɑmpəˈtɪʃən/
                                </p>
                                <p className="text-zinc-500 dark:text-zinc-200">
                                    An{" "}
                                    <Gradient>
                                        international robotics competition
                                    </Gradient>{" "}
                                    where a team of students works in
                                    conjunction with their mentors during the
                                    6-week build season to develop and build
                                    their robot to solve each year’s challenge.
                                    The process of building the robot includes
                                    designing, prototyping, programming, and
                                    even fabricating the materials.
                                </p>
                            </div>
                            <a
                                className="p-2 border-zinc-100 dark:border-zinc-800 rounded-lg border flex flex-col space-y-3 items-center justify-center hover:scale-105 transition-all hover:border-zinc-400"
                                href="https://www.firstinspires.org/robotics/frc"
                                target="_blank"
                            >
                                <Image
                                    src="/first.png"
                                    width={200}
                                    height={200}
                                    alt="FIRST Robotics Competition Logo"
                                />
                                <div className="w-full">
                                    <hr className="border-t border-zinc-100 dark:border-zinc-800" />
                                </div>
                                <div className="flex space-x-1">
                                    <header className="text-xl">
                                        <GradientDark>
                                            FIRST&apos;s Website
                                        </GradientDark>
                                    </header>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-zinc-900 dark:text-zinc-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </div>
                                <p className="text-zinc-500 text-sm dark:text-zinc-200">
                                    Contains everything you need to know about
                                    FRC, and much more.
                                </p>
                            </a>
                        </div>
                    </section>

                    <section id="team">
                        <div className="custom-shape-divider-bottom-1702164895">
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                    className="shape-fill"
                                ></path>
                            </svg>
                        </div>
                        <div className="bg-zinc-50 dark:bg-zinc-900 flex items-center flex-col justify-center">
                            <div className="w-1/3">
                                <div className="flex items-center flex-col justify-center">
                                    <h2 className="text-4xl text-center">
                                        <GradientDark>Our Team</GradientDark>
                                    </h2>
                                </div>
                                <div className="py-4">
                                    <hr className="border-t border-zinc-200 dark:border-zinc-800" />
                                </div>
                            </div>

                            <Carousel
                                images={[
                                    {
                                        url: "/team/robot.jpg",
                                        alt: "Robot in game",
                                    },
                                    {
                                        url: "/team/team.jpg",
                                        alt: "The team with the robot",
                                    },
                                    {
                                        url: "/team/game.jpg",
                                        alt: "Robot in game",
                                    },
                                    {
                                        url: "/team/competition.png",
                                        alt: "The team at a competition.",
                                    },
                                    {
                                        url: "/team/fixing.png",
                                        alt: "Fixing the robot.",
                                    },
                                    {
                                        url: "/team/more_award.png",
                                        alt: "The team showing off their awards.",
                                    },
                                    {
                                        url: "/team/moving.png",
                                        alt: "Moving the robot.",
                                    },
                                    {
                                        url: "/team/team_picture.png",
                                        alt: "The team picture.",
                                    },
                                    {
                                        url: "/team/testing.png",
                                        alt: "Testing the robot.",
                                    },
                                    {
                                        url: "/team/use.png",
                                        alt: "The robot in use.",
                                    },
                                    {
                                        url: "/team/walking.png",
                                        alt: "Walking to the competition",
                                    },
                                    {
                                        url: "/team/watching.png",
                                        alt: "Watching the competition.",
                                    },
                                    {
                                        url: "/team/working.png",
                                        alt: "Working on the robot.",
                                    },
                                ]}
                            />

                            <div className="w-1/3">
                                <div className="py-4">
                                    <hr className="border-t border-zinc-200 dark:border-zinc-800" />
                                </div>
                            </div>
                        </div>

                        <div className="custom-shape-divider-top-1702164972">
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="shape-fill"
                                ></path>
                            </svg>
                        </div>
                    </section>

                    <section
                        className="flex items-center justify-center flex-col space-y-6"
                        id="support"
                    >
                        <div className="flex items-center justify-center flex-col w-1/2">
                            <h2 className="text-4xl font-bold text-center">
                                <GradientDark>
                                    Support the Organization
                                </GradientDark>
                                <Divider />
                            </h2>
                            <p className="text-center text-zinc-600 dark:text-zinc-300">
                                Consider donating to help support our mission to
                                provide STEM opportunities to all students at
                                Woodson. All cash donations are{" "}
                                <Gradient>tax exempt</Gradient>.
                            </p>
                        </div>
                        <button
                            className="border-zinc-200 border rounded-full p-4 text-lg dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-700 hover:bg-zinc-100 transition-all flex space-x-2 items-center drop-shadow-sm"
                            onClick={saveFile}
                        >
                            <p>Sponsorship Information</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 auto-rows-fr p-4">
                            <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg hover:scale-110 transition-transform dark:border-zinc-800">
                                <div>
                                    <header className="text-3xl font-bold flex items-center space-x-2">
                                        <GradientDark>Bronze</GradientDark>
                                        <span className="pointer-default select-none rounded-lg font-bold text-sm bg-indigo-100 text-indigo-500 dark:bg-indigo-900 dark:text-indigo-300 p-1">
                                            Starter
                                        </span>
                                    </header>
                                    <p className="text-zinc-500 font-bold dark:text-zinc-400">
                                        $250 - $500
                                    </p>
                                    <Divider />
                                </div>

                                <div>
                                    <ul className="text-zinc-500">
                                        <Perk
                                            perk="Business name and logo on this page"
                                            color="text-indigo-500"
                                        />
                                        <Perk
                                            perk="Social media shoutout"
                                            color="text-indigo-500"
                                        />
                                        <Perk
                                            perk="Thank you letter"
                                            color="text-indigo-500"
                                        />
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center pt-4">
                                    <button
                                        onClick={() =>
                                            dialogRef.current!.showModal()
                                        }
                                        className="rounded-lg border-indigo-500 hover:text-white text-indigo-500 font-bold p-3 text-lg border-2 flex items-center justify-center space-x-1 hover:bg-indigo-500 transition-all hover:animate-pulse"
                                    >
                                        <p>Donate $250+</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg hover:scale-110 transition-transform dark:border-zinc-800">
                                <div>
                                    <header className="text-3xl font-bold flex items-center space-x-2">
                                        <GradientDark>Silver</GradientDark>
                                        <span className="pointer-default select-none rounded-lg font-bold text-sm bg-teal-100 text-teal-500 dark:bg-teal-900 dark:text-teal-300 p-1">
                                            Standard
                                        </span>
                                    </header>
                                    <p className="text-zinc-500 font-bold dark:text-zinc-400">
                                        $500 - $2,000
                                    </p>
                                    <Divider />
                                </div>

                                <div>
                                    <ul className="text-zinc-500">
                                        <Perk
                                            perk="Company logo on T-shirt"
                                            color="text-teal-500"
                                        />
                                        <Perk
                                            perk="Logo on robot"
                                            color="text-teal-500"
                                        />
                                        <Perk
                                            perk="Name and logo in videos"
                                            color="text-teal-500"
                                        />
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center pt-4">
                                    <button
                                        onClick={() =>
                                            dialogRef.current!.showModal()
                                        }
                                        className="rounded-lg border-teal-500 hover:text-white text-teal-500 font-bold p-3 text-lg border-2 flex items-center justify-center space-x-1 hover:bg-teal-500 transition-all hover:animate-pulse"
                                    >
                                        <p>Donate $500+</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg hover:scale-110 transition-transform dark:border-zinc-800">
                                <div>
                                    <header className="text-3xl font-bold flex items-center space-x-2">
                                        <GradientDark>Gold</GradientDark>
                                        <span className="pointer-default select-none rounded-lg font-bold text-sm bg-fuchsia-100 text-fuchsia-500 dark:bg-fuchsia-900 dark:text-fuchsia-300 p-1">
                                            Premium
                                        </span>
                                    </header>
                                    <p className="text-zinc-500 font-bold dark:text-zinc-400">
                                        $2,000 - $5,000
                                    </p>
                                    <Divider />
                                </div>

                                <div>
                                    <ul className="text-zinc-500">
                                        <Perk
                                            perk="Large company logo on T-shirt"
                                            color="text-fuchsia-500"
                                        />
                                        <Perk
                                            perk="Large logo on robot"
                                            color="text-fuchsia-500"
                                        />
                                        <Perk
                                            perk="Logo on team banner"
                                            color="text-fuchsia-500"
                                        />
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center pt-4">
                                    <button
                                        onClick={() =>
                                            dialogRef.current!.showModal()
                                        }
                                        className="rounded-lg border-fuchsia-500 hover:text-white text-fuchsia-500 font-bold p-3 text-lg border-2 flex items-center justify-center space-x-1 hover:bg-fuchsia-500 transition-all hover:animate-pulse"
                                    >
                                        <p>Donate $2,000+</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="drop-shadow-sm p-4 border-zinc-200 border rounded-lg hover:scale-110 transition-transform dark:border-zinc-800">
                                <div>
                                    <header className="text-3xl font-bold flex items-center space-x-2">
                                        <GradientDark>Platinum</GradientDark>
                                        <span className="pointer-default select-none rounded-lg font-bold text-sm bg-rose-100 text-rose-500 p-1 dark:bg-rose-900 dark:text-rose-300">
                                            Commercial
                                        </span>
                                    </header>
                                    <p className="text-zinc-500 font-bold dark:text-zinc-400">
                                        $5,000+
                                    </p>
                                    <Divider />
                                </div>

                                <div>
                                    <ul className="text-zinc-500">
                                        <Perk
                                            perk="Extra large logo on T-Shirt and robot"
                                            color="text-rose-500"
                                        />
                                        <Perk
                                            perk="Dedicated banner in the pit"
                                            color="text-rose-500"
                                        />
                                        <Perk
                                            perk="Team gifts and merchandise"
                                            color="text-rose-500"
                                        />
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center pt-4">
                                    <button
                                        onClick={() =>
                                            dialogRef.current!.showModal()
                                        }
                                        className="rounded-lg border-rose-500 hover:text-white text-rose-500 font-bold p-3 text-lg border-2 flex items-center justify-center space-x-1 hover:bg-rose-500 transition-all hover:animate-pulse"
                                    >
                                        <p>Donate $5,000+</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="pt-12">
                    <div className="custom-shape-divider-bottom-1702072292">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>

                    <footer
                        className="w-full bg-zinc-900 p-4 text-zinc-500 font-bold"
                        id="contact"
                    >
                        <div className="flex justify-between items-center flex-col space-y-3 xl:flex-row xl:space-y-0">
                            <Image
                                src="/logo.png"
                                height={150}
                                width={150}
                                alt="Woodson Robotics"
                            />
                            <div className="flex items-center justify-center flex-col space-y-3 w-3/4 md:w-1/3">
                                <p className="text-xl font-normal">
                                    9525 Main St, Fairfax, VA 22031
                                </p>
                                <div className="flex justify-between items-center w-full xl:space-x-3 xl:flex-row flex-col space-y-3 xl:space-y-0">
                                    <div className="flex space-x-3">
                                        <div className="hidden md:block">
                                            <div className="flex space-x-5">
                                                <div className="flex space-x-1 items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>

                                                    <p className="font-normal">
                                                        Sponsorships
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex space-x-5">
                                                <div className="flex space-x-1 items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                                        />
                                                    </svg>

                                                    <p className="font-normal">
                                                        Inquiries
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex space-x-1 items-center">
                                                <a
                                                    href="mailto:frc@wtwcsr.org"
                                                    className="underline hover:text-rose-400 transition-colors text-rose-500"
                                                >
                                                    frc@wtwcsr.org
                                                </a>
                                            </div>
                                            <div className="flex space-x-1 items-center">
                                                <a
                                                    href="mailto:frc@wtwcsr.org"
                                                    className="underline hover:text-rose-400 transition-colors text-rose-500"
                                                >
                                                    contact@wtwcsr.org
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <a
                                            href="https://www.instagram.com/wtwrobotics"
                                            target="_blank"
                                            className="hover:opacity-50 transition-all text-zinc-400"
                                        >
                                            <Image
                                                src="/instagram.svg"
                                                alt="@WTWRobotics (Instagram)"
                                                width={40}
                                                height={40}
                                                className="invert"
                                            />
                                        </a>
                                        <button
                                            className="hover:opacity-50 transition-all text-zinc-400"
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    "S2H7-7W47-7W8VZ"
                                                );
                                                alert("Copied to clipboard!");
                                            }}
                                        >
                                            <Image
                                                src="/schoology.png"
                                                alt="Schoology Group"
                                                width={40}
                                                height={40}
                                                className="invert"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center space-x-1 text-zinc-600 font-normal">
                                    <p>Made with</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 fill-zinc-900 text-rose-400 hover:fill-rose-400 transition-colors hover:animate-bounce"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    );
}
