export const parcelCalculator = (valor, cuotas) => {
    const cuotasCalculadas = Math.trunc(valor / cuotas)
    return cuotasCalculadas
}