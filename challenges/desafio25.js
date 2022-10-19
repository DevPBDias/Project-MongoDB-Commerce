// Crie uma query que faça a adição do valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos.updateMany(
    {
        $and: [
            { "valoresNutricionais.tipo": "sódio" },
            { "valoresNutricionais.tipo.percentual": { $gte: 40 } }],
    },
    { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
