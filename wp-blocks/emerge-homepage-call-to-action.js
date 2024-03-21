import { gql } from '@apollo/client';
import {motion} from 'framer-motion'
import {AnimatedText} from "../components/AnimatedText";

export default function EmergeHomepageCallToAction (props) {
    const {sectionHeading, tagText, sectionText, buttonText, buttonLink} = props.attributes
    return (
        <motion.section className="bg-[#100650] w-full">
            <div className="flex px-[2.06rem] md:px-32 pt-[3.5rem]  pb-[22rem]  md:py-40 flex-col md:flex-row bg-[url('../public/art.svg')] bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top" >
                <div className="w-full md:w-2/3">
                    <span className='text-sm md:text-base text-center font-Inter text-[#100650] text-white font-medium uppercase h-[36px] bg-white/10 px-2.5 rounded-[6px] py-2'>
                       {tagText}
                    </span>
                    <AnimatedText
                        el="h3"
                        text={sectionHeading}
                        repeatDelay={10000}
                        className="leading-[3.9rem] mt-[1.19rem] font-black font-Satoshi text-[3.2rem] md:text-[3.5rem] text-white"
                    />
                    <p className="font-Inter mt-7 mb-11 text-white  leading-[1.6rem] text-lg font-normal">
                        {sectionText}
                    </p>
                    <motion.a
                        href={buttonLink} className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                        {buttonText}
                    </motion.a>
                </div>
            </div>
        </motion.section>
    )
}


EmergeHomepageCallToAction.fragments = {
    entry: gql`
    fragment EmergeHomepageCallToActionFragment on EmergeBlocksHomepageCallToAction {
      attributes {
        sectionHeading
        tagText
        sectionText
        buttonText
        buttonLink
      }
    }
  `,
    key: `EmergeHomepageCallToActionFragment`,
};

EmergeHomepageCallToAction.displayName = 'EmergeBlocksHomepageCallToAction'


