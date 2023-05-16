import React, { useEffect, useState } from "react";

const Questao03 = () => {
  const [capitais, setCapitais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        );
        const data = await response.json();
        const populacaoTotal = data.reduce(
          (total, country) => total + country.population,
          0
        );
        const mediaPopulacao = populacaoTotal / data.length;
        //calcula a media da população dos países
        const capitaisFiltradas = data
          .filter((country) => country.population > mediaPopulacao)
          //determina o pais com a maior média
          .map((country) => `${country.capital[0]} - ${country.population}`);
        setCapitais(capitaisFiltradas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Capitais com população acima da média:</h1>
      <ul>
        {capitais.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
    </div>
  );
  //imprime os paises com maiores medias
};

export default Questao03;
