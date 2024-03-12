import {gql} from "@apollo/client";
import {motion} from 'framer-motion';
import {useMemo} from "react";

export default function EmergeServiceBenefits (props) {
    const {title, benefits, showClients, clientsHeading, clients} = props.attributes

    const memoizedBenefits = useMemo(() => {
        return JSON.parse(benefits)
    }, [benefits])

    return (
        <motion.section
            className="w-full px-[1.25rem] py-16 lg:px-[8rem] overflow-hidden bg-gradient-to-b from-[#F4F0FF] to-transparent"
        >
            {showClients && (
                <>
                    <div
                        className={ `flex pt-10 mb-5 flex-row items-center justify-center` }
                    >
                        <h3 className="text-2xl font-Inter font-medium">
                            { clientsHeading}
                        </h3>
                    </div>
                    <div className="marquee-container">
                        <div className="flex flex-row marquee-content space-x-2">
                            {	clients
                                .split( ',' )
                                .map( ( logo, index ) => (
                                    <img
                                        className="w-[124.32px] h-[44.76px]"
                                        src={ logo.trim()}
                                        alt="Client Emerge"
                                        key={ index }
                                    />
                                ) ) }
                        </div>
                    </div>
                </>
            )}
        <dev className="benefits-container  mt-24">
            <h2 className="benefits-title">{ title }</h2>
            <div className="benefits-grid">
                {memoizedBenefits.map((benefit, index) => (
                    <div className="benefits-item" key={index}>
                        <img
                            src="/check-icon.svg"
                            alt="Check Icon"
                            className="benefits-item-check"
                        />
                        <p className="benefits-item-text">
                            { benefit }
                        </p>
                    </div>
                ))}
            </div>
        </dev>
        </motion.section>
    )
}


EmergeServiceBenefits.fragments = {
    entry: gql`
    fragment EmergeServiceBenefitsFragment on EmergeBlocksServiceBenefits {
      attributes {
        title
        benefits
        showClients
        clientsHeading
        clients
      }
    }
  `,
    key: `EmergeServiceBenefitsFragment`,
};

EmergeServiceBenefits.displayName = 'EmergeBlocksServiceBenefits'
