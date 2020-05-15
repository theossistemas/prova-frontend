// Esse metodo irá pegar o que o usuario digitar que será string e irá converter para Array
module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}