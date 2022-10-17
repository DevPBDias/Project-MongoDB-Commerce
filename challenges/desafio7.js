// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
db.produtos.find({
    $nor: [
        { tags: { $exists: 1 } }, { vendidos: { $eq: 50 } },
    ],
},
    { vendidos: 1, nome: 1, _id: 0 });