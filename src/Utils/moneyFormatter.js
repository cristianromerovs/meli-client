export const moneyFormatter = (valor, moneda) => {
    try {
        if (typeof valor !== 'number') {
            throw new Error('El valor debe ser de tipo Number')
        } else {
            const formatter = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: moneda,
                maximumFractionDigits: 0
            });

            return formatter.format(valor) 
        }
    } catch (error) {
        console.log(error);
    } 
}