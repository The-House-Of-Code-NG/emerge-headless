import { gql } from '@apollo/client';
import {motion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'
import {AnimatedText} from "../components/AnimatedText";
import Image from "next/image";

export default function EmergeWhatWeDo (props) {
    const targetRef = useRef();
    const extendedRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });
    const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
        target: extendedRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(
        scrollYProgressIncludingOverlap,
        [0.5, 0.75, 0.85, 1],
        [1, 2, 4.5, 1]
    );

    const x1 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.70, 0.75, 1],
        [ "0", "0", "-800vw", "0"]
    );
    const x2 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.80,  0.85, 1],
        ["0", "0", "600vw", "0"]
    );
    const x3 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.90, 0.95, 1],
        ["0", "0", "400vw", "0"]
    );

    const y1 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.70, 0.75, 1],
        [ "0", "0", "-40vh", "0"]
    );
    const y2 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.80,  0.85, 1],
        ["0", "0", "-60vh", "0"]
    );
    const y3 = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.90, 0.95, 1],
        ["0", "0", "-80vh", "0"]
    );

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.3]);
    const {
        tagText,
        sectionHeading,

    } = props.attributes
    const  serviceOne = JSON.parse(props.attributes.serviceOne)
    const  serviceTwo = JSON.parse(props.attributes.serviceTwo)
    const  serviceThree = JSON.parse(props.attributes.serviceThree)

    return (
        <>
            <div className="hidden md:block">
                <section ref={targetRef} className="w-full h-[150vh] px-[1.25rem] lg:px-[8rem] overflow-hidden bg-gradient-to-b from-transparent to-purple-100">
                    <div ref={extendedRef} className="mt-24 h-[200vh] w-full">
                        <div className="sticky top-0">
                            <motion.div style={{opacity}} className="flex flex-col items-center">
                                <div>
                        <span className='h-[36px] text-center font-Inter text-[#100650] font-medium bg-opacity-5 bg-[#4A00FF0F] rounded-[6px] px-[0.62rem] py-2'>
                     {tagText}
                    </span>
                                </div>
                                <AnimatedText
                                    el="h1"
                                    className="text-center mt-4 font-black font-Satoshi text-[42px]"
                                    text={sectionHeading}
                                    repeatDelay={10000}
                                />
                            </motion.div>
                            <motion.div style={{opacity, scale}} className="mt-[5.19rem] md:mt-14 flex flex-col md:flex-row space-y-[1.81rem] md:space-y-0 md:space-x-16 md:items-center md:justify-between">
                                <motion.div style={{ x:x1, opacity, y:y1}}  className="origin-top flex flex-col w-full  md:w-1/3">
                                    <img className="w-full md:w-[310px] h-[190px]" src={serviceOne.imageUrl} />
                                    <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceOne.heading}</h3>
                                    <p className="text-lg text-center font-Inter font-normal">{serviceOne.text}</p>
                                </motion.div>
                                <motion.div style={{  x:x2, y:y2, opacity}}  className="origin-top flex flex-col w-full  md:w-1/3">
                                    <img className="w-full md:w-[310px] h-[190px]" src={serviceTwo.imageUrl} />
                                    <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceTwo.heading}</h3>
                                    <p className="text-lg text-center font-Inter font-normal">{serviceTwo.text}</p>
                                </motion.div>
                                <motion.div style={{ x:x3,opacity, y:y3 }}  className="origin-top flex flex-col w-full  md:w-1/3">
                                    <img className="w-full md:w-[310px] h-[190px]" src={serviceThree.imageUrl} />
                                    <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceThree.heading}</h3>
                                    <p className="text-lg text-center font-Inter font-normal">{serviceThree.text}</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        <section className="block md:hidden w-full pb-[60px]  px-[1.25rem] overflow-hidden bg-gradient-to-b from-transparent to-purple-100">
        <div ref={extendedRef} className="mt-24  w-full">
            <div className="sticky top-0">
                <div  className="flex flex-col items-center">
                    <div>
                        <span className='h-[36px] text-center font-Inter text-[#100650] font-medium bg-opacity-5 bg-[#4A00FF0F] rounded-[6px] px-[0.62rem] py-2'>
                     {tagText}
                    </span>
                    </div>
                    <AnimatedText
                        el="h1"
                        className="text-center mt-4 font-black font-Satoshi text-[42px]"
                        text={sectionHeading}
                        repeatDelay={10000}
                    />
                </div>
                <div className="mt-[5.19rem] md:mt-14 flex flex-col md:flex-row space-y-[1.81rem] md:space-y-0 md:space-x-16 md:items-center md:justify-between">
                    <div className="origin-top flex flex-col w-full  md:w-1/3">
                        <Image className="w-full md:w-[310px] h-[190px]" sizes="100vw" width="0" height="0" src={serviceOne.imageUrl} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceOne.heading}</h3>
                        <p className="text-lg text-center font-Inter font-normal">{serviceOne.text}</p>
                    </div>
                    <div className="origin-top flex flex-col w-full  md:w-1/3">
                        <Image className="w-full md:w-[310px] h-[190px]" sizes="100vw" width="0" height="0" src={serviceTwo.imageUrl} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceTwo.heading}</h3>
                        <p className="text-lg text-center font-Inter font-normal">{serviceTwo.text}</p>
                    </div>
                    <div className="origin-top flex flex-col w-full  md:w-1/3">
                        <Image className="w-full md:w-[310px] h-[190px]" sizes="100vw" width="0" height="0" src={serviceThree.imageUrl} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">{serviceThree.heading}</h3>
                        <p className="text-lg text-center font-Inter font-normal">{serviceThree.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}


EmergeWhatWeDo.fragments = {
    entry: gql`
    fragment EmergeWhatWeDoFragment on EmergeBlocksHomepageServices {
      attributes {
        tagText
        sectionHeading
        serviceOne 
        serviceTwo 
        serviceThree
      }
    }
  `,
    key: `EmergeWhatWeDoFragment`,
};

EmergeWhatWeDo.displayName = 'EmergeBlocksHomepageServices'
