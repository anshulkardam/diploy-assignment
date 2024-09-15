import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Language } from './Language';

export const FooterDetails = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="md:flex md:justify-between items-center mb-4">
                    <div className="text-3xl font-medium font-dm-sans">Diploy</div>

                    <div className='hidden md:flex  space-x-10'>
                        <p className='text-md font-montserrat'>Find Diploy on:</p>
                        <div className="flex gap-10 cursor-pointer">
                            <InstagramIcon fontSize='medium' />
                            <FacebookIcon />
                            <img src="/tiktok.svg" className="w-6 h-6" />
                            <LinkedInIcon />
                            <YouTubeIcon />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">


                        <p className="text-xs font-montserrat mb-4">
                            Diploy has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
                        </p>
                        <button className="bg-white mb-5 text-black px-3 py-2 rounded-full text-base md:text-sm font-medium hover:bg-gray-800">
                            Get started
                        </button>
                        <div>
                            <h3 className="font-light mb-2">Get the app</h3>
                            <div className="flex space-x-2">
                                <img src="/badge.svg" width={120} height={40} alt="App Store" className="h-10" />
                                <img src="/badge-1.svg" width={120} height={40} alt="Google Play" className="h-10" />
                            </div>
                        </div>
                    </div>

                    {/* Print on demand */}
                    <div>
                        <h3 className=" font-dm-sans mb-4">Print on demand</h3>
                        <ul className="space-y-1 font-dm-sans font-light text-sm ">
                            <li className='hover:text-slate-300'>What is print on demand?</li>
                            <li className='hover:text-slate-300'>Product catalog</li>
                            <li className='hover:text-slate-300'>Shipping and delivery</li>
                            <li className='hover:text-slate-300'>Dropshipping products</li>
                            <li className='hover:text-slate-300'>Pro sellers</li>
                            <li className='hover:text-slate-300'>White label products</li>
                            <li className='hover:text-slate-300'>Returns policy</li>
                            <li className='hover:text-slate-300'>Global, yet local</li>
                            <li className='hover:text-slate-300'>Sustainability</li>
                            <li className='hover:text-slate-300'>Support</li>
                        </ul>
                    </div>

                    {/* Integrations */}
                    <div>
                        <h3 className="font-semibold mb-4">Integrations</h3>
                        <ul className="space-y-1 font-dm-sans font-light text-sm">
                            <li className='hover:text-slate-300'>Shopify</li>
                            <li className='hover:text-slate-300'>Etsy</li>
                            <li className='hover:text-slate-300'>WooCommerce</li>
                            <li className='hover:text-slate-300'>Wix</li>
                            <li className='hover:text-slate-300'>Squarespace</li>
                            <li className='hover:text-slate-300'>BigCommerce</li>
                            <li className='hover:text-slate-300'>API</li>
                        </ul>
                    </div>

                    {/* Start selling */}
                    <div>
                        <h3 className="font-semibold mb-4">Start selling</h3>
                        <ul className="space-y-1 font-dm-sans font-light text-sm">
                            <li className='hover:text-slate-300'>Embroidery</li>
                            <li className='hover:text-slate-300'>Print on demand t-shirts</li>
                            <li className='hover:text-slate-300'>Print on demand hoodies</li>
                            <li className='hover:text-slate-300'>Print on demand posters</li>
                            <li className='hover:text-slate-300'>Print on demand canvas</li>
                            <li className='hover:text-slate-300'>Print on demand calendars</li>
                            <li className='hover:text-slate-300'>Print on demand mugs</li>
                            <li className='hover:text-slate-300'>Custom products</li>
                            <li className='hover:text-slate-300'>Custom clothing</li>
                            <li className='hover:text-slate-300'>Custom merchandise</li>
                            <li className='hover:text-slate-300'>Custom phone cases</li>
                            <li className='hover:text-slate-300'>Print on demand Europe</li>
                            <li className='hover:text-slate-300'>Print on demand UK</li>
                            <li className='hover:text-slate-300'>Print on demand France</li>
                            <li className='hover:text-slate-300'>Print on demand Canada</li>
                            <li className='hover:text-slate-300'>Merch maker</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-1 font-dm-sans font-light text-sm">
                            <li className='hover:text-slate-300'>DiployConnect</li>
                            <li className='hover:text-slate-300'>About Diploy</li>
                            <li className='hover:text-slate-300'>Leadership team</li>
                            <li className='hover:text-slate-300'>Board & investors</li>
                            <li className='hover:text-slate-300'>Newsroom</li>
                            <li className='hover:text-slate-300'>Blog</li>
                            <li className='hover:text-slate-300'>Customer Stories</li>
                            <li className='hover:text-slate-300'>Partners</li>
                            <li className='hover:text-slate-300'>Careers</li>
                            <li className='hover:text-slate-300'>Affiliates program</li>
                        </ul>
                    </div>
                </div>
                <div className='md:hidden mt-4 block '>
                    <p className='text-lg font-montserrat'>Find Diploy on:</p>
                    <div className="flex gap-3 sm:gap-8 md:gap-8 lg:gap-10 justify-center p-5 items-center cursor-pointer">
                        <InstagramIcon fontSize='large' />
                        <FacebookIcon fontSize='large' />
                        <img src="/tiktok.svg" className="w-8 h-8" />
                        <LinkedInIcon fontSize='large' />
                        <YouTubeIcon fontSize='large' />
                    </div>
                </div>
                <div className="mt-12 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="md:flex order-2 md:order-1 space-x-4 space-y-2 mb-4 md:mb-0 items-center font-dm-sans">
                        <p className="text-xs hover:underline">Contact us</p> <span className='hidden md:block'>|</span>
                        <p className="text-xs hover:underline">Legal</p> <span className='hidden md:block'>|</span>
                        <p className="text-xs hover:underline">Privacy policy</p> <span className='hidden md:block'>|</span>
                        <p className="text-xs hover:underline">Cookie policy</p> <span className='hidden md:block'>|</span>
                        <p className="text-xs hover:underline">API terms</p> <span className='hidden md:block'>|</span>
                        <p className="text-xs hover:underline">Sitemap</p>
                    </div>
                    <div className="flex order-1 md:order-2 items-center space-x-4">
                        <Language />
                    </div>
                </div>
            </div>
        </footer>
    )
}
