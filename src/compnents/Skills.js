import react from "react";
import Bar from "./Bar";

class Skills extends react.Component {

render(){
    return (
       <section id="skills" className="bg-dark text-white">
           <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="my-4">
                        Skills
                    </h1>
                    <p className="small px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati nostrum, dolore a at autem eveniet corrupti minus? Sed fugiat minus pariatur illo ipsam debitis nulla impedit omnis nihil accusamus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatum nostrum. Perspiciatis sint voluptates vero consequuntur, consectetur incidunt distinctio reiciendis velit suscipit ducimus? Temporibus quia rem provident, eum quisquam dolores!
                    </p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 px-5 ">
                        <ul className="px-5">    
                            <h5 className="mb-3 pb-2 border-bottom border-light text-center">
                                MY FOCUS
                            </h5>
                            <li>UI/UX Design</li>
                            <li>Responsive Design</li>
                            <li>web Design</li>
                            <li>Mobile App Design</li>
                        </ul>    
                    </div>
                    <div className="col-md-6">
                        <Bar skill="HTML" rate="90%"/>
                        <Bar skill="CSS" rate="70%"/>
                        <Bar skill="JavaScript" rate="70%"/>
                        <Bar skill="React" rate="40%"/>
                        <Bar skill="Photoshop" rate="70%"/>
                        <Bar skill="Adobe XD" rate="50%"/>
                        <Bar skill="Node.Js" rate="70%"/>
                        <Bar skill="WordPress" rate="70%"/>
                    </div>
                </div>        
           </div>
       </section>
    )
}



}

export default Skills;