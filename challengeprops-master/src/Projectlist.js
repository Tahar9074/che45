import Project from "./Project"
import Projects from "./Projects"

const Projectlist=()=>
{
    return (
        <section id="projects">
             <h2 className="text-important">Projects</h2>
      <div className="projects-container">
            {
        Projects.map((el)=>
        <Project P={el}/>
        )
    }
    </div>
</section>
    )
}
export default Projectlist