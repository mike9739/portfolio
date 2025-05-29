import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
    
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hello World!,  I'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">Miguel </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">Vazquez</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Software Engineer with over 5 years of experience specializing in PHP (Laravel), Python(Django), and JavaScript, with a strong focus on backend development, API
            integration, and process automation. l have proven track record of building scalable, high-performance web applications 
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a className="cosmic-button" href="#projects"> Check my Work !</a>
            </div>
        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
    </div>
    </section>
}