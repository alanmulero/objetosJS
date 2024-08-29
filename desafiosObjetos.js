const alunos = [];

alunos.push({
    nome: 'Alan',
    idade: 55,
    cidade: 'Varginha'
})

alunos.push({
    nome: 'Ana',
    idade: 15,
    cidade: 'SP'
})

alunos.push({
    nome: 'Diloca',
    idade: 50,
    cidade: 'Santo André'
})

alunos.push({nome:'pituca',idade: 13, cidade: 'Santos'})

function relatorio(lista){
    return lista.forEach(element => {
        console.log(`Nome: ${element.nome}, Idade: ${element.idade}, Cidade: ${element.cidade}`);
    });
}

console.log(relatorio(alunos));

function encontraCidade(lista, cidade){
    return lista.filter(element => element.cidade === cidade );
}

console.log(encontraCidade(alunos,'Santos'));