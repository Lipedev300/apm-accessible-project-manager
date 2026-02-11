import { useState } from "react";

export default function project() {
  let [mensagem, setMensagem] = useState('');

  function handleCriar(dados: FormData) {
    const titulo = dados.get('titulo') as string;

    console.log(`Salvando projeto de título ${titulo}`);

    setMensagem(`Cadastro de projeto ${titulo} realizado com sucesso!`);
    const form = document.getElementById('formulario') as HTMLFormElement;
    form.reset();
  }
    return (
      <div>
        <h1> Criação de projeto</h1>
        <div role="status" aria-live="polite">
          {mensagem}
        </div>
        <p> preencha os dados abaixo para criar o seu projeto</p>
        <form id="formulario" className="container-formulario" action={handleCriar}>
            <label htmlFor="title"> título do projeto</label>
            <input id="title" type="text" name="titulo" placeholder="digite o título do projeto" className="campo-entrada" required></input>

            <label htmlFor="description"> descrição do projeto</label>
            <input id="description" type="text" name="descricao" placeholder="insira a descrição do projeto, do que se trata?" className="campo-entrada" required></input>

            <label htmlFor="datebegin"> data de início do projeto</label>
            <input id="datebegin" type="date" name="dataInicio" placeholder="Informe a data de início do projeto" className="campo-entrada" required></input>

            <label htmlFor="dateend"> data de finalização do projeto</label>
            <input id="dateend" type="date" name="dataFim" placeholder="indique a data de finalização do projeto" className="campo-entrada" required></input>
            <button id="createproject" type="submit" className="botao-criar"> criar projeto</button>
        </form>
      </div>
    );
}