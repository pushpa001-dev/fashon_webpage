"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FashionWave = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".wave-image", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                }
            });

            gsap.from(".wave-text", {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-20 w-full max-w-7xl mx-auto">
                <span className="text-sm tracking-widest uppercase">Fashion Wave</span>
                <span className="text-sm tracking-widest uppercase">Laose</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto h-auto lg:h-[800px]">
                {/* Left Column: Big Vertical Image */}
                <div className="relative w-full h-[600px] lg:h-full wave-image">
                    <Image
                        src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=2000&auto=format&fit=crop" // Blazer woman B&W
                        alt="Fashion Model 1"
                        fill
                        className="object-cover grayscale"
                    />
                </div>

                {/* Right Column: Grid and Text */}
                <div className="flex flex-col gap-8 h-full">
                    {/* Top Row Images */}
                    <div className="grid grid-cols-2 gap-8 h-1/2">
                        <div className="relative w-full h-full wave-image">
                            <Image
                                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop" // Face Close up
                                alt="Model Face"
                                fill
                                className="object-cover grayscale"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-8 wave-text px-4">
                            <div>
                                <p className="text-sm text-gray-700 mb-2">• We also making a context to get the best model to make modeling for our brand.</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-700">• This is based on the second collection so make sure to get those.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row Image + Signature */}
                    <div className="grid grid-cols-2 gap-8 h-1/2">
                        <div className="relative w-full h-full wave-image">
                            <Image
                                src="https://images.pexels.com/photos/30151049/pexels-photo-30151049.jpeg" // Legs/Ocean/Abstract
                                alt="Abstract Fashion"
                                fill
                                className="object-cover grayscale"
                            />
                        </div>
                        <div className="relative flex items-center justify-center wave-text">
                            {/* Red Signature SVG */}
                            <svg viewBox="0 0 200 100" className="w-[80%] h-auto stroke-[var(--color-primary)] stroke-2 fill-none">
                                <path d="M10,50 Q50,10 90,50 T170,50" />
                                <path d="M90,50 Q130,90 170,50" />
                                <circle cx="150" cy="50" r="40" className="stroke-[var(--color-primary)]" />
                            </svg>
                            <span className="absolute bottom-4 right-4 text-sm">www.laose.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FashionWave;
