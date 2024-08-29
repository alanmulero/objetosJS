// pesquisa de propriedades em objetos.
// Usando um método de Object.keys()

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

// O metodo Object.keys devolve um Array com as chaves dos objetos.  => Strings.

const chaveDoObjeto = Object.keys(estudante);  // criando um array com as chaves do objeto para poder usar os metodos de busca de array
//console.log(chaveDoObjeto);
// com essa informação da chave, podemos fazer uma verificação se existe um valor na chave.
// oncludes é um método de array.
// verificando se a propriedade não existe.
if(!chaveDoObjeto.includes('pato')){
    console.error('precisa cadastra endereço')

}
