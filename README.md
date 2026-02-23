# 🥊 Pomodoro Fighter

> **Status:** 🚧 Em Construção

**Objetivo:** Criar uma ferramenta de foco personalizada que respeita o ritmo do usuário. Diferente dos timers padrões engessados, o Pomodoro Fighter calcula o tempo de descanso com base no esforço real (20% do tempo de foco) e registra a evolução em um banco de dados para acompanhamento de produtividade.

---

## ⚙️ Funcionalidades Principais (Core)
- **Input Flexível:** O usuário define livremente os minutos de foco desejados (ex: 45, 50, 90 min) de acordo com sua capacidade de concentração do dia.
- **Cálculo Dinâmico de Descanso:** O sistema aplica automaticamente a regra de `Descanso = Foco * 0.20` (ex: 60 min de foco geram 12 min de descanso merecido).
- **Cronômetro Inteligente:** Contagem regressiva precisa (`MM:SS`) com transição automática entre os ciclos de Foco e Descanso, emitindo alertas visuais e sonoros.
- **Controles Totais:** Botões de Iniciar, Pausar e Resetar para controle absoluto da sessão.

## 🎨 Interface e Experiência (UI/UX)
- **Dark Mode Nativo:** Tema escuro projetado para conforto visual durante longas sessões de "Deep Work".
- **Feedback Visual Em Tempo Real:** Alteração de cores e avisos na tela para indicar claramente em qual ciclo o usuário está (Foco ou Descanso).
- **Design Minimalista:** Input numérico blindado contra erros de digitação, display gigante para fácil visualização e botões responsivos.

## 🗄️ Arquitetura de Back-end e Banco de Dados (Em Implementação)
A infraestrutura está sendo preparada para persistência de dados utilizando **PHP puro (PDO/MySQLi)** e **MySQL**:
- **Banco de Dados Relacional:** Tabela `sessoes_estudo` estruturada com ID (PK), minutos de foco, minutos de descanso e timestamp (DATETIME).
- **Salvamento Assíncrono:** Integração via JavaScript `fetch` API (AJAX) para comunicar com o back-end e salvar os dados silenciosamente, sem recarregar a página.
- **Gatilho de Sucesso (Anti-Cheat):** O sistema é programado para registrar no banco de dados *apenas* as sessões de foco que chegarem a zero. Resets e desistências no meio do ciclo são ignorados.
- **Hall da Fama (Histórico):** Exibição dinâmica em tela das últimas 5 sessões concluídas, consultadas diretamente do banco de dados (`SELECT * ORDER BY id DESC LIMIT 5`).

## 📜 Regras de Desenvolvimento (Minhas Leis)
1. **GitHub First:** Nada existe fora do repositório. Commits semânticos (`feat:`, `fix:`, `style:`, `docs:`) são estritamente obrigatórios.
2. **KISS (Keep It Simple, Stupid):** Sem frameworks pesados ou complexidade desnecessária. Apenas HTML, CSS, JS Vanilla e PHP puro.
3. **Funcionalidade > Beleza:** A prioridade é a lógica do motor, as validações de segurança e a arquitetura do banco. O CSS refinado é a última etapa.

---
*Desenvolvido durante minhas sessões de Deep Work.* 🚀
