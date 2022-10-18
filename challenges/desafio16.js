// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
// Para isso, escreva no arquivo desafio16.js duas queries, nesta ordem:
// 
// Cri/e uma query que inclua somente ao sanduíche Big Mac o campo ultimaModificacao com a data corrente. Para a data corrente faça uso do tipo date ou timestamp.
// 
// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe
db.produtos.updateOne(
    { nome: { $eq: "Big Mac" } },
    { $set: { ultimaModificacao: { $timestamp: true } } },
);
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { nome: 1, ultimaModificacao: 1, _id: 0 });