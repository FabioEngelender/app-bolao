import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("nome");
    localStorage.removeItem("cpf");
    navigate("/login");
  }

  function voltar() {
    navigate(-1); // volta para a página anterior
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#f0f0f0",
        marginBottom: 20,
        borderRadius: 6,
      }}
    >
      <div>
        <strong>Bolão de Apostas</strong>
      </div>

      <div>
        <button onClick={voltar} style={{ marginRight: 10 }}>
          Voltar
        </button>
        <button onClick={sair}>Sair</button>
      </div>
    </div>
  );
}
