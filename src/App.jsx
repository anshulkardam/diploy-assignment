import { LandingCard } from "./components/LandingCard"
import { FooterDetails } from "./components/Footer"
import { Menubar } from "./components/Menubar"
import { Navbar } from "./components/Navbar"
import { Stats } from "./components/Stats"
import { WhyUs } from "./components/WhyUs"
import { Products } from "./components/Products"
import { Showcase } from "./components/Showcase"
import { Reviews } from "./components/Reviews"
import { Support } from "./components/Support"
import BackToTopButton from "./components/BacktoTop"
import { OfferBar } from "./components/Offerbar"
import { Accel } from "./components/Accel"

function App() {

  return <div className="">
    <OfferBar/>
    <Navbar />
    <Menubar />
    <LandingCard />
    <Stats />
    <WhyUs />
    <Accel />
    <Products />
    <Showcase />
    <Reviews />
    <div className="flex justify-between items-center p-4">
      <Support />
      <BackToTopButton />
    </div>
    <FooterDetails />
  </div>

}

export default App
