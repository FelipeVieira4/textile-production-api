const producaoRepository=require('../repositories/ProducaoRepository');

const criarProducao = async (dados) => {
  const { data_producao, numero_tear, codigo_produto, qualidade, quilos, pecas }=dados;
  let {turno}=dados;
  
  if (!data_producao || !numero_tear || !codigo_produto || turno === undefined || !qualidade || quilos === undefined || pecas === undefined) {
    throw new Error("Todos los campos são estritamente obrigatórios.");
  }

  turno=parseInt(turno)
  if (turno<1||turno>3) throw new Error("O turno informado deve ser obrigatoriamente 1, 2 ou 3.");
  
  let dataFormatada = data_producao;

  if (data_producao && data_producao.includes('T')) {
    dataFormatada = data_producao.split('T')[0];
  }

  // Agora você usa a 'dataFormatada' para fazer a comparação com hoje
  const hoje = new Date().toISOString().split('T')[0]; 

  if (dataFormatada > hoje) {
    throw new Error(`A data de produção (${dataFormatada}) não pode ser uma data futura. Hoje é ${hoje}.`);
  }

  const qualidadesValidas = ['A', 'B', 'C'];
  const qualidadeFormatada = qualidade.toString().toUpperCase();

  if (!qualidadesValidas.includes(qualidadeFormatada)) {
    throw new Error("A qualidade deve ser 'A', 'B' ou 'C'.");
  }

  const quilosNum = parseFloat(quilos);
  const pecasInt = parseInt(pecas);
  if (isNaN(quilosNum) || quilosNum <= 0 || isNaN(pecasInt) || pecasInt <= 0) {
    throw new Error("Quilos e peças devem ser números maiores que zero.");
  }

  return await producaoRepository.gravarProducao({
    data_producao,
    numero_tear,
    codigo_produto,
    turno: parseInt(turno),
    qualidade: qualidadeFormatada,
    quilos: quilosNum,
    pecas: pecasInt
  });
};

module.exports = {
  criarProducao
};