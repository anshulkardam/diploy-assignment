export const Accel = () => {
    return (
        <div className="py-10 flex flex-col justify-center items-center  px-4 md:px-10 lg:px-20 bg-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 max-w-7xl">
                {/* Left Side: Text */}
                <div className="col-span-1">
                    <div className="w-full text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Accelerate business growth with innovative design tools and apps
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-4">
                            See how our cutting-edge solutions can help you reach new customers and maximize your profits.
                        </p>
                        <div className="flex justify-center md:justify-start">
                        <button
                            type="button"
                            className="items-center flex justify-center px-5 py-2 text-md font-semibold text-white rounded-full bg-black hover:text-gray-400" >
                            Get Started
                        </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="col-span-1 mt-6 md:mt-0">
                    <div className="w-full">
                        <img
                            src="/intro-image.png"
                            alt="intro-image"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
