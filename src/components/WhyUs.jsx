
export const WhyUs = () => {

    return <div className="pt-6">
        <div className="text-6xl text-center font-medium font-sans mb-6">
            Why Choose <span className="font-pacifico">Diploy</span>
        </div>
        <div className="pt-10">
            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="flex flex-wrap items-center gap-10">
                    <div className="flex-1 p-6 max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 mr-4">
                        <div className="flex flex-col items-center text-center">
                            <img src="/designer.png" alt="Designer" className="w-36 h-36 mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
                            <p className="text-gray-700 ">
                                UI/UX is crucial for success in the app industry, and we ensure it stays up-to-date with current trends.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 text-left">
                        <div className="text-gray-700 max-w-sm pl-5 ">
                            <div className="mb-5">
                                <div className="font-semibold text-xl font-poppins">▻ Innovative Design:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Transform your vision into reality with cutting-edge UI/UX that sets trends, not follows them.</p>
                            </div>
                            <div>
                                <div className="font-semibold text-xl font-poppins">▻ User-Centric Approach:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Prioritize user satisfaction with intuitive interfaces and engaging experiences tailored to your audience's needs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-10">
                    <div className="flex-1 text-right ">
                        <div className="text-gray-700 max-w-sm pl-5 ">
                            <div className="mb-5">
                                <div className="font-semibold text-xl font-poppins">▻ Top-Tier Security:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Protect your digital assets with our state-of-the-art security solutions, safeguarding against threats and ensuring peace of mind.</p>
                            </div>
                            <div>
                                <div className="font-semibold text-xl font-poppins">▻ Performance Excellence:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Maximize efficiency and speed with our optimized applications designed for high performance and reliability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 ml-4">
                        <div className="flex flex-col items-center text-center">
                            <img src="/feature-2.png" alt="Feature" className="w-36 h-36 mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Secure Connection</h2>
                            <p className="text-gray-700">
                                Our solutions are developed with robust security measures to deter scammers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-10">
                    <div className="flex-1 p-6 max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 mr-4">
                        <div className="flex flex-col items-center text-center">
                            <img src="/feature-3.png" alt="Feature" className="w-36 h-36 mb-4" />
                            <h2 className="text-xl font-semibold mb-2">No Coding Required</h2>
                            <p className="text-gray-700">
                                Empower Your User’s Digital Experience with Our Cross-Platform App Excellence.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 text-left">
                        <div className="text-gray-700 max-w-sm pl-5 ">
                            <div className="mb-5">
                                <div className="font-semibold text-xl font-poppins">▻ Scalable Growth:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Future-proof your business with scalable solutions that adapt to your needs, from startup to enterprise-level projects.</p>
                            </div>
                            <div>
                                <div className="font-semibold text-xl font-poppins">▻ No-Code Solutions:</div>
                                <p className="font-roboto mt-2 text-neutral-500"> Empower your team with intuitive tools that require no coding expertise, enabling rapid development and deployment of digital products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
            <button type="button" className="items-center mt-4 flex px-10 py-3 text-md font-medium text-center text-white bg-black rounded-md hover:px-12 transform duration-300">
                Book a meeting 
                <svg className="w-4 h-4 text-white mt-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
            </button>
            </div>
        </div>

    </div>
}