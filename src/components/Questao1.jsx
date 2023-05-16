import React, { useEffect, useState } from "react";
const QuestaoA = () => {
  const correntistas = [
    { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
    { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
    { nome: "Fulano", aplic: { pp: 5000.0, rf: 0.0, cc: 500 } }
  ];

  return (
    <>
      {
        // passo o objeto correntistas para o componente QuestaoB
      }
      <QuestaoB correntistas={correntistas} />
    </>
  );
};

export function QuestaoB({ correntistas }) {
  const [correntistaMaiorMedia, setCorrentistaMaiorMedia] = useState(null);
  const [mediaGeral, setMediaGeral] = useState(0);

  useEffect(() => {
    let somaMedias = 0;

    correntistas.forEach((correntista) => {
      const mediaCorrentista =
        (correntista.aplic.pp + correntista.aplic.rf + correntista.aplic.cc) /
        3;
      somaMedias += mediaCorrentista;
      //calculo a media dos correntistas e atribui uma media geral
      if (
        !correntistaMaiorMedia ||
        mediaCorrentista > correntistaMaiorMedia.media
      ) {
        setCorrentistaMaiorMedia({
          nome: correntista.nome,
          media: mediaCorrentista
        });
      }
      //testo se o a media do correntista é maior do que as dos outros
    });

    const mediaGeral = somaMedias / correntistas.length;
    setMediaGeral(mediaGeral);
  }, [correntistas, correntistaMaiorMedia]);

  return (
    <>
      <p>Média geral: {mediaGeral}</p>
      <p>Correntista com a maior média:</p>
      {correntistaMaiorMedia && (
        <div>
          <p>Nome: {correntistaMaiorMedia.nome}</p>
          <p>Média: {correntistaMaiorMedia.media}</p>
        </div>
      )}
    </>
  );
  //imprimo e retorno a media geral, o nome do correntista com a meior media e o valor dessa media
}

export default QuestaoA;
