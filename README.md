# 📝 Painel de Acompanhamento Pessoal

Um dashboard minimalista e responsivo focado na gestão de métricas de produtividade. O projeto centraliza o acompanhamento de metas acadêmicas, desenvolvimento profissional e rotinas de saúde em uma única Single Page Application (SPA), garantindo uma visualização clara do progresso e da consistência ao longo do tempo.

## Funcionalidades Atuais

A plataforma está modularizada para atender a diferentes fluxos de acompanhamento contínuo:

- **Visão Geral (Dashboard):** Painel analítico que consolida horas de estudo por área de conhecimento e taxa de execução de atividades físicas no mês vigente.
- **Gestão de Saúde e Condicionamento:** Calendário dinâmico com processamento de datas para registro diário de treinos e visualizador integrado de fichas de exercícios estruturadas.
- **Ciência de Dados (Formação):** Controle de progresso em trilhas de aprendizagem de longa duração, com indicadores visuais de avanço segmentados por fase de estudo.
- **Monitoramento Acadêmico (MBA e ADS):** Sistema de gestão de frequência presencial e noturna, registro de menções finais e diário de bordo para as disciplinas em curso.
- **Desenvolvimento de Idiomas:** Registro em log de sessões de estudo, contabilização de horas e documentação de vocabulário.

## Stack Tecnológico

A arquitetura atual prioriza performance no lado do cliente, baixo acoplamento e um design limpo:

- **HTML5:** Estruturação semântica da aplicação.
- **Tailwind CSS:** Framework de utilitários para estilização responsiva, garantindo uma UI/UX padronizada e livre de excessos visuais.
- **JavaScript (Vanilla):** Lógica de navegação SPA, manipulação de estado, processamento de datas e cálculo de métricas em tempo real.
- **Local Storage:** Persistência de dados no lado do cliente, garantindo privacidade estrutural das informações cadastradas.
- **Phosphor Icons:** Biblioteca de iconografia para sinalização visual limpa.

## Roadmap de Desenvolvimento

O projeto foi estruturado para escalar de uma interface estática para uma aplicação full-stack orientada a dados. As próximas etapas de implementação incluem:

- [ ] **Integração de Banco de Dados:** Substituição do armazenamento local por bases relacionais ou NoSQL em nuvem (ex: PostgreSQL, MongoDB).
- [ ] **Desenvolvimento de API:** Criação de um serviço backend (Node.js/Python) para roteamento seguro e gestão centralizada de dados.
- [ ] **Visualização Avançada de Dados:** Implementação de bibliotecas de gráficos (Chart.js ou D3.js) para análise de tendências de consistência e correlação de métricas.
- [ ] **Exportação de Relatórios:** Módulo para extração de dados consolidados em formatos CSV ou PDF.
- [ ] **Autenticação:** Sistema de login com criptografia para proteção dos registros e suporte a múltiplos usuários.

