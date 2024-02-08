import { gql } from '@apollo/client';
import {motion, useScroll, useTransform, useAnimate} from 'framer-motion'
import {useRef} from 'react'
import Image from "next/image";

export default function EmergeHomepage (props) {
    const {sectionHeading, tagText, mainImage, sectionText, buttonText, buttonLink} = props.attributes

    const [scope] = useAnimate()
    const target = useRef()
    const {scrollYProgress} = useScroll({
        target,
        offset: ["end end", "end start"]

    })

    const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.9], [1, 0.3, 0])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

    return (
        <motion.section ref={target} style={{opacity}} className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
            <motion.div style={{scale}} className='flex flex-col md:flex-row md:items-center md:justify-between w-full pt-5'>
                <div className="w-full md:w-1/2">
                    <div className='text-left font-Inter text-[#100650] font-medium uppercase min-h-[36px] bg-opacity-5 bg-[#4A00FF0F] px-2.5 rounded-[6px] py-2 w-fit'>
                        {tagText}
                    </div>
                    <div ref={scope} className='flex flex-col mt-4'>
                        <h1 className="font-black font-Satoshi text-[3.5rem] md:text-[56px] leading-[63px]">
                            {sectionHeading}
                        </h1>
                        <p className="leading-[35px] text-[1.125rem] md:text-lg font-Inter mt-6">
                            {sectionText}
                        </p>
                    </div>
                    <div>
                        <a href={buttonLink ?? '/'} className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                            {buttonText}
                        </a>
                        <div className='flex mt-[1.88rem] space-x-1 md:mt-14 md:space-x-6 flex-row items-center'>
                            <img  className="w-1/3 md:w-full" src='/hero-image-1.svg' />
                            <img className="w-1/3 md:w-full" src='/hero-image-2.svg' />
                            <img className="w-1/3 md:w-full" src='/hero-image-3.svg' />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-[3.1rem] md:mt-0 flex flex-row md:justify-center">
                    <img className="w-[500px] h-[480px] self-end" src="/homepage-hero-image.png" alt="Emerge digital" />
                </div>
            </motion.div>
        </motion.section>
    )
}


EmergeHomepage.fragments = {
    entry: gql`
    fragment EmergeHomepageFragment on EmergeBlocksHomepageHero {
      attributes {
        sectionHeading
        tagText
        mainImage
        sectionText
        buttonText
        buttonLink
      }
    }
  `,
    key: `EmergeHomepageFragment`,
};

EmergeHomepage.displayName = 'EmergeBlocksHomepageHero'
