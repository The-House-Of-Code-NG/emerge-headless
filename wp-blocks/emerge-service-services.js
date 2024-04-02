import {gql} from "@apollo/client";
import {motion} from 'framer-motion';
import {useMemo} from "react";

export default function EmergeServiceServices (props) {
    const {title, text, buttonLink, buttonText, services} = props.attributes

    const memoizedServices = useMemo(() => {
        return JSON.parse(services)
    }, [services])

    return (
        <motion.div className="ppc-services-container my-10">
            <div
                className="ppc-services-background"
                style={ { backgroundColor: '#100650' } }
            >
                <div className="w-full px-[20px] lg:px-[128px] overflow-hidden">
                    <div className="ppc-services-content">
                        <h2 className="ppc-services-title !font-Satoshi">{ title }</h2>
                        <p className="ppc-services-description !font-Inter">{ text }</p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1.3125rem] mt-[53.92px] mb-[46.88px]">
                            {memoizedServices.map((service, index) => (
                                <div className="ppc-service-item" key={index}>
                                    <img
                                        className="w-1/3 md:w-full"
                                        src={ service.imageUrl }
                                        alt="Service Slide"
                                    />
                                    <h4 className="ppc-service-title !font-Satoshi">
                                        { service.heading }
                                    </h4>
                                    <p className="ppc-service-content !font-Inter">
                                        { service.text }
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="ppc-services-cta">
                            <motion.a
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#d62ba3"
                                }}
                                transition={{ duration: 0.5, yoyo: Infinity }}
                                href={ buttonLink }
                                className="mt-5 text-white text-lg text-center !font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[.5rem] px-3.5 py-2"
                            >
                                { buttonText }
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

EmergeServiceServices.fragments = {
    entry: gql`
    fragment EmergeServiceServicesFragment on EmergeBlocksServiceService {
      attributes {
        title
        text
        services
        buttonLink
        buttonText
      }
    }
  `,
    key: `EmergeServiceServicesFragment`,
};

EmergeServiceServices.displayName = 'EmergeBlocksServiceService'
