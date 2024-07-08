let array = [2, 5, 7, 9, 12, 15, 19, 23, 28];

function buscaLinear(array, numero) {
    let comparacoes = 0;

    for (let i = 0; i < array.length; i++) {
        comparacoes++; 

        if (array[i] === numero) {
            return { indice: i, comparacoes: comparacoes };
        }
    }

    return { indice: -1, comparacoes: comparacoes };
}


const numeroBuscado = 15;
const resultadoBusca = buscaLinear(array, numeroBuscado);

if (resultadoBusca.indice !== -1) {
    console.log(`Número ${numeroBuscado} encontrado no índice ${resultadoBusca.indice}`);
} else {
    console.log(`Número ${numeroBuscado} não encontrado no array`);
}

console.log(`Número de comparações feitas: ${resultadoBusca.comparacoes}`);