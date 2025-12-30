"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CollectionFeature = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feat-title", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            gsap.from(".feat-img", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Red Curve Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 pointer-events-none">
                <svg viewBox="0 0 500 100" className="w-full h-full stroke-[var(--color-primary)] stroke-2 fill-none">
                    <path d="M0,100 Q150,0 250,50 T500,0" />
                </svg>
            </div>

            <div className="flex justify-between items-start mb-12 w-full max-w-7xl mx-auto">
                <span className="text-sm tracking-widest uppercase">Make a Move</span>
                <span className="text-sm tracking-widest uppercase">Laose</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                {/* Left Content */}
                <div className="flex flex-col space-y-12">
                    <h2 className="font-tan text-[12vw] lg:text-[10vw] leading-none ml-0 lg:-ml-12 feat-title">
                        COLLECTION
                    </h2>

                    <div className="space-y-8 pl-4 lg:pl-12 max-w-md">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            • This is the second phase collection we are going to launch within a month.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            • The collection is based on the women in modern style and make sure to get an early order.
                        </p>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex flex-col gap-8">
                    <div className="w-full h-[300px] relative feat-img overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop" // Woman Lying down
                            alt="Feature 1"
                            fill
                            className="object-cover grayscale hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="w-full h-[400px] relative feat-img overflow-hidden self-end w-[80%]">
                        <Image
                            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2000&auto=format&fit=crop" // Curly hair woman portrait
                            alt="Feature 2"
                            fill
                            className="object-cover grayscale hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionFeature;
