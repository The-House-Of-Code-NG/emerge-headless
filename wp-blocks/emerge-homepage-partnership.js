import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
export default function EmergeHomepagePartnership  (props)  {
    const {tagText, sectionHeading, sectionTextOne, sectionTextTwo} = props.attributes
    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-start">
                <div className="mb-[3.44rem] md:mb-0 w-ull md:w-1/2">
					<span className="inline-flex text-sm md:text-base text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#4A00FF0F]/5 px-2.5 rounded-[6px] py-2">
						{ tagText }
					</span>
                    <h3 className="font-black font-Satoshi leading-[3.24rem] md:leading-[3.94rem] text-[2.875rem] md:text-[3.125rem] mt-[1.56rem] md:mt-8">
                        { sectionHeading }
                    </h3>
                    <div className="flex flex-col mt-5">
                        <p className="text-black font-Inter text-lg leading-[35px]">
                            { sectionTextOne }
                        </p>
                        <p className="mt-5 text-black font-Inter text-lg leading-[35px]">
                            { sectionTextTwo }
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img alt="Strategic partnership" className="aspect-w-11 aspect-h-10" src="/pyramid.svg" />
                </div>
            </div>
        </motion.section>
    )
}

EmergeHomepagePartnership.fragments = {
    entry: gql`
    fragment EmergeHomepagePartnershipFragment on EmergeBlocksHomepagePartnership {
      attributes {
        sectionHeading
        tagText
        sectionTextTwo
        sectionTextOne
      }
    }
  `,
    key: `EmergeHomepagePartnershipFragment`,
};

EmergeHomepagePartnership.displayName = 'EmergeBlocksHomepagePartnership'


