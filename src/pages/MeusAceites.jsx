import { useEffect, useState } from "react";

export default function MeusAceites() {
  const [aceites, setAceites] = useState([]);
  const nomeCotista = localStorage.getItem("nome") || "desconhecido";

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("aceites")) || [];
    setAceites(dados);
  }, []);

  return (
    <div style={{ padding: 30, maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Cotista: {nomeCotista}
      </h2>

      {aceites.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nenhum aceite registrado.</p>
      ) : (
        aceites.map((a, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              marginBottom: 15,
              borderRadius: 6,
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>Aposta:</strong> {a.nomeAposta}</p>
            <p>
              <strong>Data/Hora:</strong>{" "}
              {new Date(a.dataHora).toLocaleString("pt-BR")}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
