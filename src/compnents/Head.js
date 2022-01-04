import react from "react";
import Button from "./Button"

class Head extends react.Component {


render(){
    return (
       <section id="header" className="bg-dark text-white text-center">
           <div className="container py-5 h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-md-5">
                        <h1>
                            Katie Reed 
                        </h1>
                        <h2 className="mb-5">
                            Web Developer & Designer
                        </h2>
                        <Button/>

                    </div>
                    <div className="col-md-7"></div>
                </div>        
           </div>
       </section>
    )
}



}

export default Head;