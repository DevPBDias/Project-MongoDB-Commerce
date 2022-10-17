db.produtos.find(
    { curtidas: { $gte: 10, $lte: 100 } },
    { curtidas: 1, nome: 1, _id: 0 },
);