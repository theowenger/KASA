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

            <AboutList name='Fiabilité' description ='Tout nos logements sont certifiés par le syndycat des proprietaires. Notre équipe est diponible 24h/24 7J/7 sur notre lige telephonique au 04.88.88.88.88.'/>
            <AboutList name='Respect'  description = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
            <AboutList name='Service' description = 'Reconnu depuis maintenant 25 ans. Kasa est un groupe mondialement reconnu pour son service client irreprochable. Notre taux de satisfation est de 97% sur ComparerLesOffres.com.'/>
            <AboutList name='Responsabilité' description = 'Notre société est engagée ecologiquement. Nos maisons sont certifiées A en energie et nous faisons notre possible pour reduire notre empreinte sur la planete.'/>
        </div>
    )
}

export default ProposCard