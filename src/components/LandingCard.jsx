import { Cover } from "./Cover"
import Typewriter from 'typewriter-effect';
export const LandingCard = () => {
    const scrollToProductInfo = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <div>
        <div className="md:grid md:grid-cols-1 lg:grid-cols-6">
            <div className=" md:col-span-1 lg:col-span-3">
                <div className=" px-10 md:pl-40 mb-4">
                    <p className="text-neutral-800  font-semibold font-poppins text-4xl pt-10 mb-1 md:mb-3 sm:text-5xl md:pt-28">
                        <Cover >Supercharge </Cover>
                        <span className="md:ml-1">  your</span>
                    </p>

                    <Typewriter
                        options={{
                            strings: ['business', 'brand', 'startup'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "text-neutral-800 text-4xl sm:text-5xl font-semibold font-poppins"
                        }}
                    />
                    <p className="text-neutral-500 font-medium font-poppins text-lg mt-5 mb-8">It is an era of technology & we are here to become your partner.</p>
                    <div className="flex font-montserrat gap-3">
                        <button type="button" className=" flex px-3 py-2 md:px-4 md:py-2.5 text-base font-semibold text-center text-white bg-blue-500 rounded-md md:hover:px-7 transform duration-300 hover:bg-blue-600">
                          
                            Get Started
                        </button>
                        <button onClick={scrollToProductInfo} type="button" className="group  text-sm md:text-base px-1 py-2 md:px-4 md:py-2  flex items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg md:hover:px-7 transform duration-300 text-center me-2 ">
                            Our Products
                            <svg className="w-6 h-6 text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-3 lg:text-black lg:overflow-hidden">
                <div class="relative flex justify-center items-center overflow-hidden w-full h-96">
                    <img src="Mac.png" alt="Background Image" class="md:w-[100%] lg:w-[85%] xl:w-[75%]" />
                    <img src="phone.gif" alt="Overlay Image" className="absolute -bottom-4 md:-left-32 lg:-left-42 2xl:-left-48 w-4/5" />
                </div>
            </div>
        </div>
        <div className=" flex gap-8 justify-center">
            <div className="md:flex md:justify-center md:gap-8">
                <img
                    src="/treva.png"
                    className="w-28 h-28 opacity-80 hover:opacity-100 hover:transform hover:scale-110 transition-all duration-300"
                    alt="treva.png"
                />
                <img
                    src="/aven.png"
                    className="w-28 h-28 opacity-80 hover:opacity-100 hover:transform hover:scale-110 transition-all duration-300"
                    alt="aven.png"
                />
                <img
                    src="/hexa.png"
                    className="w-28 h-28 opacity-80 hover:opacity-100 hover:transform hover:scale-110 transition-all duration-300"
                    alt="hexa.png"
                />
                <img
                    src="/circle.png"
                    className="w-28 h-28 opacity-80 hover:opacity-100 hover:transform hover:scale-110 transition-all duration-300"
                    alt="circle.png"
                />
            </div>
        </div>

    </div>
}