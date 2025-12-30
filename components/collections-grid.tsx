"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CollectionsGrid = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".collection-item", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const collections = [
        {
            id: 1,
            title: "COLLECTION 1",
            image: "https://images.pexels.com/photos/2364588/pexels-photo-2364588.jpeg", // Men B&W
            desc: "This is a men collection of shirts t shirts and phants."
        },
        {
            id: 2,
            title: "COLLECTION 2",
            image: "https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&w=2000&auto=format&fit=crop", // Woman Stripes B&W
            desc: "we also prioritize women to make them look good and be good."
        },
        {
            id: 3,
            title: "COLLECTION 3",
            image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=2000&auto=format&fit=crop", // Woman White Shirt B&W
            desc: "This collection consists of mid range budget so everyone can efford."
        }
    ];

    return (
        <section ref={sectionRef} className="w-full bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-20 w-full px-4">
                <span className="text-sm tracking-widest uppercase">Fashion Presentation</span>
                <span className="text-sm tracking-widest uppercase">Laose</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mx-auto max-w-7xl">
                {collections.map((col) => (
                    <div key={col.id} className="collection-item flex flex-col items-center text-center group">
                        <div className="w-full aspect-square relative mb-8 overflow-hidden">
                            <Image
                                src={col.image}
                                alt={col.title}
                                fill
                                className="object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h2 className="font-tan text-3xl md:text-4xl mb-6">{col.title}</h2>
                        <p className="text-sm font-light text-gray-700 max-w-[80%] leading-relaxed">
                            {col.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Decorative Red Vines (SVG approximations) */}
            <div className="absolute top-1/2 left-0 w-24 h-48 -translate-y-1/2 pointer-events-none hidden xl:block">
                <svg viewBox="0 0 100 200" className="w-full h-full stroke-[var(--color-primary)] fill-none stroke-2">
                    <path d="M10,10 Q50,50 10,90 T10,170" />
                    <path d="M10,30 Q40,60 10,90" />
                    <circle cx="10" cy="10" r="3" fill="var(--color-primary)" />
                </svg>
            </div>
            <div className="absolute bottom-10 right-0 w-24 h-48 pointer-events-none hidden xl:block rotate-180">
                <svg viewBox="0 0 100 200" className="w-full h-full stroke-[var(--color-primary)] fill-none stroke-2">
                    <path d="M10,10 Q50,50 10,90 T10,170" />
                    <circle cx="10" cy="10" r="3" fill="var(--color-primary)" />
                </svg>
            </div>
        </section>
    );
};

export default CollectionsGrid;
