import { Routes, Route, useNavigate, Navigate, useParams } from "react-router-dom";
import { useState } from "react";

import Participar from "./pages/Participar";
import MeusAceites from "./pages/MeusAceites";
import Menu from "./components/Menu";

/* =======================
   DADOS SIMULADOS
======================= */
const apostas = [
  { id: 1, nome: "Mega da Virada", cotasVendidas: 320, cotasTotal: 1000, valor: 10 },
  { id: 2, nome: "Lotofácil", cotasVendidas: 80, cotasTotal: 200, valor: 5 },
];

/* =======================
   CONTAINER CENTRAL
======================= */
function Centro({ children }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          padding: 20,
          background: "#fff",
          borderRadius: 6,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* =======================
   LOGIN
======================= */
function Login() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [aceite, setAceite] = useState(false);

  function entrar() {
    if (!nome || !cpf || !aceite) {
      alert("Preencha os dados e aceite o termo.");
      return;
    }
    localStorage.setItem("usuarioLogado", "true");
    localStorage.setItem("nome", nome);
    localStorage.setItem("cpf", cpf);
    navigate("/");
  }

  return (
    <Centro>
      <h1 style={{ textAlign: "center" }}>Acesso ao Bolão</h1>

      <input
        style={{ width: "100%", marginBottom: 10 }}
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        style={{ width: "100%", marginBottom: 10 }}
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <label style={{ fontSize: 14 }}>
        <input
          type="checkbox"
          checked={aceite}
          onChange={() => setAceite(!aceite)}
        />{" "}
        Li e estou ciente do termo
      </label>

      <p style={{ fontSize: 11, marginTop: 10, textAlign: "justify" }}>
        Ao utilizar esta plataforma, o participante declara estar ciente de que se
        trata de ferramenta privada de gestão de cotas entre particulares, sem
        vínculo com casas lotéricas, instituições financeiras ou órgãos oficiais,
        conforme Termo de Ciência e Aceite.
      </p>

      <button style={{ marginTop: 10, width: "100%" }} onClick={entrar}>
        Entrar
      </button>
    </Centro>
  );
}

/* =======================
   PROTEÇÃO COM MENU
======================= */
function RotaProtegida({ children }) {
  const logado = localStorage.getItem("usuarioLogado");
  if (!logado) return <Navigate to="/login" />;

  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}

/* =======================
   LISTA DE APOSTAS
======================= */
function ListaApostas() {
  const navigate = useNavigate();

  return (
    <Centro>
      <h1 style={{ textAlign: "center" }}>Apostas Disponíveis</h1>
      
      <button
        style={{ marginBottom: 20, width: "100%" }}
        onClick={() => navigate("/meus-aceites")}
      >
        Meus Aceites
      </button>

      {apostas.map((a) => (
        <div key={a.id} style={{ border: "1px solid #ccc", padding: 15, marginBottom: 15 }}>
          <h3>{a.nome}</h3>
          <p>{a.cotasVendidas} / {a.cotasTotal} cotas vendidas</p>
          <p>Valor da cota: R$ {a.valor.toFixed(2)}</p>
          <button onClick={() => navigate(`/aposta/${a.id}`)}>Participar</button>
        </div>
      ))}
    </Centro>
  );
}

/* =======================
   PARTICIPAR WRAPPER
======================= */
function ParticiparWrapper() {
  const { id } = useParams();
  const aposta = apostas.find((a) => a.id === Number(id));

  if (!aposta) return <Centro>Aposta não encontrada</Centro>;

  return <Participar aposta={aposta} />;
}

/* =======================
   APP
======================= */
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RotaProtegida>
            <ListaApostas />
          </RotaProtegida>
        }
      />
      <Route
        path="/aposta/:id"
        element={
          <RotaProtegida>
            <ParticiparWrapper />
          </RotaProtegida>
        }
      />
      <Route
        path="/meus-aceites"
        element={
          <RotaProtegida>
            <MeusAceites />
          </RotaProtegida>
        }
      />
    </Routes>
  );
}
