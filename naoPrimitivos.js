// trabalhando com não primitivos.
const pessoaObj = {
	nome: 'Alan',
	idade: 55,
	curso:'ADS',
	formado: true,
	telefones: ['9999-9745', '32221961'],
	cpf: '123456789-11',
	sexo: 'M',
	}

console.log(pessoaObj.telefones);
console.log(pessoaObj.telefones[1]);

pessoaObj.endereco = {
	rua: 'ATIBAIA',
	numero: '775',
	complemento: 'apto 23b',
}
pessoaObj.endereco.rua = pessoaObj.endereco.rua.toLowerCase();
console.log(pessoaObj);
console.log(pessoaObj.endereco);
console.log(pessoaObj.endereco.rua);