import Title from "@/app/Element/Ttitle";
import { projects } from "@/app/constants/project";
import ProjectCard from "./ProjectCard";

export default function Project(){
     return (
         <section className="w-full padding-x padding-y">
              <Title name="Portfolio"  id="projects" custumnClass="text-[#f2f2f2"/>
              <h2 className="text-subhead">Our Recent Projects</h2>
              <div className=" w-full flex">
                  {
                    projects.map((p , index) => {
                         return (
                              <ProjectCard key={index}
                                   title={p.title}
                                   url={p.to}
                                   alt=".."
                                   projectType={p.type}
                                   projectPhoto={p.projectPic}
                              />
                         )
                    })
                  }
              </div>
         </section>
     )
}