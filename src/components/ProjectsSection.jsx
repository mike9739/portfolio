import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Justia Case Law Summaries Newsletters",
        description: "A free service to get summaries of the US supreme courts to your email. Powered by IA",
        image: "/projects/project_1.png",
        tags: ["React", "Laravel", "FastAPI"],
        demoUrl: "https://connect.justia.com/case-law-summary-newsletters",
        githubUrl: null
      },
    {
        id: 2,
        title: "ZUMA",
        description: "A CRM build with Django and Angular to process orders and routes from retailers",
        image: "/projects/project_2.png",
        tags: ["Angular", "Django"],
        demoUrl: "https://zuma.com.gt",
        githubUrl: null
      },
    {
        id: 3,
        title: "Mr Menu",
        description: "A social network for foodies",
        image: "/projects/project_3.png",
        tags: ["Django", "Vue", "Python"],
        demoUrl: "https://mrmenu.co/",
        githubUrl: null
      },
    {
        id: 4,
        title: "Bitlab",
        description: "A SasS , build for hospitals and laboratories, in helps to handle patient studies, create reports and notify the results to the users",
        image: "/projects/project_4.png",
        tags: ["Laravel", "Vue"],
        demoUrl: "https://bitlabsoft.com",
        githubUrl: null
      },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Take a look of some of the projects where I have been involved 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-b-lg overflow-hidden card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title}></img>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag,key) => (
                                            <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-xl text-secondary font-semibold  mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <ExternalLink size={20} />
                                    </a>
                                    {
                                        project.githubUrl && 
                                        <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                        <Github size={20} />
                                        </a>
                                    }

                                </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto" href="https://github.com/mike9739" target="_blank" rel="noopener noreferrer">
                    My Github  <Github />    
                    </a>
                </div>
            </div>
        </section>
    )
}