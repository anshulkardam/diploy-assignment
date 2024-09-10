import { LandingCard } from "./components/LandingCard"
import { FooterDetails } from "./components/Footer"
import { Menubar } from "./components/Menubar"
import { Navbar } from "./components/Navbar"
import { Stats } from "./components/stats"
import { WhyUs } from "./components/WhyUs"
import { Products } from "./components/Products"
import { Showcase } from "./components/Showcase"
import { Reviews } from "./components/Reviews"
import { Support } from "./components/Support"

function App() {

  return <div className="bg-slate-100 min-h-screen">
    <Navbar />
    <Menubar />
    <LandingCard />
    <Stats />
    <WhyUs />
    <Products/>
    <Showcase />
    <Reviews />
    <Support />
    <FooterDetails />
  </div>

}

export default App
