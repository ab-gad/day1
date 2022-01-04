import react from "react";

class About extends react.Component {


render(){
    return (
       <section id="about" className="bg-light text-dark">
           <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <h1>
                            About Me 
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <p className="text-muted mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati nostrum, dolore a at autem eveniet corrupti minus? Sed fugiat minus pariatur illo ipsam debitis nulla impedit omnis nihil accusamus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatum nostrum. Perspiciatis sint voluptates vero consequuntur, consectetur incidunt distinctio reiciendis velit suscipit ducimus? Temporibus quia rem provident, eum quisquam dolores!
                        </p>
                        <a className="btn btn-dark">
                            Download Resume
                        </a>
                    </div>
                </div>        
           </div>
       </section>
    )
}



}

export default About;