import React from "react"
import Collapse from "./collapse"




function ProposCard() {
    return (
        <div className="propos-container">

            <Collapse name='Fiabilité' className="collapse-about">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par
                    nos équipes</p>
            </Collapse>
            <Collapse name='Respect' className="collapse-about">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse name='Service' className="collapse-about">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse>
            <Collapse name='Responsabilité' className="collapse-about">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
        </div>
    )
}

export default ProposCard