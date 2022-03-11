const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com"
}


//                 0      1      2      3
const chaves = ["nome","idade","cpf","email"]

//const chave = "nome"

//console.log(cliente[chave])

//console.log(cliente[chaves[0]])

//Para acessar algum item direto do objeto utilizamos ".", para acessar através de uma variável utilizamos "[variavel[indice]]"

// Para exibir todas as informações com forEach em forma de arrow function:
chaves.forEach(info => console.log(cliente[info]))

// ao tentar acessar uma chave com nome errado como no exemplo abaixo, o JS não dá erro, mas retorna "undefined"
console.log(cliente["conta"])