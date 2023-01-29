export const moneyFormatter = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
    return formatter.format(valor) 
}