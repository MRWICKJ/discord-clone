import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Analytics from "@/components/Landing/Analytics";
import Newsletter from "@/components/Landing/Newsletter";
import Cards from "@/components/Landing/Cards";
import Footer from "@/components/Landing/Footer";

// import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>

     );
}
export default LandingPage;