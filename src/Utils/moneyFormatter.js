export const moneyFormatter = (valor, moneda) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: moneda,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
    return formatter.format(valor) 
}