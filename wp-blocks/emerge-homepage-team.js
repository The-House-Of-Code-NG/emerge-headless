import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
import {useMemo} from "react";

export default function EmergeHomepageTeam( props ) {
    const { attributes } = props;
    const {
        sectionHeading,
        members
    } = attributes;

    const memoizedMembers = useMemo(() => {
        return JSON.parse(members)
    }, [members])


    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
            >
            <motion.div className="my-[6.44rem]">
                <h1 className="font-black text-[3.125rem] font-Satoshi text-center">
                    { sectionHeading }
                </h1>
                <div className="grid grid-cols-3 gap-x-[2.69rem] gap-y-[1.87rem] mt-[4.6rem]">
                    {memoizedMembers?.map((member, index) => (
                        <div className="flex flex-col" key={index}>
                            <img src={ member.imageUrl } alt="Service Slide" />
                            <div>
                                <h3 className="font-Inter font-medium text-[1.625rem]">
                                    { member.name }
                                </h3>
                                <p className="font-Inter font-medium text-[1.125rem]">
                                    { member.position }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </motion.section>
    );
}

EmergeHomepageTeam.fragments = {
    entry: gql`
    fragment EmergeHomepageTeamFragment on EmergeBlocksHomepageTeam {
      attributes {
        sectionHeading
        members
      }
    }
  `,
    key: `EmergeHomepageTeamFragment`,
};

EmergeHomepageTeam.displayName = 'EmergeBlocksHomepageTeam'
