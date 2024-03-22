import {motion} from 'framer-motion'
import {gql} from "@apollo/client";

export default function EmergeCaseStudy ({attributes}) {
    const {
        buttonText,
        buttonLink,
        richText,
        title,
        tagText,
        caseStudyText,
        caseStudyHeading,
        imageUrl,
    } = attributes;
    return (
        <motion.section className="case-study-container mt-24">
            <div className="w-full px-[1.25rem] py-[8rem] lg:px-[8rem] overflow-hidden">
                <div className="case-study-content">
                    <div className="grid-container">
                        <div className="text-block">
                            <div className={ `tag tag-transparent` }>
                                { tagText }
                            </div>
                            <h2 className="case-study-title">{ title }</h2>
                            <p className="case-study-content-text">
                                { richText }
                            </p>
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
                        <div className="image-block">
                            <h2 className="image-top-text">
                                { caseStudyHeading }
                            </h2>
                            <div className="image-wrapper">
                                <img
                                    className="image"
                                    src={ imageUrl }
                                    alt="Service Slide"
                                />
                                <div className="image-bottom-text">
                                    { caseStudyText }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}


EmergeCaseStudy.fragments = {
    entry: gql`
    fragment EmergeCaseStudyFragment on EmergeBlocksServiceCaseStudy {
      attributes {
        buttonText
        buttonLink
        richText
        title
        tagText
        caseStudyText
        caseStudyHeading
        imageUrl
      }
    }
  `,
    key: `EmergeCaseStudyFragment`,
};

EmergeCaseStudy.displayName = 'EmergeBlocksServiceCaseStudy'

