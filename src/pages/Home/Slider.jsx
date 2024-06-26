// Initialization for ES Users
import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Slider() {
    useEffect(() => {
        initTWE({ Carousel });
    }, []);

    return (
        <div
            id="homePageSlider"
            className="relative mt-6 mb-10 rounded-2xl overflow-hidden"
            data-twe-carousel-init
            data-twe-ride="carousel"
        >
            {/* Carousel items */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] ">
                {/* 1st item */}
                <div
                    className="relative float-left -mr-[100%] w-full h- transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-active
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/5.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Affordable Price For Car Servicing
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    There are many variations of passages of
                                    available, but the majority have suffered
                                    alteration in some form
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd items */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/1.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Quality Repairs for Your Vehicle
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    Our expert technicians provide top-notch
                                    repairs to ensure your vehicle performs at
                                    its best.
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd items */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/2.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Experience Unmatched Performance
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    Discover the thrill of driving with our
                                    high-performance upgrades and tuning
                                    services.
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 4th items */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/3.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Reliable Maintenance Services
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    Keep your car running smoothly with our
                                    comprehensive maintenance plans tailored to
                                    your needs.
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5th items */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/4.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg 2xl:max-w-2xl">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Expert Detailing for Your Car
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    Restore your car&apos;s shine and protect
                                    its finish with our professional detailing
                                    services.
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 6th items */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className="hero min-h-[400px] md:min-h-[600px]"
                        style={{
                            backgroundImage: "url(/images/banner/6.jpg)",
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151575] lg:to-transparent"></div>
                        <div className="text-white w-full px-4 sm:px-10 md:pr-0 md:pl-20">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                                    Upgrade Your Ride Today
                                </h1>
                                <p className="mb-5 md:text-lg">
                                    Explore our wide range of upgrade options
                                    and take your driving experience to the next
                                    level.
                                </p>
                                <div className="flex gap-2">
                                    <button className="btn bg-primary text-white border-primary hover:border-primary hover:bg-[#d62400]">
                                        Discover More
                                    </button>
                                    <button className="btn bg-transparent border-white text-white hover:bg-[#ffffff4d]">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel controls - prev item */}
            <button
                className="absolute right-20 md:right-32 bottom-4 md:bottom-8 flex items-center justify-center bg-[#ffffff3d] hover:bg-primary transition-all h-14 w-14 md:h-20 md:w-20 rounded-full text-white hover:text-white z-20"
                type="button"
                data-twe-target="#homePageSlider"
                data-twe-slide="prev"
            >
                <FaArrowLeft size={25} />
            </button>

            {/* Carousel controls - next item */}
            <button
                className="absolute right-4 md:right-8 bottom-4 md:bottom-8 flex items-center justify-center bg-[#ffffff3d] hover:bg-primary transition-all h-14 w-14 md:h-20 md:w-20 rounded-full text-white hover:text-white z-20"
                type="button"
                data-twe-target="#homePageSlider"
                data-twe-slide="next"
            >
                <FaArrowRight size={25} />
            </button>
        </div>
    );
}

export default Slider;
