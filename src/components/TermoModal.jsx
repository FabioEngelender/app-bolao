import { useState } from "react";

export default function TermoModal({ onAccept, nomeAposta }) {
  const [checked, setChecked] = useState(false);

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>TERMO DE CIÊNCIA E ACEITE – FERRAMENTA DE GESTÃO DE COTAS</h3>

        <div style={texto}>
          <p>
            Ao prosseguir com o cadastro e utilização desta plataforma, o PARTICIPANTE declara estar ciente e de pleno acordo com as condições abaixo descritas:
          </p>
          <p>
            A presente plataforma possui finalidade exclusiva de gestão privada de cotas, destinada à organização, controle e acompanhamento de participações financeiras entre pessoas físicas previamente interessadas em apostas coletivas de caráter informal.
          </p>
          <p>
            Esta ferramenta não realiza apostas, não intermedeia jogos, não comercializa bilhetes, tampouco possui qualquer vínculo, parceria ou representação com casas lotéricas, com a Caixa Econômica Federal ou com quaisquer instituições financeiras ou órgãos governamentais.
          </p>
          <p>
            Toda e qualquer aposta eventualmente realizada ocorre externamente à plataforma, sendo de inteira responsabilidade do organizador e dos participantes envolvidos.
          </p>
          <p>
            Os valores eventualmente arrecadados por meio de transferências eletrônicas (PIX) destinam-se exclusivamente à divisão de custos entre particulares, não configurando atividade comercial, financeira ou bancária.
          </p>
          <p>
            O PARTICIPANTE reconhece que a plataforma atua apenas como instrumento auxiliar de controle, não se responsabilizando por:
          </p>
          <ul>
            <li>inadimplência de participantes;</li>
            <li>erros de repasse;</li>
            <li>falhas de comunicação entre os envolvidos;</li>
            <li>resultados dos jogos ou sorteios.</li>
          </ul>
          <p>
            Os dados pessoais informados (nome, CPF, endereço, telefone e chave PIX) são utilizados exclusivamente para identificação e organização interna, não sendo compartilhados com outros participantes, observadas as boas práticas da Lei Geral de Proteção de Dados Pessoais – Lei nº 13.709/2018 (LGPD).
          </p>
          <p>
            O PARTICIPANTE declara que as informações prestadas são verdadeiras e assume integral responsabilidade civil e legal por sua veracidade.
          </p>
          <p>
            O uso da plataforma implica aceite eletrônico integral deste termo, produzindo efeitos legais equivalentes à assinatura física, nos termos da legislação vigente.
          </p>
          <p><strong>Aposta:</strong> {nomeAposta}</p>
        </div>

        <label style={{ display: "block", marginTop: 10 }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />{" "}
          Declaro que li e estou ciente
        </label>

        <button
          disabled={!checked}
          onClick={onAccept}
          style={{ marginTop: 10, width: "100%" }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modal = {
  background: "#fff",
  padding: 20,
  width: 500,
  borderRadius: 8
};

const texto = {
  maxHeight: 200,
  overflowY: "auto",
  marginBottom: 10,
  fontSize: 14,
  textAlign: "justify"
};
