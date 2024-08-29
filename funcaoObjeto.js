const pessoa = {
    nome: 'Alan',
    idade: 55,
    telefones: ['987542-987' , '6984213'],
    enderecos: [
        {   rua :'ismael almeida',
            numero: 76,
            cidade: 'Varginha'
        }
    ],
    mediaAprvacao: 7.5,
    calculaAprovacao : function (nota){
        return nota > this.mediaAprvacao ? true : false;
    }
}

pessoa.enderecos.push({
    rua: 'atibaia',
    numero: '775',
    complemento : 'apto 23b'
})

pessoa.formado = true;

function relatorio(obj){
    return `
        Nome => ${typeof pessoa.nome} ${pessoa.nome};
        Telefones: ${pessoa.telefones.join('--')};
    `
}

console.log(relatorio(pessoa))
console.log(pessoa);
console.log(pessoa.calculaAprovacao(8));