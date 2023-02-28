const numeroQualquer = Number(prompt('Insira um numero'))
const ehPar = () => {
    if (numeroQualquer % 2 === 0) {
        return 'o numero eh par'
    } else {
        return 'o numero nao eh par'
    }
}

console.log(ehPar())
