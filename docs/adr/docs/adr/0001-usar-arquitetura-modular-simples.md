# 1. Utilização de Arquitetura de Domínio Único Simples

- **Status:** Aceito
- **Contexto:** Precisamos entregar um projeto funcional de escopo enxuto (Nível B) dentro do prazo limite, mantendo a clareza e a facilidade de manutenção.
- **Decisão:** Optamos por uma API monolítica de domínio único com separação básica entre rotas e lógica, utilizando Express.js e banco em memória.
- **Consequências Positivas:** Agilidade extrema no desenvolvimento, facilidade para escrever testes unitários e menor complexidade de infraestrutura.
- **Consequências Negativas:** Não escala para grande volume de dados transacionais persistidos, o que é aceito para os requisitos do Nível B.
