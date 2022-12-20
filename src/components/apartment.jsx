import kasa from '../assets/database/kasa.json'

function Apartment() {
    const currentLocation = window.location.pathname
    const currentId = currentLocation.replaceAll('/apartments/', '')
    let product = kasa.find(i => i.id === currentId)

    return (
    <div>{product.title}</div>
)}

export default Apartment