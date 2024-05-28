const minhaFuncao = () => "Diz olá";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford',
});

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: function() { // Alteração aqui para uma função regular
        console.log(this);
        this.velocidadeAtual -= 10;
    }
};

carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual); // Exibe a velocidade atual após acelerar e frear
