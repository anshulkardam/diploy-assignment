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
        <div className="grid grid-cols-6">
            <div className="col-span-3">
                <div className="pl-40 mb-4">
                    <p className="pt-28 mb-3 text-neutral-800 text-5xl font-semibold font-poppins">
                        <Cover >Supercharge </Cover>
                        <span className="ml-1">  your</span>
                    </p>
                    <Typewriter
                        options={{
                            strings: ['business', 'brand', 'startup'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: " text-neutral-800 text-5xl font-semibold font-poppins"
                        }}
                    />
                    <p className="text-neutral-500 font-medium font-poppins text-lg mt-5 mb-8">It is an era of technology & we are here to become your partner.</p>
                    <div className="flex font-montserrat gap-3">
                        <button type="button" className="flex px-4 py-2.5 text-base font-semibold text-center text-white bg-blue-500 rounded-md hover:px-7 transform duration-300 hover:bg-blue-600">
                            <svg className="w-6 h-6 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Get Started
                        </button>
                        <button onClick={scrollToProductInfo} type="button" className="group flex items-center text-gray-900 text-base hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg px-4 py-2 hover:px-7 transform duration-300 text-center me-2 ">
                            Our Products
                            <svg className="w-6 h-6 text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-3 text-black overflow-hidden">
                <div class="relative flex justify-center items-center overflow-hidden w-full h-96">
                    <img src="Mac.png" alt="Background Image" class=" w-[100%]" />
                    <img src="phone.gif" alt="Overlay Image" className="absolute -bottom-4 -left-32 w-4/5" />
                </div>
            </div>
        </div>
        <div className="flex gap-8 justify-center">
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
}