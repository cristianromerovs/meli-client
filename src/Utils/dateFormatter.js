export const dateFormatter = (date) => {
    try {
        let parsedData = Date.parse(date)
        parsedData = new Date(parsedData)

        try {
            const getDay = parsedData.getDate();
            const getYear = parsedData.getFullYear();
            const getMonth = parsedData.getMonth();

            const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            let monthName = monthNames[getMonth]

            return `${getDay} de ${monthName} de ${getYear}`
        } catch (error) {
            throw new Error('No se puede extraer el año, mes o día de la data')
        }

    } catch (error) {
        throw new Error('El parametro ingresado no se puede convertir en formato Date')
    }
}