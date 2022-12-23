import React from "react"
import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"


class AboutList extends React.Component {


    constructor(props) {
        super(props);
        this.state = { textVisible: false,
                        reverseButton: false, }
    }

    toggleText1 = () => {
        this.setState(state =>
            ({ text1Visible: !state.text1Visible,
                reverseButton: !state.reverseButton  }));
    }


    render() {
        return <nav className="about-card">
            <button className="about-button" onClick={this.toggleText1}>
                <h2>{this.props.name}</h2>
                <img className="about-img"  src= {this.state.reverseButton ?`${vectorUp}`: `${vector}`} alt="icon"></img>
            </button>
            <h3 className="about-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.description}</h3>
        </nav>
    }
}



function ProposCard() {
    return (
        <div className="propos-container">

            <AboutList name='Fiabilité' description ='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
            <AboutList name='Respect'  description = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
            <AboutList name='Service' description = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <AboutList name='Responsabilité' description = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    )
}

export default ProposCard