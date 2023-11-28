const Project=({P})=>{
    return (
        <div className="project-card">
          <img src={P.image} alt="project" />
          <h3>{P.title}</h3>
          <p>
          {P.text}
          </p>
          <p><a href="#">{P.lien}</a></p>
        </div>
    )
}
export default Project