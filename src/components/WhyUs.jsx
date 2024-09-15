
export const WhyUs = () => {
    return <div className="py-12">
        <div className="text-4xl md:text-6xl text-center text-neutral-800 font-bold font-dm-sans mb-6">
            Why Choose <span className="font-dm-sans">Diploy</span>
        </div>
        <div className="pt-5">
            <div className="flex flex-col gap-10 justify-center items-center">
                {/* First Row */}
                <div className="flex flex-wrap items-center gap-10 justify-center">
                    <div className="sm:flex-1 max-w-xl   ">
                        <div className="flex flex-col items-center text-center pt-2">
                            <img src="/whyus1.webp" alt="Designer" className="" />
                        </div>
                    </div>
                    <div className="px-10 sm:px-0 sm:flex-1 sm:text-left sm:max-w-xl ">
                        <div className="text-gray-700 pl-5">
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ World's largest print-on-demand network</div>
                                <p className="font-dm-sans mt-2 text-neutral-600 font-light">
                                140+ print partners in 32 countries. Gelato is a truly global service.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ Sell globally, produce locally</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                Your products are produced close to your customers, wherever they are.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ 100% free editing tools</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                Create your custom products using our suite of <span className="underline">free tools.</span>
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ 60+logistics partners</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                Our global network of logistics partners ensures your products are delivered fast.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ High-quality products</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                We partner with the world's leading brands to ensure the best quality products.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ Endless creativity with Shutterstock Images</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                Access millions of images and graphics to create unique products you can sell in your store.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="font-medium text-2xl font-dm-sans">▻ 1-click integration to the leading ecommerce platforms</div>
                                <p className="font-roboto mt-2 text-neutral-600 font-light">
                                Connect your store to Gelato using <span className="underline">our integrations</span> with <span className="underline">Shopify, Etsy</span> and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
            <div className="flex justify-center items-center">
                <button
                    type="button"
                    className="flex items-center mt-4 px-10 py-3 text-md font-medium text-white bg-black rounded-md hover:px-12 transform duration-300"
                >
                    Book a meeting
                    <svg
                        className="w-4 h-4 text-white mt-0.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
}