import react from "react";

class Bar extends react.Component {
constructor(props){
    super()
}

render(){
    return (
        <div id="bar" className="row">
            <div className="col-sm-3">{this.props.skill}</div>
            <div className="col-sm-9 progress p-0">
                <div className="progress-bar" style={{width: this.props.rate}}></div>
            </div>  
        </div>
    )
}



}

export default Bar;