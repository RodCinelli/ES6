let meuMap = new Map();
meuMap.set("nome", "rodrigo");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave} : ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// [nome => rodrigo]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('11358030723');
cpfs.add('69983151715');
cpfs.add('92811369023');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
});

const array = ['Rodrigo Cinelli', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Rodrigo Cinelli'];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);