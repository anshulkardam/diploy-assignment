
import Rating from '@mui/material/Rating';
export const LandingCard = () => {
    const scrollToProductInfo = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToReviewInfo = () => {
        const element = document.getElementById('review');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <div>
        <div className="grid bg-customamber md:bg-white sm:grid sm:grid-cols-1 md:grid-cols-6  xl:px-2 2xl:px-52">
            <div className=" sm:col-span-1 md:col-span-3 order-2 md:order-1">
                <div className=" px-10 md:pl-20 lg:pl-40 mb-4">
                    <p className="hidden md:block text-neutral-800  font-medium font-poppins text-4xl pt-10 mb-1 md:mb-3 sm:text-6xl md:pt-20">
                        Making it starts here
                    </p>
                    <p className="md:hidden text-neutral-800  font-medium font-poppins text-3xl pt-2 px-auto">
                        Print on demand for your ecommerce business
                    </p>
                    <p className="font-normal font-poppins text-2xl mt-5 mb-2">Sign up for free and only pay for what you sell</p>
                    <p className="font-light font-dm-sans text-md mb-4">Turn your passion into profit with the world's largest <span className="underline">print on demand</span> network.</p>
                    <div className="sm:flex sm:space-y-0 md:block md:space-y-2 lg:flex space-y-2 lg:space-y-0 font-montserrat gap-3">
                        <button type="button" className=" flex px-3 py-2 md:px-4 md:py-2.5 text-md font-semibold text-center text-white bg-black rounded-full md:hover:px-7 transform duration-300  ">
                            Get Started
                        </button>
                        <button onClick={scrollToProductInfo} type="button" className="group  text-sm md:text-base px-1 py-2 md:px-4 md:py-2  flex items-center text-gray-900 border border-gray-800 font-medium rounded-full md:hover:px-7 transform duration-300 text-center me-2 ">
                            See our Products
                            <svg className="w-6 h-6 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <img src="/shopify.svg" className="w-40 h-40 block -mt-6" />
                    <div onClick={scrollToReviewInfo} className="cursor-pointer -mt-14">
                        <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: 'rgb(70 185 158) !important', // Tailwind green-300 in hex
                                },
                            }}
                        />
                        <div className="font-dm-sans text-md font-light ml-1 hover:underline">based on 887 reviews</div>
                    </div>

                </div>
            </div>
            <div className="flex pt-2 col-span-3 text-black order-1 md:order-2 justify-center items-center">
                <img src='/hero-sm.webp' className='md:hidden px-10 w-[70vh] h-auto ' />
                <img src='/hero.webp' className='hidden md:block md:[50vh]  xl:w-[90vh] 2xl:w-[70vh] h-auto ' />

            </div>

        </div>
    </div>
}