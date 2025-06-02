import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "@/components/NavBar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

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
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        <Footer/ >
        </div>
    )
}