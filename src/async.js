function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 100000000; i++) {
            execucoess++; // Correção do erro de digitação
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números');
    }
});

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("inicio");

    promiseComParametros('rodcinelli@gmail.com', '123456').then((resultado) => {
        console.log(resultado);
    });

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }

    console.log("fim");
}

execucaoPrincipal();

