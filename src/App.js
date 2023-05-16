import QuestaoA from "./components/Questao1";
import Questao2 from "./components/Questao2";
import Questao03 from "./components/Questao3";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Questao 1</h1>
      <QuestaoA />,
      <hr />
      <h1>Questao 2</h1>
      <Questao2 />
      <hr />
      <h1>Questao 3</h1>
      <Questao03 />
      <hr />
      <h2>Questão 4 no arquivo Questao4.txt</h2>
    </>
  );
}
