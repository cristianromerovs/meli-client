import { useQuery } from 'react-query'
import axios from 'axios'

const API_ROUTE = process.env.REACT_APP_API_ROUTE;

const id = 300200;

const fetchProducto = () => {
    return axios.get(`${API_ROUTE}user/1/purchases?limit=10&offset=0`)
}

const fetchUser = () => {
    return axios.get(`${API_ROUTE}user`)
}

export const DoubleData = () => {
    useQuery('productos', fetchProducto)
    useQuery('usuarios', fetchUser)
    return <p>Hola</p>
}