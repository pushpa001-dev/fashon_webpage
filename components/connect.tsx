"use client";

import React from "react";
import Image from "next/image";

const Connect = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-between bg-white text-black pt-24 relative overflow-hidden">
            {/* Top Header */}
            <div className="flex justify-between items-start px-6 md:px-12 w-full max-w-7xl mx-auto">
                <span className="text-sm tracking-widest uppercase">Fashion Presentation</span>
                <span className="text-sm tracking-widest uppercase">Laose</span>
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col justify-center items-center gap-12 z-10">
                <h2 className="font-tan text-5xl md:text-7xl lg:text-8xl text-center px-4">
                    CONNECT WITH US!
                </h2>

                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-sm tracking-widest mt-12">
                    <span>www.laose.com</span>
                    <span>+123-456-7890</span>
                    <span>hello@laose.com</span>
                </div>
            </div>

            {/* Bottom Image */}
            <div className="relative w-full h-[30vh] mt-12 bg-black">
                <Image
                    src="https://images.pexels.com/photos/33699960/pexels-photo-33699960.jpeg" // Ocean waves texture B&W
                    alt="Ocean Waves"
                    fill
                    className="object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
        </section>
    );
};

export default Connect;
