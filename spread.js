// Exibindo dados através de uma função

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
    }]
  }

  // Quero uma função para exibir os telefones, usando o spread ...
  function exibeTelefones(telefone1, telefone2){
    console.log(`Ligar para telefone 1: ${telefone1}`);
    console.log(`Ligar para telefone 2: ${telefone2}`);
  }

  // Chamando função com spread...
  exibeTelefones(...estudante.telefones);

  // Criando um destinatari de uma forma mais prática.
  const dadosParaDestinatario = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]  // Isso simplifica muito. Não tenho que digitar cada campo.
    
  }

  console.log(dadosParaDestinatario);