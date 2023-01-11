import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"
import React from "react";


class Collapse extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            textVisible: false,
            reverseButton: false,
        }
    }

    toggleText1 = () => {
        this.setState(state =>
        ({
            text1Visible: !state.text1Visible,
            reverseButton: !state.reverseButton
        }));
    }


    render() {
        const { className } = this.props;
        return        ( 
        <nav className={`${className} ${this.state.text1Visible ? "collapse-card" : "collapse-card-hidden"}`}>
            
            <button className="collapse-button" onClick={this.toggleText1}>
                <h2>{this.props.name}</h2>
                <img className="collapse-img" src={this.state.reverseButton ? `${vectorUp}` : `${vector}`} alt="icon"></img>
            </button>
            <h3 className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.children}</h3>
        </nav>
    )}
}

export default Collapse