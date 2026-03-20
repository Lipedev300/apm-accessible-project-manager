import { Form, useActionData } from "react-router";
import { dbUpdater } from "../../../../prisma/prisma";
import type { Route } from "./+types/create";

export async function action({ request }: Route.ActionArgs) {
  const dadosFormulario = await request.formData();
  const title = dadosFormulario.get("titulo") as string;
  const description = dadosFormulario.get("descricao") as string;
  const startDate = dadosFormulario.get("dataInicio") as string;
  const endDate = dadosFormulario.get("dataFim") as string;

  try {
    await dbUpdater.project.create({
      data: {
        title: title,
        description: description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    return {
      ok: true,
      mensagem: `Projeto ${title} criado com sucesso!`,
    };
  } catch (error) {
    console.error("Erro ao salvar no banco: ", error);
    return {
      ok: false,
      mensagem: `Opa, ô ou... Não foi possível salvar o projeto no sistema, tente novamente`,
    };
  }
}

export default function Project() {
  const actionData = useActionData<typeof action>();
  return (
    <div>
      <h1> Criação de projeto</h1>
      <div role="alert" aria-live="polite">
        {actionData?.mensagem && (
          <p style={{ color: actionData.ok ? "green" : "red" }}>
            {" "}
            {actionData.mensagem}
          </p>
        )}
      </div>
      <p> preencha os dados abaixo para criar o seu projeto</p>
      <Form method="post" id="formulario" className="container-formulario">
        <label htmlFor="title"> título do projeto</label>
        <input
          id="title"
          type="text"
          name="titulo"
          placeholder="digite o título do projeto"
          className="campo-entrada"
          required
        ></input>

        <label htmlFor="description"> descrição do projeto</label>
        <input
          id="description"
          type="text"
          name="descricao"
          placeholder="insira a descrição do projeto, do que se trata?"
          className="campo-entrada"
          required
        ></input>

        <label htmlFor="datebegin"> data de início do projeto</label>
        <input
          id="datebegin"
          type="date"
          name="dataInicio"
          placeholder="Informe a data de início do projeto"
          className="campo-entrada"
          required
        ></input>

        <label htmlFor="dateend"> data de finalização do projeto</label>
        <input
          id="dateend"
          type="date"
          name="dataFim"
          placeholder="indique a data de finalização do projeto"
          className="campo-entrada"
          required
        ></input>
        <button id="createproject" type="submit" className="botao-criar">
          {" "}
          criar projeto
        </button>
      </Form>
    </div>
  );
}
