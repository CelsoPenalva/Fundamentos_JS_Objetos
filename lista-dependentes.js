const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["55912345498","5521988743124"],
    dependentes: [{
        nome:"Sara Silva",
        parentesco:"filha",
        dataNascimento:"20/03/2011"
    }]
}

// Adicionando um novo dependente:

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNascimento:"04/01/2014"
})

//console.log(cliente)

// Filtrando a filha mais nova:

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)