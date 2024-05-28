// Rest

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // arguments.map
    // console.log(arguments)
    // return a + b + c;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

// Spread

const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos']
const timesDeFutebolDoRj = ['Flamengo', 'Vasco', 'Botafogo', 'Fluminense']

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRj]

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'Gol',
    fabricante: 'Volkswagen',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturação

const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(outrosTimes);


