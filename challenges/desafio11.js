// Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
db.produtos.find({
    $nor: [
        { nome: { $eq: "Big Mac" } }, { nome: { $eq: "McChicken" } },
    ],
},
    { vendidos: 1, nome: 1, _id: 0, curtidas: 1 });