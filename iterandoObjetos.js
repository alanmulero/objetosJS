const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
        {
            rua: 'Rua Dona Clotilde',
            numero: '71',
            complemento: null
        }

    ]
}

for(let chave in estudante){
    const tipoDaVariavel = typeof estudante[chave]; // typeof retorna object, não há um typeof específico para arrays
    // No JS o que não é primitivo, é objeto.
    if (tipoDaVariavel !== 'object' && tipoDaVariavel !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);}
    else{
        console.log(estudante[chave]);
    }    
    
}