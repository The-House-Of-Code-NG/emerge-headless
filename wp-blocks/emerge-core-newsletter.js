import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
export default function EmergeCoreNewsletter( props ) {
    const { attributes } = props;
    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="bg-[#100650] bg-auto bg-no-repeat bg-[url('/Vector.svg')] bg-left-top mb-28 rounded-[24px] px-6 md:px-20  pb-12 ">
                <div className="flex flex-col md:flex-row">
                    <div className="pt-12">
                        <h1 className="w-full md:w-2/3 font-black font-Satoshi text-white text-[48px] leading-[57px]">
                            { attributes?.heading }
                        </h1>
                        <p className="font-Inter font-normal text-lg mt-3.5 text-white">
                            { attributes?.paragraph }
                        </p>
                        <div className="flex flex-col mt-5 w-[300px]">
                            <input
                                placeholder="your full name"
                                className=" px-2 text-white bg-[#2D2466] outline-none border-[1px] border-white/20 h-[50px] py-2 rounded-[9px]"
                            />
                            <input
                                placeholder="your email address"
                                className="px-2 bg-[#2D2466] text-white outline-none  border-[1px] border-white/20 mt-3.5 h-[50px] py-2 rounded-[9px]"
                            />
                            <button className="mt-3.5 flex flex-row justify-center text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                                { attributes?.buttonText }
                            </button>
                        </div>
                    </div>
                    <div className="-pt-12">
                        <img className="" src="/newsletter.svg" />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}


EmergeCoreNewsletter.fragments = {
    entry: gql`
    fragment EmergeCoreNewsletterFragment on EmergeBlocksEmergeCoreNewsletter {
      attributes {
        buttonText
        paragraph
        heading
      }
    }
  `,
    key: `EmergeCoreNewsletterFragment`,
};

EmergeCoreNewsletter.displayName = 'EmergeBlocksEmergeCoreNewsletter'



