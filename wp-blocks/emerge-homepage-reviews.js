import {motion} from 'framer-motion'
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {gql} from "@apollo/client";
import {useMemo} from "react";

SwiperCore.use( [ A11y, Navigation, Pagination ] );

const sliderOptions = {
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: '32',
    navigation: {
        prevEl: '.service-slider-prev-review',
        nextEl: '.service-slider-next-review',
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
export default function EmergeHomepageReviews( props ) {
    const { attributes } = props;
    const { sectionHeading, reviews } = attributes;

    const memoizedReviews = useMemo(() => {
        return JSON.parse(reviews)
    }, [reviews])

    return (
            <motion.section className="bg-[#F5F5F9] my-[6rem] py-[5.44rem] px-[2.5rem] md:px-[6.44rem]">
                <div className="flex flex-row justify-center">
                    <h1 className="font-black text-[2.875rem] text-black font-Satoshi">
                        { sectionHeading }
                    </h1>
                </div>
                <div className="mt-[2.94rem]">
                    <Swiper { ...sliderOptions } className="w-full flex">
                        {memoizedReviews?.map((review, index) => (
                            <SwiperSlide key={index} className="bg-white rounded-[0.75rem] p-[2rem]">
                                <div className="h-[14.6rem]">
                                    <svg
                                        width="105"
                                        height="21"
                                        viewBox="0 0 105 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4337_397)">
                                            <path
                                                d="M19.2365 9.38257L15.5369 12.6113L16.6452 17.4184C16.7038 17.6696 16.6871 17.9327 16.5971 18.1745C16.507 18.4163 16.3477 18.6263 16.139 18.7781C15.9304 18.9298 15.6816 19.0168 15.4237 19.0279C15.1659 19.0391 14.9106 18.974 14.6895 18.8408L10.4969 16.2978L6.31334 18.8408C6.09232 18.974 5.83695 19.0391 5.57914 19.0279C5.32133 19.0168 5.07253 18.9298 4.86384 18.7781C4.65516 18.6263 4.49584 18.4163 4.40582 18.1745C4.3158 17.9327 4.29907 17.6696 4.35771 17.4184L5.46431 12.6162L1.76389 9.38257C1.56817 9.21377 1.42664 8.99094 1.35706 8.74203C1.28747 8.49311 1.29293 8.2292 1.37274 7.98337C1.45255 7.73755 1.60316 7.52075 1.80569 7.36019C2.00821 7.19962 2.25364 7.10242 2.51119 7.08077L7.38877 6.65831L9.29271 2.11706C9.39214 1.87878 9.55985 1.67523 9.77472 1.53206C9.98959 1.38889 10.242 1.3125 10.5002 1.3125C10.7584 1.3125 11.0108 1.38889 11.2257 1.53206C11.4406 1.67523 11.6083 1.87878 11.7077 2.11706L13.6174 6.65831L18.4933 7.08077C18.7509 7.10242 18.9963 7.19962 19.1988 7.36019C19.4014 7.52075 19.552 7.73755 19.6318 7.98337C19.7116 8.2292 19.7171 8.49311 19.6475 8.74203C19.5779 8.99094 19.4364 9.21377 19.2406 9.38257H19.2365Z"
                                                fill="#FFB320"
                                            />
                                        </g>
                                        <g clip-path="url(#clip1_4337_397)">
                                            <path
                                                d="M40.2365 9.38257L36.5369 12.6113L37.6452 17.4184C37.7038 17.6696 37.6871 17.9327 37.5971 18.1745C37.507 18.4163 37.3477 18.6263 37.139 18.7781C36.9304 18.9298 36.6816 19.0168 36.4237 19.0279C36.1659 19.0391 35.9106 18.974 35.6895 18.8408L31.4969 16.2978L27.3133 18.8408C27.0923 18.974 26.8369 19.0391 26.5791 19.0279C26.3213 19.0168 26.0725 18.9298 25.8638 18.7781C25.6552 18.6263 25.4958 18.4163 25.4058 18.1745C25.3158 17.9327 25.2991 17.6696 25.3577 17.4184L26.4643 12.6162L22.7639 9.38257C22.5682 9.21377 22.4266 8.99094 22.3571 8.74203C22.2875 8.49311 22.2929 8.2292 22.3727 7.98337C22.4525 7.73755 22.6032 7.52075 22.8057 7.36019C23.0082 7.19962 23.2536 7.10242 23.5112 7.08077L28.3888 6.65831L30.2927 2.11706C30.3921 1.87878 30.5598 1.67523 30.7747 1.53206C30.9896 1.38889 31.242 1.3125 31.5002 1.3125C31.7584 1.3125 32.0108 1.38889 32.2257 1.53206C32.4406 1.67523 32.6083 1.87878 32.7077 2.11706L34.6174 6.65831L39.4933 7.08077C39.7509 7.10242 39.9963 7.19962 40.1988 7.36019C40.4014 7.52075 40.552 7.73755 40.6318 7.98337C40.7116 8.2292 40.7171 8.49311 40.6475 8.74203C40.5779 8.99094 40.4364 9.21377 40.2406 9.38257H40.2365Z"
                                                fill="#FFB320"
                                            />
                                        </g>
                                        <g clip-path="url(#clip2_4337_397)">
                                            <path
                                                d="M61.2365 9.38257L57.5369 12.6113L58.6452 17.4184C58.7038 17.6696 58.6871 17.9327 58.5971 18.1745C58.507 18.4163 58.3477 18.6263 58.139 18.7781C57.9304 18.9298 57.6816 19.0168 57.4237 19.0279C57.1659 19.0391 56.9106 18.974 56.6895 18.8408L52.4969 16.2978L48.3133 18.8408C48.0923 18.974 47.8369 19.0391 47.5791 19.0279C47.3213 19.0168 47.0725 18.9298 46.8638 18.7781C46.6552 18.6263 46.4958 18.4163 46.4058 18.1745C46.3158 17.9327 46.2991 17.6696 46.3577 17.4184L47.4643 12.6162L43.7639 9.38257C43.5682 9.21377 43.4266 8.99094 43.3571 8.74203C43.2875 8.49311 43.2929 8.2292 43.3727 7.98337C43.4525 7.73755 43.6032 7.52075 43.8057 7.36019C44.0082 7.19962 44.2536 7.10242 44.5112 7.08077L49.3888 6.65831L51.2927 2.11706C51.3921 1.87878 51.5598 1.67523 51.7747 1.53206C51.9896 1.38889 52.242 1.3125 52.5002 1.3125C52.7584 1.3125 53.0108 1.38889 53.2257 1.53206C53.4406 1.67523 53.6083 1.87878 53.7077 2.11706L55.6174 6.65831L60.4933 7.08077C60.7509 7.10242 60.9963 7.19962 61.1988 7.36019C61.4014 7.52075 61.552 7.73755 61.6318 7.98337C61.7116 8.2292 61.7171 8.49311 61.6475 8.74203C61.5779 8.99094 61.4364 9.21377 61.2406 9.38257H61.2365Z"
                                                fill="#FFB320"
                                            />
                                        </g>
                                        <g clip-path="url(#clip3_4337_397)">
                                            <path
                                                d="M82.2365 9.38257L78.5369 12.6113L79.6452 17.4184C79.7038 17.6696 79.6871 17.9327 79.5971 18.1745C79.507 18.4163 79.3477 18.6263 79.139 18.7781C78.9304 18.9298 78.6816 19.0168 78.4237 19.0279C78.1659 19.0391 77.9106 18.974 77.6895 18.8408L73.4969 16.2978L69.3133 18.8408C69.0923 18.974 68.8369 19.0391 68.5791 19.0279C68.3213 19.0168 68.0725 18.9298 67.8638 18.7781C67.6552 18.6263 67.4958 18.4163 67.4058 18.1745C67.3158 17.9327 67.2991 17.6696 67.3577 17.4184L68.4643 12.6162L64.7639 9.38257C64.5682 9.21377 64.4266 8.99094 64.3571 8.74203C64.2875 8.49311 64.2929 8.2292 64.3727 7.98337C64.4525 7.73755 64.6032 7.52075 64.8057 7.36019C65.0082 7.19962 65.2536 7.10242 65.5112 7.08077L70.3888 6.65831L72.2927 2.11706C72.3921 1.87878 72.5598 1.67523 72.7747 1.53206C72.9896 1.38889 73.242 1.3125 73.5002 1.3125C73.7584 1.3125 74.0108 1.38889 74.2257 1.53206C74.4406 1.67523 74.6083 1.87878 74.7077 2.11706L76.6174 6.65831L81.4933 7.08077C81.7509 7.10242 81.9963 7.19962 82.1988 7.36019C82.4014 7.52075 82.552 7.73755 82.6318 7.98337C82.7116 8.2292 82.7171 8.49311 82.6475 8.74203C82.5779 8.99094 82.4364 9.21377 82.2406 9.38257H82.2365Z"
                                                fill="#FFB320"
                                            />
                                        </g>
                                        <g clip-path="url(#clip4_4337_397)">
                                            <path
                                                d="M103.237 9.38257L99.5369 12.6113L100.645 17.4184C100.704 17.6696 100.687 17.9327 100.597 18.1745C100.507 18.4163 100.348 18.6263 100.139 18.7781C99.9304 18.9298 99.6816 19.0168 99.4237 19.0279C99.1659 19.0391 98.9106 18.974 98.6895 18.8408L94.4969 16.2978L90.3133 18.8408C90.0923 18.974 89.8369 19.0391 89.5791 19.0279C89.3213 19.0168 89.0725 18.9298 88.8638 18.7781C88.6552 18.6263 88.4958 18.4163 88.4058 18.1745C88.3158 17.9327 88.2991 17.6696 88.3577 17.4184L89.4643 12.6162L85.7639 9.38257C85.5682 9.21377 85.4266 8.99094 85.3571 8.74203C85.2875 8.49311 85.2929 8.2292 85.3727 7.98337C85.4525 7.73755 85.6032 7.52075 85.8057 7.36019C86.0082 7.19962 86.2536 7.10242 86.5112 7.08077L91.3888 6.65831L93.2927 2.11706C93.3921 1.87878 93.5598 1.67523 93.7747 1.53206C93.9896 1.38889 94.242 1.3125 94.5002 1.3125C94.7584 1.3125 95.0108 1.38889 95.2257 1.53206C95.4406 1.67523 95.6083 1.87878 95.7077 2.11706L97.6174 6.65831L102.493 7.08077C102.751 7.10242 102.996 7.19962 103.199 7.36019C103.401 7.52075 103.552 7.73755 103.632 7.98337C103.712 8.2292 103.717 8.49311 103.647 8.74203C103.578 8.99094 103.436 9.21377 103.241 9.38257H103.237Z"
                                                fill="#FFB320"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4337_397">
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    fill="white"
                                                />
                                            </clipPath>
                                            <clipPath id="clip1_4337_397">
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    fill="white"
                                                    transform="translate(21)"
                                                />
                                            </clipPath>
                                            <clipPath id="clip2_4337_397">
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    fill="white"
                                                    transform="translate(42)"
                                                />
                                            </clipPath>
                                            <clipPath id="clip3_4337_397">
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    fill="white"
                                                    transform="translate(63)"
                                                />
                                            </clipPath>
                                            <clipPath id="clip4_4337_397">
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    fill="white"
                                                    transform="translate(84)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="my-[1.5rem] font-Inter mt-4 font-normal text-lg leading-[30px]">
                                        { review.body }
                                    </p>
                                    <div className="flex flex-row items-start">
                                        <img
                                            className="w-[3.5rem] rounded-[3.5rem] h-[3.5rem]"
                                            src={ review.imageUrl }
                                            alt="Service Slide"
                                        />
                                        <div className="ml-[20px]">
                                            <p className="font-Inter font-semibold text-[1rem]">
                                                { review.name }
                                            </p>
                                            <p className="font-Inter font-normal text-[1rem]">
                                                { review.company }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex flex-row items-center w-full justify-end px-16">
                        <div className="flex mt-12 flex-row space-x-5 items-center">
                            <button className="service-slider-prev-review">
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
                            <button className="service-slider-next-review">
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
            </motion.section>
    );
}


EmergeHomepageReviews.fragments = {
    entry: gql`
    fragment EmergeHomepageReviewsFragment on EmergeBlocksHomepageReview {
      attributes {
        sectionHeading
        reviews
      }
    }
  `,
    key: `EmergeHomepageReviewsFragment`,
};

EmergeHomepageReviews.displayName = 'EmergeBlocksHomepageReview'
