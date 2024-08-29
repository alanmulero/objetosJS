
// Procurando chave.
const pessoaObj = {
	nome: 'Alan',
	idade: 55,
	curso:'ADS',
	formado: true,
	telefone: '9999-9745',
	cpf: '123456789-11',
	sexp: 'M',
	}

	// Função para buscar valor em um objeto.
	// Uso notação de colchetes.

	function buscaValor (objeto, chave) {
		return objeto[chave];
	}

	// Chamada de função.

	console.log(buscaValor(pessoaObj,'nome')); // Segundo parametro como String.
	console.log(buscaValor(pessoaObj,'formado'));

	// Adicionando um elemento.

	pessoaObj.carro = 'Fusca';
	console.log(pessoaObj);
	// Atualizando propriedade.
	pessoaObj.carro = 'Fusca 1300 L';
	console.log(pessoaObj);

	// Deletando elemento.
	delete pessoaObj.cpf;
	console.log(pessoaObj);