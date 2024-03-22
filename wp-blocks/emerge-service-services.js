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
                <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
                    <div className="ppc-services-content">
                        <h2 className="ppc-services-title">{ title }</h2>
                        <p className="ppc-services-description">{ text }</p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-[21px] mt-[3.37rem] mb-[2.93rem]">
                            {memoizedServices.map((service, index) => (
                                <div className="ppc-service-item" key={index}>
                                    <img
                                        className="w-1/3 md:w-full"
                                        src={ service.imageUrl }
                                        alt="Service Slide"
                                    />
                                    <h4 className="ppc-service-title">
                                        { service.heading }
                                    </h4>
                                    <p className="ppc-service-content">
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
                                className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2"
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
