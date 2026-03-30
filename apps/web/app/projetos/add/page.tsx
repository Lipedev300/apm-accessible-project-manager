export default function Project() {

  return (
    <div>
      <h1> Criação de projeto</h1>
      <p> preencha os dados abaixo para criar o seu projeto</p>
      <form method="post" id="formulario">
        <label htmlFor="title"> título do projeto</label>
        <input
          id="title"
          type="text"
          name="titulo"
          placeholder="digite o título do projeto"
          required
        ></input>

        <label htmlFor="description"> descrição do projeto</label>
        <input
          id="description"
          type="text"
          name="descricao"
          placeholder="insira a descrição do projeto, do que se trata?"
          required
        ></input>

        <label htmlFor="datebegin"> data de início do projeto</label>
        <input
          id="datebegin"
          type="date"
          name="dataInicio"
          placeholder="Informe a data de início do projeto"
          required
        ></input>

        <label htmlFor="dateend"> data de finalização do projeto</label>
        <input
          id="dateend"
          type="date"
          name="dataFim"
          placeholder="indique a data de finalização do projeto"
          required
        ></input>
        <button id="createproject" type="submit">
          {" "}
          criar projeto
        </button>
      </form>
    </div>
  );
}
