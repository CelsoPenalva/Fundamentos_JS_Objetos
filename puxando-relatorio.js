const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["55912345498","5521988743124"],
    dependentes: [
        {
        nome:"Sara Silva",
        parentesco:"filha",
        dataNascimento:"20/03/2011" },
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNascimento:"04/01/2014" }

    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
   
}

console.log(relatorio)

//Obs: O let ... in faz percorrer todas as chaves do objeto

//Obs2: O if está eliminando os objetos e funções do relatório

// Obs3: O template string permite a quebra de linha em seu formato, organizando melhor a apresentação do relatório no formato "chave ==> valor, linha a linha"