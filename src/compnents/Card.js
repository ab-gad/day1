import react from "react";

class Card extends react.Component {


render(){
    return (
        <div className="col text-center text-white">
            <div className="card h-100 py-5 " style={{backgroundColor:this.props.color}}>
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                </div>
            </div>
        </div>
    )
}



}

export default Card;








