import React from 'react'
import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'
import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"


class ApartmentCollapse extends React.Component {


    constructor(props) {
        super(props);

        //     let { id } = this.props.match.params;
        //     let product = kasa.find(i => i.id === id)
        //     console.log(product)
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

        // <div className={product.pictures.length === 1 ? 'carroussel-icon-hidden' : 'carroussel-icon'}>
        return <nav className={this.state.text1Visible ? "collapse-card-hidden" : "collapse-card"}>
            <button className="about-button" onClick={this.toggleText1}>
                <h2>{this.props.name}</h2>

                <img className="about-img" src={this.state.reverseButton ? `${vectorUp}` : `${vector}`} alt="icon"></img>
            </button>
            {(typeof (this.props.children) === 'string') ?
                <p className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.children}</p>
                :
                <ul className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.children}</ul>
            }

        </nav>
    }
}



function DescriptionApartment() {

    const { id } = useParams()
    let product = kasa.find(i => i.id === id)

    const equipmentsList = [];
    if (Array.isArray(product.equipments)) {
        for (let i = 0; i < product.equipments.length; i++) {
            equipmentsList.push(<li key={i}>{product.equipments[i]}</li>);
        }
    }

    return (
        <div className="collapse-container">
            <ApartmentCollapse name='Description'>
                {product.description}
            </ApartmentCollapse>
            <ApartmentCollapse name='Equipements'>
                {equipmentsList}
            </ApartmentCollapse>
        </div>
    )
}


export default DescriptionApartment