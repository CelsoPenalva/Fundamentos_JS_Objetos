const clientes = [
    {
        nome:"Andre",
        cpf:"12543652266",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2011" 
            },
            {
            nome: "Samia",
            parentesco: "filha",
            dataNascimento: "04/01/2014" }],
       
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNascimento: "30/08/2020" }],
       
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

//console.log(listaDependentes)

//o comando "console.table" exibe em forma de tabela o resultado da consulta
console.table(listaDependentes)

/// O comando "..." é um operador de espalhamento ou ou sintaxe de espalhamento "spread operator", que extrai as propriedades dos objetos para outros, e agrupa todas em um unico array