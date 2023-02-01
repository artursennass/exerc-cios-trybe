import React from 'react';

const PersonalDataForm = () => {
  return (
    <form action="">
        <input type="text" placeholder="Nome"/>
        <br />
        <input type="number" name="" id="" placeholder="Idade"/>
        <br />
        <input type="text" placeholder="Cidade"/>
        <br />
        <input type="radio" name="modulo" id="fundamentos" />Fundamentos
        <input type="radio" name="modulo" id="frontEnd" />Front-end
        <input type="radio" name="modulo" id="BackEnd" />Back-end
        <input type="radio" name="modulo" id="cienciaDaComputacao" />Ciência da Computação
        <br />
        <button type="submit">Enviar</button>
    </form>
  );
};

export default PersonalDataForm;