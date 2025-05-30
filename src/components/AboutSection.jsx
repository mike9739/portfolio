import { Briefcase, Code } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Professional  <span className="text-primary">Experience</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Fullstack Software Engineer
                </h3>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati ex nobis velit a animi temporibus ut enim blanditiis tempore! Voluptatibus, minima eum. Dignissimos, voluptatum enim omnis maiores corporis repellat?
                </p>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quis iure consectetur at, molestiae sunt earum voluptatum accusantium, cupiditate beatae doloribus nesciunt tenetur possimus! Tenetur omnis error inventore necessitatibus dignissimos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">Get In Touch</a>
                </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase size={48} className="h-6 w-6 text-primary"  />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Justia</h4><span>Software Engineer II</span>
                                <p className="text-muted-foreground">
                                    safasfasfasfasfasfasfas
                                </p>
                                <p className="text-muted-foreground">
                                    January 2022 - January 2025
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase size={48} className="h-6 w-6 text-primary"  />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Singular Design (Previously SMT)</h4><span>Fullstack Web Developer</span>
                                <p className="text-muted-foreground">
                                    safasfasfasfasfasfasfas
                                </p>
                                <p className="text-muted-foreground">
                                    January 2022 - January 2025
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase size={48} className="h-6 w-6 text-primary"  />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Qubit Studio Digital</h4><span>Fullstack Web Developer</span>
                                <p className="text-muted-foreground">
                                    safasfasfasfasfasfasfas
                                </p>
                                <p className="text-muted-foreground">
                                    January 2022 - January 2025
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
}