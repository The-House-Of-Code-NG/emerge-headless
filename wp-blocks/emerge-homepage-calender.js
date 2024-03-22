import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
import CalendlyEmbed from "../components/calendlyEmbed";

export default function EmergeHomepageCalender( props ) {
    const { attributes } = props;
    const { heading, tagText } = attributes;
    return (
            <motion.section id="book-a-meeting" className="bg-[url('/talk-cover.svg')] pt-20 bg-[#E6F7F3] mb-24">
                <div className="flex flex-col items-center">
					<span className="text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#B5E0D6]/40 px-2.5 rounded-[6px] py-2">
						{ tagText }
					</span>
                    <h3 className="px-7 md:px-0 mt-4 text-center md:text-left font-black font-Satoshi text-[42px]">
                        { heading }
                    </h3>
                    <div
                        className="mt-7 px-3.5 md:px-0"
                        style={ {
                            minWidth: 400,
                            height: 511,
                            overflow: 'hidden',
                        } }
                    >
                        <CalendlyEmbed />
                    </div>
                </div>
            </motion.section>
    );
}

EmergeHomepageCalender.fragments = {
    entry: gql`
    fragment EmergeHomepageCalenderFragment on EmergeBlocksHomepageBookAMeeting {
      attributes {
        heading
        tagText
      }
    }
  `,
    key: `EmergeHomepageCalenderFragment`,
};

EmergeHomepageCalender.displayName = 'EmergeBlocksHomepageBookAMeeting'
