# 🥊 Pomodoro Fighter

> **Status:** 🚧 Em Construção

**Objetivo:** Criar uma ferramenta de foco personalizada que respeita meu ritmo. Diferente dos timers padrões, este calcula meu descanso baseado no meu esforço (20%) e registra minha evolução no banco de dados.

---

## 1. A Lógica (O Core)
- [ ] **Input Flexível:** Criar campo para digitar minutos de foco (ex: 45, 50, 90 min) em vez de tempos fixos.
- [ ] **Cálculo Dinâmico:** Implementar lógica `Descanso = Foco * 0.20`.
    - *Exemplo:* 60 min foco = 12 min descanso.
- [ ] **O Cronômetro:**
    - [ ] Contagem regressiva visível (`MM:SS`).
    - [ ] Troca automática: Fim do Foco -> Alerta -> Início do Descanso.
    - [ ] Botões: **Iniciar**, **Pausar**, **Resetar**.

## 2. A Interface (Front-end)
- [ ] **Visual:** Tema Escuro (Dark Mode) para conforto visual.
- [ ] **Elementos:**
    - Input numérico.
    - Display grande do timer.
    - Botões estilizados.
    - Área de "Histórico Recente".
- [ ] **Feedback:** Alterar cores ou avisos visuais quando mudar de "Foco" para "Descanso".

## 3. O Banco de Dados (MySQL)
- [ ] Criar tabela única `sessoes_estudo`.
- [ ] **Estrutura:**
    - `id`: INT (Auto Increment, PK)
    - `minutos_foco`: INT
    - `minutos_descanso`: INT
    - `data_hora`: DATETIME (Default Current_Timestamp)

## 4. A Integração (Back-end PHP)
- [ ] **Conexão:** Script PHP para conectar ao banco via PDO/MySQLi.
- [ ] **Gatilho de Salvamento:**
    - [ ] Salvar apenas quando o ciclo de **FOCO** terminar com sucesso.
    - [ ] Ignorar resets no meio do ciclo.
- [ ] **Comunicação:** Usar JavaScript `fetch` API (AJAX) para enviar dados ao PHP sem recarregar a página.

## 5. O Hall da Fama (Histórico)
- [ ] Exibir tabela com as **últimas 5 sessões**.
- [ ] Query: `SELECT * FROM sessoes_estudo ORDER BY id DESC LIMIT 5`.

## 6. Regras de Desenvolvimento (Minhas Leis)
1.  **GitHub First:** Nada existe fora do repo. Commits semânticos (`feat:`, `fix:`, `style:`) são obrigatórios.
2.  **KISS (Keep It Simple, Stupid):** Sem login, sem frameworks pesados. Apenas HTML, CSS, JS e PHP puro.
3.  **Funcionalidade > Beleza:** Primeiro a lógica e o banco, depois o CSS.

---
*Desenvolvido durante minhas sessões de Deep Work.* 🚀
