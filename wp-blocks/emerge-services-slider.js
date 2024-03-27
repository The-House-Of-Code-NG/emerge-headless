import {motion} from 'framer-motion'
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import {useMemo} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {gql} from "@apollo/client";
SwiperCore.use( [ A11y, Navigation, Pagination ] );

const sliderOptions = {
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: '32',
    navigation: {
        prevEl: '.service-slider-prev',
        nextEl: '.service-slider-next',
    },
    breakpoints: {
        360: {
            slidesPerView: '1.2',
        },
        812: {
            slidesPerView: '2.2',
        },
        1020: {
            slidesPerView: '3.3',
        },
    },
};

export default function EmergeServicesSlider (props) {
    const {heading, text,  services} = props.attributes

    const memoizedServices = useMemo(() => {
        return JSON.parse(services)
    }, [services])

    return (
        <motion.section className="w-full pl-[20px] mt-24 lg:pl-[128px] overflow-hidden">
            <div className="capabilities-content">
                <div className="capabilities-text">
                    <h2 className="capabilities-title">{ heading }</h2>
                    <p className="capabilities-description">{ text }</p>
                </div>
                <Swiper { ...sliderOptions } className="w-full flex">
                    {memoizedServices.map((service, index) => (
                        <SwiperSlide className="capability-item !lg:mr-[2rem] !mr-[17px] flex-main lg:!flex-main-lg" key={index}>
                            <img
                                className="w-[3.1875rem] h-[3.1875rem]"
                                src={ service.imageUrl }
                                alt={ service.heading }
                            />
                            <h4 className="capability-title">
                                { service.heading }
                            </h4>
                            <ul className="capability-features">
                                {service?.reason1 && (
                                    <li>
                                        { service.reason1 }
                                    </li>
                                ) }
                                {service?.reason2 && (
                                    <li>
                                        { service.reason2 }
                                    </li>
                                ) }
                                {service?.reason3 && (
                                    <li>
                                        { service.reason3 }
                                    </li>
                                ) }
                                {service?.reason4 && (
                                    <li>
                                        { service.reason4 }
                                    </li>
                                ) }
                            </ul>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="flex flex-row items-center w-full justify-end md:px-16">
                <div className="flex mt-12 flex-row space-x-5 items-center mr-2">
                    <button className="service-slider-prev">
                        <svg
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="23"
                                cy="23"
                                r="22.6034"
                                transform="matrix(-1 0 0 1 46 0)"
                                stroke="black"
                                strokeWidth="0.793103"
                            />
                            <g clipPath="url(#clip0_4301_4478)">
                                <path
                                    d="M31.7266 23H14.2783"
                                    stroke="black"
                                    strokeWidth="1.58621"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.4141 30.1406L14.2761 23.0027L21.4141 15.8648"
                                    stroke="black"
                                    strokeWidth="1.58621"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_4301_4478">
                                    <rect
                                        width="25.3793"
                                        height="25.3793"
                                        fill="white"
                                        transform="matrix(0 -1 -1 0 35.6914 35.6914)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button className="service-slider-next">
                        <svg
                            width="47"
                            height="46"
                            viewBox="0 0 47 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="23.5508"
                                cy="23"
                                r="22.6034"
                                stroke="black"
                                strokeWidth="0.793103"
                            />
                            <g clipPath="url(#clip0_4301_4484)">
                                <path
                                    d="M14.8242 23H32.2725"
                                    stroke="black"
                                    strokeWidth="1.58621"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M25.1328 30.1406L32.2707 23.0027L25.1328 15.8648"
                                    stroke="black"
                                    strokeWidth="1.58621"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_4301_4484">
                                    <rect
                                        width="25.3793"
                                        height="25.3793"
                                        fill="white"
                                        transform="matrix(0 -1 1 0 10.8594 35.6914)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </motion.section>

    )
}

EmergeServicesSlider.fragments = {
    entry: gql`
    fragment EmergeServicesSliderFragment on EmergeBlocksServicepageServicesSlider {
      attributes {
        heading
        text
        services
      }
    }
  `,
    key: `EmergeServicesSliderFragment`,
};

EmergeServicesSlider.displayName = 'EmergeBlocksServicepageServicesSlider'

