

export default function Footer({titles, menus}) {
    return (
        <footer className='bg-white mt-[77px]'>
            <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
                <div className='w-full pt-[3.81rem] pb-[2.5rem]'>
                    <div className='w-full flex flex-col lg:flex-row justify-between'>
                        <div className='lg:w-[372px] w-full'>
                            <img src="/logo.svg" alt='Logo' />
                            <div className='text-lg flex flex-col mt-[1.43rem]'>
                                <span>UAE 🇦🇪</span>
                                <span>
                  Levels 41 & 42, Emirates Towers - Sheikh Zayed Rd - Dubai - United Arab Emirates Phone:  <a href="tel:(02) 9055 3835" rel="noopener noreferrer" target="_blank">
                    <span className="underline">+97145813606</span>
                  </a>
                  </span>
                            </div>
                            <div className='text-lg flex flex-col mt-[1.43rem]'>

                  <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[23.0px]">
                    AUS 🇦🇺
                    <br />
                    Tower 1 L35/100 Barangaroo Ave, Barangaroo
                      <br /> NSW 2000
                    <br />
                    Phone: <a href="tel:(02) 9055 3835" rel="noopener noreferrer" target="_blank">
                    <span className="underline">(02) 9055 3835 </span>
                  </a>
                  </span>


                            </div>
                            <div className="inline-flex items-end lg:mt-[2.31rem] my-[2.31rem] gap-[20px] relative">
                                <img className="relative w-[24px] h-[24px]" alt="Group" src="/facebook.svg" />
                                <img className="relative w-[24px] h-[24px]" alt="Group" src="/instagram.svg" />
                                <img className="relative w-[24px] h-[24px]" alt="Group" src="/twitter.svg" />
                                <img className="relative w-[24px] h-[24px]" alt="Group" src="/linkedin.svg" />
                                <img className="relative w-[24px] h-[24px]" alt="Group" src="/youtube.svg" />
                            </div>
                        </div>
                        <div className="inline-flex lg:flex-row flex-col items-start lg:gap-[81px] gap-[41px] relative">
                            <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        B2B Demand Generation Services
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        App Development
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Search Engine Optimization
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Search Engine Marketing (SEM) & PPC Management
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Google Tag Manager Audits
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Google Analytics 4 Audits
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Google Analytics 4 Training
                                    </a>
                                </div>
                            </div>
                            <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Advertisers
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Contact Centres
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Martech & Adtech
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Data & Analytics
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Web3 & Payments
                                    </a>
                                </div>
                            </div>
                            <div className="inline-flex flex-col items-start lg:gap-[25px] gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Managed Hosting
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Case Studies
                                    </a>
                                </div>
                                <div className="relative w-fit font-medium text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    <a href='#'>
                                        Resources
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-t border-black opacity-[20%] mt-[2.93rem]' />
                    <div className='flex flex-col lg:flex-row w-full justify-between mt-[2.93rem]'>
                        <p className='lg:text-left text-center text-[0.87rem] leading-[1.5rem] mb-6'>© 2023 Emerge Digital. All rights reserved</p>
                        <div className="inline-flex items-start justify-center gap-[17px] relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                                <a href='#'>
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                                <a href='#'>
                                    Terms of Service
                                </a>
                            </div>
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24.6px] underline whitespace-nowrap">
                                <a href='#'>
                                    Cookies Settings
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
