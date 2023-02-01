const API_ROUTE = process.env.REACT_APP_API_ROUTE

export const getProductData = async (id) => {
    //Llamado primer fetch
    const res = await fetch(`${API_ROUTE}/user/1/purchases?limit=10&offset=0`)
    const data = await res.json();
    //Filtrado de id_compra
    const productData = await data.data.data.find(item => item.id_compra === id)  
    //Await del primer fetch para hacer consulta 
    const shipmentRes = await fetch(`${API_ROUTE}/shipment/${productData.id_envio}`);
    const shipmentData = await shipmentRes.json();
    const paymentRes = await fetch(`${API_ROUTE}/payment/${productData.id_transaccion}`);
    const paymentData = await paymentRes.json();
    //Export de data hacia CardDetalle
    const exportData = [productData, shipmentData.data, paymentData.data]
    return exportData
}