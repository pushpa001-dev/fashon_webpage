"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2,
            });

            gsap.from(".hero-text", {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.8,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black text-white overflow-hidden">
            {/* Background Image Placeholder - In a real scenario, this would be the provided image */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                    alt="Fashion Model B&W"
                    fill
                    className="object-cover grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12">
                {/* Top Header */}
                <div className="flex justify-between items-start hero-text section-header">
                    <span className="text-sm tracking-widest uppercase text-gray-300">Fashion Presentation</span>
                    <span className="text-sm tracking-widest uppercase text-gray-300">Laose</span>
                </div>

                {/* Center Big Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    <h1 ref={textRef} className="font-tan text-[15vw] md:text-[22vw] leading-none tracking-tighter mix-blend-overlay">
                        LAOSE
                    </h1>
                </div>

                {/* Bottom Footer */}
                <div className="flex justify-between items-end hero-text section-footer">
                    <div className="text-sm tracking-widest text-gray-300">
                        WWW.LAOSE.COM
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] font-light">
                        SINCE 2008
                    </div>
                    <div className="text-sm tracking-widest text-gray-300">
                        +123-456-7890
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
