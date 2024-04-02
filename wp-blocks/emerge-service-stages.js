import {gql} from "@apollo/client";
import {motion } from 'framer-motion';
import {useMemo} from "react";

export default function EmergeServiceStages (props) {
    const {title, buttonText, buttonLink, stages} = props.attributes
    const memoizedStages = useMemo(() => {
        return JSON.parse(stages)
    }, [])
    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="stages-container">
                <h2 className="stages-title !font-Satoshi">{ title }</h2>
                <div className="stages-grid">
                    { memoizedStages.map( ( stage, index ) => (
                        <div
                            className={ `stage-item ${
                                index % 2 === 0 ? 'stage-item-reverse' : ''
                            }` }
                            key={index }
                        >
                            <img
                                src={ stage.imageUrl }
                                alt="stage-image"
                                className="stage-image w-full  md:w-3/5"
                            />
                            <div className="stage-content">
                                <div className="stage-number-container">
                                    <div className="stage-number !font-Satoshi">
                                        { index + 1 }
                                    </div>
                                </div>
                                <h2 className="stage-title !font-Satoshi">{ stage.title }</h2>
                                <p className="stage-content-text !font-Inter">
                                    { stage.content }
                                </p>
                            </div>
                        </div>
                    ) ) }
                </div>
                <motion.a
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#d62ba3"
                    }}
                    transition={{ duration: 0.5, yoyo: Infinity }}
                    href={ buttonLink }
                    className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2"
                >
                    { buttonText }
                </motion.a>
            </div>
        </motion.section>
    )
}


EmergeServiceStages.fragments = {
    entry: gql`
    fragment EmergeServiceStagesFragment on EmergeBlocksServiceStages {
      attributes {
        title
        buttonText
        buttonLink
        stages
      }
    }
  `,
    key: `EmergeServiceStagesFragment`,
};

EmergeServiceStages.displayName = 'EmergeBlocksServiceStages'

