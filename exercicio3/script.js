const nacionalidade = prompt('Escreva aqui sua nacionalidade.')
const checarNacionalidade = (nacionalidade) => {
    if (nacionalidade.toUpperCase().trim() === 'BRASILEIRA') {
        return 'Usuario de nacionalidade brasileira'
    } else if (nacionalidade.toUpperCase().trim() === 'ARGENTINA') {
        return 'Usuario de nacionalidade argentina'
    } else if (nacionalidade.toUpperCase().trim() === 'URUGUAIA') {
        return 'Usuario de nacionalidade uruguaia'
    } else if (nacionalidade.toUpperCase().trim() === 'CHILENA') { 
        return 'Usuario de nacionalidade chilena' 
    } else if (nacionalidade.toUpperCase().trim() === 'COLOMBIANA') {
        return 'Usuario de nacionalidade colombiana'
    } else {
        return 'nacionalidade nao encontrada'
    }
}
console.log(checarNacionalidade(nacionalidade))