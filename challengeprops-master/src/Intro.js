import joimg from "./images/XDAC-John-Doe.jpg"

const Intro=({n})=>{
    return(
        
<section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">{n}</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={joimg} alt="jhon-doe" />
    </section>

    )
}
export default Intro