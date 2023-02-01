export const capitalizeFirstLetter = (input) => {
    try {
        if (typeof input === 'string') {
            return input[0].toUpperCase() + input.slice(1).toLowerCase();
        } else {
            throw new Error('Parametro incorrecto')
        }
    } catch (error) {
        console.log(error);
    }
}