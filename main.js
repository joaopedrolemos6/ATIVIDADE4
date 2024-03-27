const pessoa1 = {
    nome: 'Joao pedro',
    idade: 18,
    filiacao: ['Nome do pai', 'Nome da mae'],
    endereco: {
      rua: 'Avenida ruy carneiro',
      cidade: 'Joao Pessoa',
      estado: 'PB'
    },
    dadosCompletos: function() {
        if (this.nome && this.idade && this.filiacao.length === 2 && this.filiacao[0] && this.filiacao[1] && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {
          return true;
        } else {
          return false;
        }
  }
}
  
  const pessoa2 = {
    nome: 'Paula',
    age: 47,
    filiacao: ['Nome do Pai', 'Nome da Mae'],
    endereco: {
      rua: 'Avenida Epitacio Pessoa',
      cidade: 'Joao pessoa',
      estado: 'PB'
    },
    dadosCompletos: function() {
        if (this.nome && this.idade && this.filiacao.length === 2 && this.filiacao[0] && this.filiacao[1] && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {
          return true;
        } else {
          return false;
        }
  }

  }
  function printPersonData(pessoa) {
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);
    console.log('Filiacao:', pessoa.filiacao.join(', '));
    console.log('Endereco:', pessoa.endereco.rua, ',', pessoa.endereco.cidade, ',', pessoa.endereco.estado);
    console.log('Dados completos:', pessoa.dadosCompletos());
    console.log('----------------------------------');
  }
  
  printPersonData(person1);
  printPersonData(person2);