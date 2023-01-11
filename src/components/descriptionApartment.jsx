import React from 'react'
import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'
import Collapse from './collapse'



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
            <Collapse name='Description' className="collapse-apt">
                {product.description}
            </Collapse>
            <Collapse name='Equipements'  className="collapse-apt">
                {equipmentsList}
            </Collapse>
        </div>
    )
}


export default DescriptionApartment