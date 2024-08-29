const pessoaObj = {
    nome: 'Alan',
    idade: 55,
    curso:'ADS',
    formado: true,
    telefones: ['9999-9745', '32221961'],
    cpf: '123456789-11',
    sexo: 'M',
    enderecos: [
        {Rua :'Atibaia',
        numero: '76',
        cidade :'santo André'}
    ]
}

pessoaObj.enderecos.push({
    rua: 'Delfim Moreira',
    numero: '246',
    complemento: 3,
    bairro: 'centro',
    cidade: ''

})

console.log(pessoaObj);
console.log(pessoaObj.enderecos[0]);