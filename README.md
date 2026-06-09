# 📊 Painel de Acompanhamento Pessoal

Um dashboard minimalista, moderno e responsivo desenvolvido para centralizar, gerenciar e analisar métricas de rotina diária. O projeto integra o acompanhamento de metas de estudos, formação acadêmica e condicionamento físico em uma única interface (Single Page Application).

## 🚀 Funcionalidades Atuais

A plataforma está dividida em módulos focados na produtividade e consistência:

- **Visão Geral (Dashboard):** Painel analítico com a somatória de horas dedicadas a cada área de estudo e a taxa de sucesso dos treinos no mês vigente.
- **Rotina Fitness:** - Calendário dinâmico mensal para *check* diário de atividades.
  - Visualizador integrado de Fichas de Treino (rotinas de A a F, cardio e pilates).
- **Ciência de Dados (Formação Alura):** Controle de progresso com barras de carregamento divididas pelas 4 fases principais da formação.
- **MBA (Monitor de Disciplinas):** Acompanhamento de frequência nas aulas presenciais de sexta e sábado, registro de menções finais e diário de bordo.
- **Faculdade (ADS):** Controle de frequência nas aulas noturnas e área para resumos de disciplinas de Análise e Desenvolvimento de Sistemas.
- **Inglês:** Registro de horas de prática e vocabulário/anotações.

## 🛠️ Tecnologias Utilizadas

Atualmente, o projeto foca na simplicidade, velocidade e design limpo:

- **HTML5:** Estruturação semântica.
- **Tailwind CSS:** Framework de utilitários para um design responsivo, minimalista e focado em UI/UX.
- **JavaScript (Vanilla):** Lógica de transição de páginas (SPA), manipulação de estado, cálculos de progresso e geração dinâmica de calendários.
- **Local Storage:** Armazenamento persistente de dados diretamente no navegador do utilizador.
- **Phosphor Icons:** Biblioteca de ícones moderna e consistente.

## 🗺️ Roadmap (Próximos Passos)

Este projeto está em constante evolução. As futuras atualizações visam transformar esta interface estática numa aplicação full-stack orientada a dados:

- [ ] **Migração de Dados:** Substituir o `localStorage` por uma base de dados em nuvem (ex: MongoDB ou PostgreSQL).
- [ ] **Desenvolvimento de API:** Criar um backend (Node.js ou Python) para gerir as requisições e a segurança da aplicação.
- [ ] **Visualização de Dados Avançada:** Integrar bibliotecas como Chart.js ou D3.js para gerar gráficos preditivos e comparativos sobre o rendimento ao longo dos meses.
- [ ] **Exportação de Relatórios:** Capacidade de gerar ficheiros CSV ou PDF consolidados com o progresso trimestral.
- [ ] **Autenticação de Utilizador:** Sistema de login para garantir a privacidade das anotações e métricas.
