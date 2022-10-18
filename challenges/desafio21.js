// https://www.mongodb.com/docs/manual/reference/operator/update/pop/
db.produtos.updateOne(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredientes: 1 } },
);
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
