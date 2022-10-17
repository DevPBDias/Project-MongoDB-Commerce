db.produtos.find(
    { vendidos: { $gte: 50, $lte: 100 } },
    { vendidos: 1, nome: 1, _id: 0 },
)
    .sort({ vendidos: 1 });