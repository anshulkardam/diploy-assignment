export const Products = () => {
    return <div className="py-20">
        <div className="text-6xl text-center font-semibold font-poppins">
            Our Products
        </div>
        <div className="flex flex-col gap-20 justify-center items-center pt-12">
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex-1 ">
                    <div className=" max-w-lg pl-5 ">
                        <div className="text-3xl text-neutral-700 font-semibold font-poppins mb-4">
                            Astroway | Consultation App Solution
                        </div>
                        <p className="text-neutral-500 font-roboto">
                            Are you looking to start your own Online Astrology Consutation business but don’t know where to begin?
                        </p>
                        <button type="button" className="items-center mt-4 flex px-3 py-3 text-md font-medium text-center text-white bg-orange-600 rounded-md hover:px-7 transform duration-300 hover:bg-orange-700">
                            Learn more
                            <svg className="w-4 h-4 text-white mt-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col items-center text-center">
                        <img src="/Astroway-envato-aug.jpg" alt="Feature" className="rounded-md" />

                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-10">
                <div className="flex-1">
                    <div className="flex flex-col items-center text-center">
                        <img src="/chitchat-self.jpg" alt="Feature" className="rounded-md" />
                    </div>
                </div>
                <div className="flex-1 text-left">
                    <div className="text-gray-700 max-w-lg pl-5 ">
                    <div className="text-3xl text-neutral-700 font-semibold font-poppins mb-4">
                            ChitChat App | Multi-Purpose Consultation
                        </div>
                        <p className="text-neutral-500 font-roboto">
                            Start consultation with Doctors, lawyers, Motivational Gurus or astrology.
                        </p>
                        <button type="button" className="items-center mt-4 flex px-3 py-3 text-md font-medium text-center text-white bg-orange-600 rounded-md hover:px-7 transform duration-300 hover:bg-orange-700">
                            Learn more
                            <svg className="w-4 h-4 text-white mt-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>


        </div>
    </div>
}