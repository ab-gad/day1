import react from "react";
import Card from "./Card"

class Portfolio extends react.Component {

render(){
    return (
       <section id="Portfolio" className="bg-light text-dark">
           <div className="container py-5">
                <div className="mb-5">
                    <h1 className="my-4">
                        Portfolio
                    </h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    <Card color="#212529" title="WEB DESIGN"/>
                    <Card color="gray" title="MOBILE DESIGN"/>
                    <Card color="#212529" title="LOGO DESIGN"/>
                    <Card color="gray" title="WEB APPLICATION"/>
                    <Card color="#212529" title="MOBILE APPLICATION"/>
                    <Card color="gray" title="PWA DEVELOPMENT"/>
                </div>      
           </div>
       </section>
    )
}



}

export default Portfolio;