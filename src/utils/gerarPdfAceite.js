import jsPDF from "jspdf";

export function gerarPdfAceite({ nomeAposta, nome, cpf, dataHora }) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const margemEsquerda = 40;
  const margemDireita = 550; // define limite de largura
  const linhaAltura = 18;
  let cursorY = 50;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("TERMO DE CIÊNCIA E ACEITE – FERRAMENTA DE GESTÃO DE COTAS", margemEsquerda, cursorY);
  
  cursorY += 30;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  const texto = `
Ao prosseguir com o cadastro e utilização desta plataforma, o COTISTA declara estar ciente e de pleno acordo com as condições abaixo descritas:

A presente plataforma possui finalidade exclusiva de gestão privada de cotas, destinada à organização, controle e acompanhamento de participações financeiras entre pessoas físicas previamente interessadas em apostas coletivas de caráter informal.

Esta ferramenta não realiza apostas, não intermedeia jogos, não comercializa bilhetes, tampouco possui qualquer vínculo, parceria ou representação com casas lotéricas, com a Caixa Econômica Federal ou com quaisquer instituições financeiras ou órgãos governamentais.

Toda e qualquer aposta eventualmente realizada ocorre externamente à plataforma, sendo de inteira responsabilidade do organizador e dos participantes envolvidos.

Os valores eventualmente arrecadados por meio de transferências eletrônicas (PIX) destinam-se exclusivamente à divisão de custos entre particulares, não configurando atividade comercial, financeira ou bancária.

O COTISTA reconhece que a plataforma atua apenas como instrumento auxiliar de controle, não se responsabilizando por:

- inadimplência de participantes;
- erros de repasse;
- falhas de comunicação entre os envolvidos;
- resultados dos jogos ou sorteios.

Os dados pessoais informados (nome, CPF, endereço, telefone e chave PIX) são utilizados exclusivamente para identificação e organização interna, não sendo compartilhados com outros participantes, observadas as boas práticas da Lei Geral de Proteção de Dados Pessoais – Lei nº 13.709/2018 (LGPD).

O COTISTA declara que as informações prestadas são verdadeiras e assume integral responsabilidade civil e legal por sua veracidade.

O uso da plataforma implica aceite eletrônico integral deste termo, produzindo efeitos legais equivalentes à assinatura física, nos termos da legislação vigente.

Aposta: ${nomeAposta}
Cotista: ${nome} (CPF: ${cpf})
Data/Hora do Aceite: ${dataHora}
`;

  // Quebra o texto em linhas para respeitar a margem direita
  const linhas = doc.splitTextToSize(texto, margemDireita - margemEsquerda);
  doc.text(linhas, margemEsquerda, cursorY);

  doc.save(`Aceite_${nomeAposta}_${nome}.pdf`);
}
