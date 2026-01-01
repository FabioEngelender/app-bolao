import { useState } from "react";
import { gerarPdfAceite } from "../utils/gerarPdfAceite";
import { registrarAceite, verificarAceite } from "../utils/registroAceite";
import TermoModal from "../components/TermoModal";
import { useNavigate } from "react-router-dom";


export default function Participar({ aposta }) {
  const [mostrarTermo, setMostrarTermo] = useState(false);
  const [qtdCotas, setQtdCotas] = useState(1);
  const navigate = useNavigate();

  function handleParticipar() {
    if (!verificarAceite(aposta.id)) {
      setMostrarTermo(true);
    } else {
      liberarParticipacao();
    }
  }

  function handleAceite() {
    const dataHora = new Date().toLocaleString("pt-BR");

    registrarAceite(aposta);

    gerarPdfAceite({
      nomeAposta: aposta.nome,
      nome: localStorage.getItem("nome"),
      cpf: localStorage.getItem("cpf"),
      dataHora: dataHora,
    });

    setMostrarTermo(false);
    liberarParticipacao();
    navigate("/meus-aceites");
  }

  function liberarParticipacao() {
    alert(`Participação liberada para a aposta: ${aposta.nome}`);
    // Fluxo de PIX / cotas estará disponível abaixo
  }

  function pagarPIX() {
    const valorTotal = qtdCotas * aposta.valor;
    alert(`Pagamento de R$ ${valorTotal.toFixed(2)} via PIX realizado!`);
    
    // Atualiza cotas vendidas localmente (para simulação)
    aposta.cotasVendidas += qtdCotas;

    // Resetar quantidade de cotas
    setQtdCotas(1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{aposta.nome}</h2>

      <button onClick={handleParticipar}>
        Participar
      </button>

      {mostrarTermo && (
        <TermoModal
          onAccept={handleAceite}
          nomeAposta={aposta.nome}
        />
      )}

      {!mostrarTermo && verificarAceite(aposta.id) && (
        <div style={{ marginTop: 20 }}>
          <label>
            Quantidade de cotas:{" "}
            <input
              type="number"
              min="1"
              max={aposta.cotasTotal - aposta.cotasVendidas}
              value={qtdCotas}
              onChange={(e) => setQtdCotas(Number(e.target.value))}
            />
          </label>

          <p>Valor total: R$ {(qtdCotas * aposta.valor).toFixed(2)}</p>

          <button onClick={pagarPIX}>
            Pagar via PIX
          </button>
        </div>
      )}
    </div>
  );
}
