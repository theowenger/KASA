import kasa from "./assets/database/kasa.json"

// GET /apartments
export async function fetchAllApartments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(kasa)
            resolve(kasa)
        }, 200)
    })
}

// GET /apartments/{id}
export async function fetchOneApartment(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //
            console.log(id)
        }, 200)
    })
}