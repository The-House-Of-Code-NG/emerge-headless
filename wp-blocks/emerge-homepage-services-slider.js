import {gql} from "@apollo/client";
import {useMemo} from "react";
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use( [ A11y, Navigation, Pagination ] );

const sliderOptions = {
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: '32',
    navigation: {
        prevEl: '.service-slider-prev-service',
        nextEl: '.service-slider-next-service',
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


export default function EmergeHomepageServicesSlider( props ) {
    const { attributes } = props;
    const { heading, text, services } = attributes;

    const memoizedServices = useMemo(() => {
        return JSON.parse(services)
    }, [attributes])
    return (
        <section
            className="w-full pl-[1.25rem] lg:pl-[8rem] overflow-hidden"
        >
            <section className="mt-24">
				<span className="text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#4A00FF0F]/5 px-2.5 rounded-[6px] py-2">
					{ text }
				</span>
                <h3 className="mt-4 font-black font-Satoshi text-[2.875rem] md:text-5xl w-full  md:w-1/2 leading-[3.3rem] ">
                    { heading }
                </h3>
                <div className="mt-11 mb-52">
                    <Swiper { ...sliderOptions } className="w-full flex">
                    { memoizedServices.map( ( service, index ) => {
                            return (
                                <SwiperSlide
                                    key={ index }
                                    className={ `pt-8 px-6 flex group bg-[#F7F5FC] flex-col rounded-[20px] hover:bg-[#100650]` }
                                >

                                    <div className="h-[33rem] md:h-[29rem]">
                                        <img
                                            src={ service.imageUrl }
                                            alt="Service Slide"
                                        />
                                        <h3 className="group-hover:text-white font-black text-[#0E1218] w-2/3 text-lg font-Satoshi leading-[30px]">
                                            { service.serviceHeading }
                                        </h3>
                                        <p className="group-hover:text-white font-Inter mt-4 font-normal text-lg leading-[30px]">
                                            { service.serviceText }
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        } ) }
                    </Swiper>
                        <div className="flex flex-row items-center w-full justify-end md:px-16">
                        <div className="flex mt-12 flex-row space-x-5 items-center">
                            <button className="service-slider-prev-service">
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
                                        stroke-width="0.793103"
                                    />
                                    <g clip-path="url(#clip0_4301_4478)">
                                        <path
                                            d="M31.7266 23H14.2783"
                                            stroke="black"
                                            stroke-width="1.58621"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M21.4141 30.1406L14.2761 23.0027L21.4141 15.8648"
                                            stroke="black"
                                            stroke-width="1.58621"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                            <button className="service-slider-next-service">
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
                                        stroke-width="0.793103"
                                    />
                                    <g clip-path="url(#clip0_4301_4484)">
                                        <path
                                            d="M14.8242 23H32.2725"
                                            stroke="black"
                                            stroke-width="1.58621"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M25.1328 30.1406L32.2707 23.0027L25.1328 15.8648"
                                            stroke="black"
                                            stroke-width="1.58621"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                </div>
            </section>
        </section>
    );
}

EmergeHomepageServicesSlider.fragments = {
    entry: gql`
    fragment EmergeHomepageServicesSliderFragment on EmergeBlocksHomepageServicesSlider {
      attributes {
        heading
        text
        services
      }
    }
  `,
    key: `EmergeHomepageServicesSliderFragment`,
};

EmergeHomepageServicesSlider.displayName = 'EmergeBlocksHomepageServicesSlider'
