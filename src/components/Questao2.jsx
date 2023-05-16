import React, { useState } from "react";

const Questao2 = () => {
  const [virar, setVirar] = useState(true);
  return (
    <>
      {
        // imprima o pokemon de frente caso a variavel seja true e de costas caso seja false
        // pra isso, use condicional
      }
      {virar ? (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
      ) : (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" />
      )}

      <button onClick={() => setVirar(!virar)}>Mude a posição</button>
      {
        // função onClick para alterar valores da variavels a cada click e flipa o pokemon
      }
    </>
  );
};

export default Questao2;

//O componente utiliza o hook useState para criar um estado mudar, que é inicializado com o valor true. Esse estado representa a orientação atual da imagem do Pokémon. Em seguida, o componente renderiza um elemento <img> que exibe a imagem do Pokémon na orientação atual, e um elemento <button> que, quando clicado, alterna a orientação da imagem do Pokémon ao chamar a função setmudar com o valor oposto do estado atual. A orientação da imagem é alternada utilizando uma estrutura condicional ternária, onde a imagem padrão do Pokémon é exibida quando mudar é verdadeiro e a imagem virada é exibida quando mudar é falso.
