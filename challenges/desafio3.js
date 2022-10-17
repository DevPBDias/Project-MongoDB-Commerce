db.produtos.find({}, {
    vendidos: 1, nome: 1, _id: 0,
})
    .sort({ vendidos: -1 })
    .limit(1);