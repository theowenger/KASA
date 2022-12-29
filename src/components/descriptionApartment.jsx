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
        this.state = { textVisible: false,
                        reverseButton: false, }
    }

    toggleText1 = () => {
        this.setState(state =>
            ({ text1Visible: !state.text1Visible,
                reverseButton: !state.reverseButton  }));
    }


    render() {

        const equipmentsList = [];
        if (Array.isArray(this.props.equipments)) {
          for (let i = 0; i < this.props.equipments.length; i++) {
            equipmentsList.push(<li key={i}>{this.props.equipments[i]}</li>);
          }
        }
        // <div className={product.pictures.length === 1 ? 'carroussel-icon-hidden' : 'carroussel-icon'}>
        return <nav className={this.state.text1Visible? "collapse-card-hidden" :"collapse-card"}>
            <button className="about-button" onClick={this.toggleText1}>
                <h2>{this.props.name}</h2>
                <img className="about-img"  src= {this.state.reverseButton ?`${vectorUp}`: `${vector}`} alt="icon"></img>
            </button>
            {(typeof(this.props.description) === 'string') ?
             <p className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.description}</p>
              : 
              <ul className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{equipmentsList}</ul>
              }
            
        </nav>
    }
}



function DescriptionApartment() {

    const {id} = useParams()
    let product = kasa.find(i => i.id === id)

    return (
        <div className="collapse-container">
            <ApartmentCollapse name='Description' description ={product.description}/>
            <ApartmentCollapse name='Equipements'  equipments = {product.equipments}/>
        </div>
    )
}


export default DescriptionApartment