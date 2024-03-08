import {motion} from 'framer-motion'
import {gql} from "@apollo/client";
export default function EmergeHomepageWhyUs( props ) {
    const { attributes } = props;
    const { reason1, reason2, reason3, reason4, reason5, reason6 } = attributes;
    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <section className="my-16">
                <div className="grid grid-cols-2 items-center md:grid-cols-3 gap-y-28">
                    <div className="flex flex-col">
                        <svg
                            width="97"
                            height="70"
                            viewBox="0 0 97 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M32.5 0.373815C32.5 0.16736 32.6674 0 32.8738 0C68.0136 0 96.5 28.4864 96.5 63.6262V69.5911C96.5 69.8169 96.3169 70 96.0911 70H64.5C46.8269 70 32.5 55.6731 32.5 38V0.373815Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M5.9 70.0002V57.9002H24.7V11.1002H23.8L9.6 29.7002L0 22.2002L16.7 0.200195H39.7V57.9002H54.5V70.0002H5.9Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason1 }
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <svg
                            width="75"
                            height="71"
                            viewBox="0 0 75 71"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M74.7986 38C74.7986 58.4345 58.2331 71 37.7985 71C-9.70141 63.5 37.7987 41.9345 37.7987 21.5C37.7987 1.06546 17.3641 1 37.7986 1C58.2332 1 74.7986 17.5655 74.7986 38Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M50.9 71H1.5V57.3L23 38.9C24.9333 37.2333 26.5667 35.7333 27.9 34.4C29.2333 33 30.3 31.6667 31.1 30.4C31.9667 29.0667 32.5667 27.7667 32.9 26.5C33.3 25.2333 33.5 23.8667 33.5 22.4V21C33.5 19.6667 33.2333 18.5 32.7 17.5C32.1667 16.5 31.4667 15.6667 30.6 15C29.7333 14.3333 28.7333 13.8333 27.6 13.5C26.5333 13.1667 25.4333 13 24.3 13C22.6333 13 21.1667 13.2667 19.9 13.8C18.7 14.3333 17.6333 15.0667 16.7 16C15.8333 16.8667 15.1 17.9 14.5 19.1C13.9 20.2333 13.4333 21.4667 13.1 22.8L0 17.8C0.8 15.4 1.9 13.1333 3.3 11C4.7 8.8 6.43333 6.9 8.5 5.3C10.6333 3.63333 13.1333 2.33333 16 1.4C18.8667 0.466666 22.1 0 25.7 0C29.5 0 32.8667 0.533333 35.8 1.6C38.7333 2.66667 41.2 4.13333 43.2 6C45.2667 7.86667 46.8333 10.1 47.9 12.7C48.9667 15.2333 49.5 18 49.5 21C49.5 24 49 26.7333 48 29.2C47 31.6667 45.6333 34 43.9 36.2C42.2333 38.3333 40.2667 40.3667 38 42.3C35.7333 44.2333 33.3667 46.2 30.9 48.2L17.9 58.4H50.9V71Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason2 }
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <svg
                            width="87"
                            height="74"
                            viewBox="0 0 87 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M35.7362 8.57669C30.7262 7.37429 31.5987 0 36.751 0H77.7953C82.8789 0 87 4.1211 87 9.20474V63.2746C87 68.9219 82.4219 73.5 76.7746 73.5H30.2098C25.5121 73.5 24.6228 66.8226 29.1567 65.5931C29.3851 65.5312 29.6076 65.4492 29.8217 65.3481L35.2772 62.7719C41.9828 59.6054 44.7713 51.5427 41.455 44.9099L40.7604 43.5208C38.7873 39.5746 39.3888 34.8279 42.2839 31.4986C45.3917 27.9246 45.8347 22.7522 43.3799 18.7018L38.4401 10.5512C37.8385 9.55853 36.8649 8.84758 35.7362 8.57669Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M29.2016 29.8C32.9349 29.8 35.6349 29.1 37.3016 27.7C39.0349 26.2333 39.9016 24.4333 39.9016 22.3V21.6C39.9016 19.0667 39.0682 17.0333 37.4016 15.5C35.8016 13.9667 33.5016 13.2 30.5016 13.2C27.7016 13.2 25.0682 13.9333 22.6016 15.4C20.1349 16.8 18.0349 18.8333 16.3016 21.5L6.90156 12.7C8.2349 10.9667 9.66823 9.4 11.2016 8C12.7349 6.53333 14.4682 5.3 16.4016 4.3C18.3349 3.23333 20.5016 2.43333 22.9016 1.9C25.3016 1.3 28.0016 1 31.0016 1C34.7349 1 38.1016 1.43333 41.1016 2.3C44.1682 3.16667 46.7682 4.43334 48.9016 6.1C51.1016 7.7 52.7682 9.63333 53.9016 11.9C55.1016 14.1667 55.7016 16.7 55.7016 19.5C55.7016 21.7 55.3349 23.7 54.6016 25.5C53.9349 27.3 52.9682 28.8667 51.7016 30.2C50.5016 31.5333 49.1016 32.6333 47.5016 33.5C45.9016 34.3 44.2016 34.8667 42.4016 35.2V35.8C44.4682 36.2 46.3682 36.8667 48.1016 37.8C49.9016 38.6667 51.4349 39.8 52.7016 41.2C54.0349 42.6 55.0682 44.2667 55.8016 46.2C56.5349 48.0667 56.9016 50.2 56.9016 52.6C56.9016 55.7333 56.2682 58.5667 55.0016 61.1C53.7349 63.6333 51.9349 65.8 49.6016 67.6C47.2682 69.4 44.4682 70.8 41.2016 71.8C37.9349 72.7333 34.3349 73.2 30.4016 73.2C26.8682 73.2 23.7349 72.8333 21.0016 72.1C18.2682 71.3667 15.8682 70.4 13.8016 69.2C11.8016 67.9333 10.0349 66.5 8.50156 64.9C7.0349 63.3 5.7349 61.6 4.60156 59.8L15.7016 51.2C17.2349 54.0667 19.1016 56.4333 21.3016 58.3C23.5682 60.1 26.6016 61 30.4016 61C33.8016 61 36.4349 60.1667 38.3016 58.5C40.2349 56.7667 41.2016 54.4333 41.2016 51.5V50.9C41.2016 48.0333 40.1016 45.9 37.9016 44.5C35.7682 43.0333 32.8016 42.3 29.0016 42.3H22.7016V29.8H29.2016Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason3 }
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <svg
                            width="102"
                            height="108"
                            viewBox="0 0 102 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 22.3455C37.5 22.139 37.6674 21.9717 37.8738 21.9717C73.0136 21.9717 101.5 50.4581 101.5 85.5979V91.5628C101.5 91.7886 101.317 91.9717 101.091 91.9717H69.5C51.8269 91.9717 37.5 77.6448 37.5 59.9717V22.3455Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M32.77 90V77.0467H2.41667V64.6733L29.29 22.5267H46.69V65.8333H55.39V77.0467H46.69V90H32.77ZM14.1133 65.8333H32.77V37.51H31.9L14.1133 65.8333Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason4 }
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <svg
                            width="91"
                            height="115"
                            viewBox="0 0 91 115"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M90.7988 60.6943C90.7988 81.1289 74.2332 93.6943 53.7987 93.6943C50 51.5 18.5 65.4345 18.5 45C18.5 24.5655 33.3643 23.6943 53.7988 23.6943C74.2333 23.6943 90.7988 40.2598 90.7988 60.6943Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M54.25 37.41H20.8733L19.22 60.2467H20.15C20.9078 58.5933 21.7689 57.0778 22.7333 55.7C23.6978 54.2533 24.8344 53.0478 26.1433 52.0833C27.4522 51.05 28.9678 50.2578 30.69 49.7067C32.4122 49.1556 34.3756 48.88 36.58 48.88C39.5422 48.88 42.3322 49.3967 44.95 50.43C47.6367 51.4633 49.9789 52.9789 51.9767 54.9767C54.0433 56.9056 55.6622 59.3167 56.8333 62.21C58.0044 65.0344 58.59 68.2378 58.59 71.82C58.59 75.4711 57.97 78.8467 56.73 81.9467C55.49 85.0467 53.6644 87.7333 51.2533 90.0067C48.9111 92.28 45.9833 94.0711 42.47 95.38C38.9567 96.62 34.9611 97.24 30.4833 97.24C26.97 97.24 23.8356 96.8611 21.08 96.1033C18.3244 95.3456 15.8789 94.3467 13.7433 93.1067C11.6767 91.7978 9.85111 90.3167 8.26667 88.6633C6.75111 86.9411 5.44222 85.1844 4.34 83.3933L15.6033 74.5067C16.43 75.8844 17.2911 77.1933 18.1867 78.4333C19.1511 79.6733 20.2189 80.7756 21.39 81.74C22.63 82.6356 23.9733 83.3589 25.42 83.91C26.9356 84.3922 28.6578 84.6333 30.5867 84.6333C34.4444 84.6333 37.3378 83.6 39.2667 81.5333C41.2644 79.3978 42.2633 76.5733 42.2633 73.06V72.2333C42.2633 68.8578 41.2644 66.2056 39.2667 64.2767C37.2689 62.3478 34.5133 61.3833 31 61.3833C28.1067 61.3833 25.6956 61.9689 23.7667 63.14C21.9067 64.2422 20.4944 65.3444 19.53 66.4467L6.82 64.69L9.50667 23.8733H54.25V37.41Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason5 }
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <svg
                            width="102"
                            height="113"
                            viewBox="0 0 102 113"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.0959 39.7622C19.386 32.4324 24.7125 23.7666 32.9277 23.7666H86C94.8366 23.7666 102 30.93 102 39.7666V81.2666C102 90.1032 94.8366 97.2666 86 97.2666H22.5082C21.3407 97.2666 21.1196 95.607 22.2465 95.3015L43.1347 89.6368C44.0431 89.3905 44.928 89.0645 45.7791 88.6626L49.6312 86.8435C56.6912 83.5097 59.6271 75.0209 56.1355 68.0376C53.8894 63.5454 49.397 60.6122 44.3809 60.3626L17 59L22.4328 50.8508C24.637 47.5445 24.8903 43.3076 23.0959 39.7622Z"
                                fill="#E7D3FF"
                            />
                            <path
                                d="M30.9067 96.22C26.6367 96.22 22.8072 95.5761 19.4183 94.2883C16.0972 92.9328 13.2844 91.035 10.98 88.595C8.67556 86.0872 6.91333 83.105 5.69333 79.6483C4.47333 76.1917 3.86333 72.3283 3.86333 68.0583C3.86333 63.1106 4.64278 58.4339 6.20167 54.0283C7.76056 49.555 9.76 45.4544 12.2 41.7267C14.7078 37.9311 17.4867 34.5422 20.5367 31.56C23.6544 28.5778 26.7383 26.07 29.7883 24.0367H50.8333C46.4278 27.0867 42.4628 30.035 38.9383 32.8817C35.4817 35.6606 32.4317 38.4733 29.7883 41.32C27.2128 44.0989 25.0778 46.9794 23.3833 49.9617C21.7567 52.9439 20.5706 56.1633 19.825 59.62L20.74 59.925C21.35 58.5694 22.0956 57.2478 22.9767 55.96C23.8578 54.6722 24.9422 53.5539 26.23 52.605C27.5178 51.5883 29.0089 50.775 30.7033 50.165C32.4656 49.555 34.4989 49.25 36.8033 49.25C39.7856 49.25 42.5644 49.7922 45.14 50.8767C47.7156 51.8933 49.9183 53.3844 51.7483 55.35C53.6461 57.2478 55.1372 59.5522 56.2217 62.2633C57.3061 64.9744 57.8483 68.0244 57.8483 71.4133C57.8483 75.0056 57.2044 78.3267 55.9167 81.3767C54.6289 84.4267 52.7989 87.07 50.4267 89.3067C48.1222 91.4756 45.3094 93.17 41.9883 94.39C38.6672 95.61 34.9733 96.22 30.9067 96.22ZM30.805 84.325C34.465 84.325 37.2439 83.3761 39.1417 81.4783C41.0394 79.5128 41.9883 76.7678 41.9883 73.2433V71.82C41.9883 68.2956 41.0056 65.6183 39.04 63.7883C37.1422 61.8906 34.3972 60.9417 30.805 60.9417C27.3483 60.9417 24.6372 61.8906 22.6717 63.7883C20.7061 65.6183 19.7233 68.2956 19.7233 71.82V73.2433C19.7233 76.7678 20.6383 79.5128 22.4683 81.4783C24.3661 83.3761 27.145 84.325 30.805 84.325Z"
                                fill="black"
                            />
                        </svg>
                        <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">
                            { reason6 }
                        </h3>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}

EmergeHomepageWhyUs.fragments = {
    entry: gql`
    fragment EmergeHomepageWhyUsFragment on EmergeBlocksHomepageWhyUs {
      attributes {
        reason1
        reason2
        reason3
        reason4
        reason5
        reason6
      }
    }
  `,
    key: `EmergeHomepageWhyUsFragment`,
};

EmergeHomepageWhyUs.displayName = 'EmergeBlocksHomepageWhyUs'
