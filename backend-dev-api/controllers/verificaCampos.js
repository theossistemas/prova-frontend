function arrayToString(a) {
    return a.join(', ')
}

function stringEstaPreenchida(string) {
    return (string.trim().length > 0)
} 

function getCamposInvalidos(objeto, funcsValidacao) {
    
    const erros = Object.keys(objeto).filter(function(campo) {
        return funcsValidacao[campo] && !funcsValidacao[campo](objeto[campo])
    })

    return erros
}

module.exports = {
    arrayToString,
    stringEstaPreenchida,
    getCamposInvalidos
}