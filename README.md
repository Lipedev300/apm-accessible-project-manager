# APM, gerenciamento de projetos de forma acessível para todos.

## Contexto:

    Atualmente, muitas ferramentas de gerenciamento de projetos como trelo e jira, usadas muito em projetos de software e também em outros tipos, apesar de serem extremamente populares, não contam com recursos de acessibilidade para cegos e outras deficiências.
    É importante dizer que falta de acessibilidade nos sites não significa apenas botões sem rótulo ou imagem sem descrição. Esses detalhes também são essenciais de serem revisados, mas a falta de acessibilidade também pode incluir interface desorganizada ou muito poluída com diversos ícones e botões, o que dificulta a navegação eficiente com leitor de tela.

    ## Proposta do APM.

        O APM (Accessible Project Manager) chega para justamente mitigar esse problema. Contando com uma interface simples e nativamente acessível para leitor de tela, o sistema proporcionará aos usuários o gerenciamento eficiente de projetos e tarefas, monitorando o andamento do projeto conforme o tempo previsto para conclusão, a saúde/status do projeto (se está atrasado ou adiantado), entre muitos outros detalhes, podendo usá-lo tanto na web quanto no mobile, aplicativo.

## Dados técnicos do projeto.

    Este projeto utiliza uma arquitetura moderna de monorepo, o que possibilita a melhor gestão e manutenibilidade do projeto a longo prazo.

### Tecnologias utilizadas.

-- core: Turborepo com bun workspaces.
-- Front-end: next.js com tailwind CSS.
-- back-end: nestJS com typeORM e typescript.
-- Banco de dados: postgreSQL.
-- Mobile: React Native com expo.
-- infraestrutura: docker para conteinirização do banco, não necessitando de ter o postgres instalado localmente.