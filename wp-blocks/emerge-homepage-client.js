import {gql} from "@apollo/client";
import {useMemo} from "react";


export default function EmergeCoreClients (props) {
    const {sectionHeading, logos} = props.attributes
    const memoizedLogos = useMemo(() => {
        const client1 = logos?.split(',')
        const client2 = logos?.split(',')
        return [...client1, ...client2]
    }, [logos])
    return (
        <section className="flex flex-col mt-28">
            <div className="hidden md:flex flex-row justify-center">
                <img src="/slider/slider.svg" className="" alt="Mouse" />
            </div>
            <div className='flex mt-10 mb-5 flex-row items-center justify-center'>
                <h3 className="text-2xl font-Inter font-medium">{sectionHeading}</h3>
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
        </section>
    )
}
EmergeCoreClients.fragments = {
    entry: gql`
    fragment EmergeCoreClientsFragment on EmergeBlocksEmergeCoreClient {
      attributes {
        sectionHeading
        logos
      }
    }
  `,
    key: `EmergeCoreClientsFragment`,
};

EmergeCoreClients.displayName = 'EmergeBlocksEmergeCoreClient'
