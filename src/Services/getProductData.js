const API_ROUTE = process.env.REACT_APP_API_ROUTE

export const getProductData = async (id) => {
    const res = await fetch(`${API_ROUTE}/user/1/purchases?limit=10&offset=0`)
    const data = await res.json();
    const processedData = await data.data.data.find(item => item.id_compra === id)    
    const nextRes = await fetch(`${API_ROUTE}/shipment/${processedData.id_envio}`);
    const nextData = await nextRes.json();
    const exportData = [processedData, nextData.data]
    // console.log(exportData)
    return exportData
}