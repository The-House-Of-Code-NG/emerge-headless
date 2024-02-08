import {gql} from "@apollo/client";


export default function EmergeCoreClients (props) {
    const {sectionHeading} = props.attributes
    return (
        <section className="flex flex-col mt-28">
            <div className="hidden md:flex flex-row justify-center">
                <img src="/slider/slider.svg" className="" alt="Mouse" />
            </div>
            <div className='flex mt-10 mb-5 flex-row items-center justify-center'>
                <h3 className="text-2xl font-Inter font-medium">{sectionHeading}</h3>
            </div>
            <div className="marquee-container">
                <div className="flex flex-row marquee-content">
                    <img src="/slider/1.svg" alt="Client1" />
                    <img src="/slider/2.svg" alt="Client1" />
                    <img src="/slider/3.svg" alt="Client1" />
                    <img src="/slider/4.svg" alt="Client1" />
                    <img src="/slider/5.svg" alt="Client1" />
                    <img src="/slider/6.svg" alt="Client1" />
                    <img src="/slider/2.svg" alt="Client1" />
                    <img src="/slider/3.svg" alt="Client1" />
                    <img src="/slider/4.svg" alt="Client1" />
                    <img src="/slider/1.svg" alt="Client1" />
                    <img src="/slider/2.svg" alt="Client1" />
                    <img src="/slider/1.svg" alt="Client1" />
                    <img src="/slider/2.svg" alt="Client1" />
                    <img src="/slider/3.svg" alt="Client1" />
                    <img src="/slider/4.svg" alt="Client1" />
                    <img src="/slider/5.svg" alt="Client1" />
                    <img src="/slider/6.svg" alt="Client1" />
                    <img src="/slider/2.svg" alt="Client1" />
                    <img src="/slider/3.svg" alt="Client1" />
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
      }
    }
  `,
    key: `EmergeCoreClientsFragment`,
};

EmergeCoreClients.displayName = 'EmergeBlocksEmergeCoreClient'
