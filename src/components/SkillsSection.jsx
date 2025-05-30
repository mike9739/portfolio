import { useState } from "react";
import {cn} from '@/lib/utils'

export const SkillSection = () => {
    const skills = [
        // Frontend
        { name: "JavaScript", level: 90, category: "frontend" },
        { name: "React", level: 70, category: "frontend" },
        { name: "Vue", level: 70, category: "frontend" },
      
        // Backend
        { name: "Node.js", level: 70, category: "backend" },
        { name: "Python", level: 80, category: "backend" },
        { name: "PHP", level: 90, category: "backend" },
        { name: "Laravel", level: 90, category: "backend" },
        { name: "Django(DRF)", level: 70, category: "backend" },
        { name: "Fast API", level: 70, category: "backend" },
      
        // DB 
        { name: "Mysql", level: 90, category: "database" },
        { name: "Postgres", level: 70, category: "database" },
        { name: "Redis", level: 85, category: "database" },
        { name: "Mongo", level: 95, category: "database" },

        //other
        { name: "Git/GitHub", level: 90, category: "tools" },
        { name: "Docker", level: 70, category: "tools" },
        { name: "S3", level: 85, category: "tools" },
        { name: "EC2", level: 95, category: "tools" },
      ];
    

    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all','backend','frontend','database','tools'];
    const filteredSkills = skills.filter((skill) => activeCategory === "all" ||  skill.category === activeCategory)
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Technical <span className="text-primary">Skill</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    {categories.map((category,key) => (
                        <button key={key}
                        onClick={()=> setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/70 text-foreground hover:bd-secondary"
                          )}
                        >
                            {category}
                        </button>
                        
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            filteredSkills.map((skill,key) => (
                                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                    <div className="text-left mb-4">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                             style={{width:skill.level + '%'}}/>
                                    </div>
                                    <div className="text-right mt-1">
                                        <span className="">{skill.level}%</span>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}