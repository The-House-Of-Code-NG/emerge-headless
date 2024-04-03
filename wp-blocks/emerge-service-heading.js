import {gql} from "@apollo/client";
import {motion} from 'framer-motion'
export default function EmergeServiceHeading( props ) {
    const { attributes } = props;
    return (
            <motion.section className="font-Inter semppc-management">
                <div className="inner">
                    <h2 className="!font-Satoshi">{ attributes.title }</h2>
                </div>
            </motion.section>
    );
}



EmergeServiceHeading.fragments = {
    entry: gql`
    fragment EmergeServiceHeadingFragment on EmergeBlocksServiceHeader {
      attributes {
        title
      }
    }
  `,
    key: `EmergeServiceHeadingFragment`,
};

EmergeServiceHeading.displayName = 'EmergeBlocksServiceHeader'

