const maiorDeIdade = Number(prompt('digite sua idade'))
const temEnsinoMedio = confirm(`clique em 'ok' caso possua ensino medio completo`)
const fazFaculdade = confirm(`clique em 'OK' caso esteja fazendo alguma faculdade`)

if (maiorDeIdade >= 18) {
    console.log('Pessoa maior de idade')
} else {
    console.log('Pessoa menor de idade')
}

if (temEnsinoMedio === true) {
    console.log('Pessoa possui ensino medio')
} else {
    console.log('Pessoa nao possui ensino medio')
}

if (fazFaculdade === false) {
    console.log('Pessoa nao faz faculdade')
} else {
    console.log('pessoa faz faculdade')
}