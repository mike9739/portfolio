import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "@/components/NavBar"
import { HeroSection } from "../components/HeroSection"

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*BackGround Effects*/}
        <StarBackground />
        {/*Nav Bar*/}
        <Navbar />
        {/*Main Content*/}
        <main>
            <HeroSection />
        </main>

        </div>
    )
}