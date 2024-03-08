import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
import {useMemo, useState} from 'react'
export default function EmergeCoreFaq( props ) {
    const { attributes } = props;
    const { heading, questions } = attributes;

    const [ activeIndex, setActiveIndex ] = useState( 0 );

    const memoizedQuestion = useMemo(() => {
            return JSON.parse(questions)
    }, [questions])
    const handleToggle = ( index ) => {
        setActiveIndex( ( prevActiveIndex ) =>
            prevActiveIndex === index ? null : index
        );
    };

    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="w-full mt-[7.31rem]">
                <h2 className="text-center text-black text-[30px] mb-[4.75rem] font-bold font-Satoshi leading-[3.94rem]">
                    { heading }
                </h2>
                { memoizedQuestion.map( ( item, index ) => (
                    <div
                        key={ index }
                        className={ `w-full  ${
                            activeIndex === index && 'active'
                        } ${ index !== 0 && 'mt-[2.18rem]' }` }
                    >
                        <button
                            className="accordion-button flex justify-between w-full"
                            onClick={ () => handleToggle( index ) }
                        >
                            <h4 className="mb-[1.5rem] text-[1.62rem] lg:text-[30px] font-Satoshi leading-[2.12rem] font-bold">
                                { item.question }
                            </h4>

                            { activeIndex === index ? (
                                <img src="/chevronUp.svg" alt="Chevron Icon" />
                            ) : (
                                <img src="/chevronDown.svg" alt="Chevron Icon" />
                            ) }
                        </button>
                        { activeIndex === index && (
                            <p
                                className={ `mt-[0.5rem] mb-[1rem] font-Inter font-normal text-[1.125rem] leading-[2.18994rem]` }
                            >
                                { item.answer }
                            </p>
                        ) }
                        <div className="ml-2 border-b-[0.0625rem] border-[#282828]" />
                    </div>
                ) ) }
            </div>
        </motion.section>
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

EmergeCoreFaq.displayName = 'EmergeBlocksEmergeFaq'




