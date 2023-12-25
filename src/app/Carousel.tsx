"use client";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "./loading";

type ImageUrlAlt = {
    url: string;
    alt: string;
};

export default function Carousel({ images }: { images: Array<ImageUrlAlt> }) {
    const slides = images.map((i, idx) => ({
        key: idx,
        content: (
            <Suspense fallback={<Loading />}>
                <Image
                    alt={i.alt}
                    src={i.url}
                    width={500}
                    height={500}
                    className="rounded-lg select-none"
                />
            </Suspense>
        ),
    }));
    const [index, setIndex] = useState(0);
    const [Carousel3D, setCarousel3D] = useState(null);

    useEffect(() => {
        const DynamicCarousel = dynamic(
            // @ts-expect-error - react-spring-3d-carousel doesn't have types
            () => import("react-spring-3d-carousel")
        );
        // @ts-expect-error - react-spring-3d-carousel doesn't have types
        setCarousel3D(() => DynamicCarousel);
    }, [setCarousel3D]);

    return (
        <>
            <div className="z-20 absolute">
                <div className="flex justify-between w-64 md:w-96 lg:w-[39rem]">
                    <button
                        onClick={() => setIndex(index - 1)}
                        className="drop-shadow-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12 opacity-75 hover:opacity-90 transition-opacity dark:text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        className="drop-shadow-md"
                        onClick={() => setIndex(index + 1)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12 opacity-75 hover:opacity-90 transition-opacity dark:text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full h-screen">
                {Carousel3D && (
                    // @ts-expect-error
                    <Carousel3D
                        goToSlide={index}
                        slides={slides}
                        showNavigation={false}
                    />
                )}
                {!Carousel3D && (
                    <div className="flex items-center justify-center">
                        <Loading />
                    </div>
                )}
            </div>
        </>
    );
}
