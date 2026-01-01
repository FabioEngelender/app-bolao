// Salva o aceite no localStorage, incluindo data/hora e a aposta
export function registrarAceite(aposta) {
  const aceitesExistentes = JSON.parse(localStorage.getItem("aceites")) || [];

  const novoAceite = {
    apostaId: aposta.id,
    nomeAposta: aposta.nome,
    dataHora: new Date().toISOString(),
    usuario: localStorage.getItem("nome") || "Anônimo",
    cpf: localStorage.getItem("cpf") || "Não informado",
  };

  aceitesExistentes.push(novoAceite);
  localStorage.setItem("aceites", JSON.stringify(aceitesExistentes));

  return novoAceite; // retorna o registro para gerar PDF
}

export function verificarAceite(aposta) {
  const aceitesExistentes = JSON.parse(localStorage.getItem("aceites")) || [];
  return aceitesExistentes.some(a => a.apostaId === aposta.id);
}
