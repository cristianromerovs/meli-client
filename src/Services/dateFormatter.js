export const dateFormatter = (date) => {
    let parsedData = Date.parse(date)
    parsedData = new Date(parsedData)
    //Obtencion de dia, anio y mes
    const getDay = parsedData.getDate();
    const getYear = parsedData.getFullYear();
    const getMonth = parsedData.getMonth();
    //Asignacion de nombre a mes
    const monthNames = ["enero", "febrero", "marzo", "abril", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let monthName = monthNames[getMonth]

    return `${getDay} de ${monthName} de ${getYear}`
}