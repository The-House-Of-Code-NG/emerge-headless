import { motion, AnimatePresence } from 'framer-motion';
import { gql } from "@apollo/client";
import { useMemo, useState } from 'react';

export default function EmergeCoreFaq(props) {
    const { attributes } = props;
    const { heading, questions } = attributes;

    const [activeIndex, setActiveIndex] = useState(null);

    const memoizedQuestions = useMemo(() => {
        return JSON.parse(questions);
    }, [questions]);

    const handleToggle = (index) => {
        setActiveIndex((prevActiveIndex) =>
            prevActiveIndex === index ? null : index
        );
    };

    return (
        <section className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden mb-[3.373rem]">

            <div className="w-full mt-[7.31rem]">
                <h2 className="text-center text-black text-[30px] mb-[4.75rem] font-black font-Satoshi leading-[3.94rem]">
                    Frequently asked questions
                </h2>
                {memoizedQuestions.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full ${
                            activeIndex === index && 'active'
                        } ${index !== 0 && 'mt-[2.18rem]'}`}
                    >
                        <button
                            className="accordion-button flex justify-between w-full"
                            onClick={() => handleToggle(index)}
                        >
                            <h4 className="lg:mb-[1.5rem] text-left text-[1.62rem] lg:text-[30px] font-Satoshi leading-[2.12rem] font-bold">
                                {item.question}
                            </h4>
                                {activeIndex === index ? (
                                    <img
                                        key="up-chevron"
                                        src="/chevronUp.svg"
                                        alt="Chevron Icon"
                                    />
                                ) : (
                                    <img
                                        key="down-chevron"
                                        src="/chevronDown.svg"
                                        alt="Chevron Icon"
                                    />
                                )}
                        </button>
                        <div className="pt-[0.5rem]">
                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            collapsed: {
                                                opacity: 0,
                                                height: 0,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        className="font-Inter font-normal text-[1.125rem] leading-[2.18994rem]"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}

                            </AnimatePresence>
                            <motion.div
                                className="ml-2 mt-[1rem] border-b-[0.0625rem] border-[#282828]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

EmergeCoreFaq.fragments = {
    entry: gql`
        fragment EmergeCoreFaqFragment on EmergeBlocksEmergeFaq {
            attributes {
                heading
                questions
            }
        }
    `,
    key: `EmergeCoreFaqFragment`,
};

EmergeCoreFaq.displayName = 'EmergeBlocksEmergeFaq';
