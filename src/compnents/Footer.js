import react from "react";
import Button from "./Button";

class Footer extends react.Component {

render(){
    return (
       <section id="Footer" className="text-white" style={{backgroundColor:"black"}}>
           <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>GET IN TOUCH</h6>
                        <p>pilosopher.gad@gmail.com</p>
                        <p>+201288074068</p>
                    </div>
                    <div>
                        <Button />
                    </div>
                    <div>
                        <h6>Social</h6>
                        <small>Copyright &Copy;2019 KR</small>
                    </div>
                </div>     
           </div>
       </section>
    )
}



}

export default Footer;