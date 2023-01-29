const API_ROUTE = process.env.REACT_APP_API_ROUTE

//Obtener informacion de usuario = {}
export const getUserInfo = async () => {
    const response = await fetch(`${API_ROUTE}/user`)
    const savedData = await response.json()
        .catch(error => console.log(error))
    return savedData.data
}

//Obtener informacion de restricciones = []
export const getUserRestrictions = async () => {
    const response = await fetch(`${API_ROUTE}/user/1/restrictions`)
    const savedData = await response.json()
        .catch(error => console.log(error))
    return savedData.data[0]
}
/* REVISAR */
//Obtener compras de usuario
export const getUserPurchases = async () => {
    const response2 = await fetch(`${API_ROUTE}user/1/purchases?limit=5&offset=5`)
    const savedData2 = await response2.json()
        .catch(error => console.log(error))
    return savedData2.data[0]
}