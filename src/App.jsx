// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";

function ListaApostas() {
  const navigate = useNavigate();

  const apostas = [
    {
      id: 1,
      nome: "Mega da Virada",
      vendidas: 320,
      total: 1000,
      valor: 10.0,
    },
    {
      id: 2,
      nome: "Lotofácil",
      vendidas: 80,
      total: 200,
      valor: 5.0,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Apostas Disponíveis</h2>
      {apostas.map((a) => (
        <div key={a.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h3>{a.nome}</h3>
          <p>{a.vendidas} / {a.total} cotas vendidas</p>
          <p>Valor da cota: R$ {a.valor.toFixed(2)}</p>
          <button onClick={() => navigate(`/aposta/${a.id}`)}>Participar</button>
        </div>
      ))}
    </div>
  );
}

function DetalheAposta() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Detalhes da Aposta</h2>
      <p>Aposta selecionada ID: {id}</p>
      <p>Esta é uma tela de simulação.</p>
      <p>Nenhum pagamento real é realizado neste ambiente de testes.</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaApostas />} />
        <Route path="/aposta/:id" element={<DetalheAposta />} />
      </Routes>
    </Router>
  );
}
