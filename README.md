# 🧪 Teste QA - Site Bolt

Este projeto tem como objetivo realizar testes manuais/exploratórios no site da Bolt, conforme desafio proposto no processo seletivo.

---

## ⭐ Diferencial do projeto

Além dos requisitos solicitados no desafio, foram implementados testes automatizados com Cypress por iniciativa própria, com o objetivo de agregar maior cobertura de testes e demonstrar conhecimento prático em automação.

Essa abordagem permite validar comportamentos da aplicação de forma automatizada, incluindo cenários positivos e falhas reais identificadas durante o teste exploratório.

---

## 📌 Objetivo

Validar funcionalidades da aplicação, identificar bugs e propor melhorias, utilizando:

- Teste exploratório
- Casos de teste em Gherkin (BDD)
- Automação de testes com Cypress

---

## 🛠 Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js

---

## 📂 Estrutura do projeto

qa-bolt-teste/

├── cypress/  
│   ├── e2e/  
│   │   ├── institucional.cy.js  
│   │   ├── atendimento.cy.js  
│   │   └── navegacao.cy.js  
|
├── docs/  
│   ├── casos_de_teste_gherkin.md  
│   ├── bug_report.md  
│   └── teste_exploratorio_completo.md  
|
├── evidencias/  
│   ├── bugs/  
│   └── testes/  

├── cypress.config.js  
├── package.json  
└── README.md  

---

## 🧪 Tipos de testes realizados

### ✔ Teste Exploratório
Análise geral da aplicação para identificar falhas, inconsistências e oportunidades de melhoria.

### ✔ Casos de Teste (Gherkin)
Cenários descritos utilizando linguagem BDD (Dado / Quando / Então).

### ✔ Testes Automatizados
Automação com Cypress validando:

- Fluxos funcionais
- Redirecionamentos
- Links institucionais
- Comportamentos esperados e não esperados

---

## 🐞 Principais problemas encontrados

- Funcionalidades "Ouvidoria" e "Contato" não funcionam corretamente
- Páginas de políticas retornam erro 404
- Botões sem ação (ex: "Saiba mais")
- Redirecionamentos incorretos
- Inconsistência entre elementos com mesma funcionalidade
- Problemas em funcionalidades do rodapé

---

## ⚠️ Observação sobre os testes automatizados

Alguns testes foram mantidos com falha propositalmente, pois representam bugs reais identificados na aplicação.

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

git clone <seu-repositorio>

### 2. Instalar dependências

npm install

### 3. Executar Cypress

Modo interativo:
npx cypress open

Modo headless:
npx cypress run

---

## 📸 Evidências

As evidências dos testes (prints e vídeos) estão disponíveis na pasta:

evidencias/

---

## 💡 Melhorias sugeridas

- Implementação de página "Fale Conosco"
- Correção de links quebrados
- Padronização de comportamento de botões
- Melhoria na navegação e arquitetura do menu
- Tratamento adequado para erros 404
- Reestruturação do rodapé

---

## 📄 Conclusão

A aplicação apresenta boa estrutura visual, porém possui falhas críticas em navegação, redirecionamento e consistência de funcionalidades.  

Os testes realizados evidenciam pontos de melhoria importantes para garantir uma melhor experiência ao usuário.

---

## 👨‍💻 Autor

Andrey Zidane