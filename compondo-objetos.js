const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["55912345498","5521988743124"]
}

// Adicionando um objeto dentro de outro objeto:

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNascimento:"20/03/2011"
}

console.log(cliente)

// Alterando uma propriedade do objeto dependentes:

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)