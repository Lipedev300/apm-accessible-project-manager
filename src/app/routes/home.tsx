import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "APM, gestão de projetos ágeis de forma acessível para você" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1> APM, tenha mais praticidade ao gerencir seus projetos</h1>
      <main>
        <h2> início</h2>
        <p> você já sentiu dificuldades ao tentar usar ferramentas como Trelo e Gira, ou porque eram muitas opções e a interface era poluída, ou caso você seja uma pessoa com deficiência e não conseguiu usá-los com leitor de tela?</p>
        <p> Com o APM (Accessible Project Manager), seus problemas acabaram. Aqui você terá acesso a seus dados e andamento de projeto direto ao ponto, sem dificuldades ou interfaces complexas</p>
        <p> Crie e gerencie projetos, adicione usuários aos seus projetos como participantes, tenha acesso a cálculo de andamento do projeto com base nas tarefas entregues e no tempo gasto, tudo de forma simples e direta.</p>
        <Link to='/projetos/novo'> crie um projeto</Link>
    </main>
    </div>   
  );
}
