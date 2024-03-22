import {gql} from "@apollo/client";
import {motion} from 'framer-motion';
import {useMemo} from "react";

export default function EmergeServiceBenefits (props) {
    const {title, benefits, showClients, clientsHeading, clients} = props.attributes

    const memoizedBenefits = useMemo(() => {
        return JSON.parse(benefits)
    }, [benefits])


    const memoizedLogos = useMemo(() => {
        const client1 = clients?.split(',')
        const client2 = clients?.split(',')
        return [...client1, ...client2]
    }, [clients])

    return (
        <motion.section
            className="w-full py-16  overflow-hidden bg-gradient-to-b from-[#F4F0FF] to-transparent"
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

                    <div className="relative overflow-hidden">
                        <div className="flex gap-4 marque">
                            <div className="marquee__group">
                                {memoizedLogos.map((logo, index) => (
                                    <div className="max-w-[222px] max-h-[181px]">
                                        <img
                                            className="object-cover"
                                            src={ logo.trim() }
                                            alt="Client Emerge"
                                            key={ index }
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="marquee__group">
                                {memoizedLogos.map((logo, index) => (
                                    <div className="max-w-[222px] max-h-[181px]">
                                        <img
                                            className="object-cover"
                                            src={ logo.trim() }
                                            alt="Client Emerge"
                                            key={ index }
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="px-[1.25rem]  lg:px-[8rem]">
                <div className="benefits-container  mt-24">
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
                </div>
            </div>

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
