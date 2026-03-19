# Bug Report - Site Bolt

## BUG-01
Título: Link "Ouvidoria" não redireciona para "Fale Conosco"

Passos para reproduzir:
1. Acessar https://bolt.com.br/
2. Rolar a página até o rodapé 
3. Ir na seção de "Institucional"
4. Clicar em "Ouvidoria"

Resultado esperado:
O sistema deve redirecionar para a página "Fale Conosco"

Resultado atual:
A página apenas recarrega e retorna ao topo da home

Severidade: Alta
Prioridade: Alta

Evidência:

▶️ Vídeo: 
[Ver execução do bug](../evidencias/bugs/01_bug_ouvidoria.mp4)

---

## BUG-02
Título: Link "Contato" não redireciona corretamente

Passos para reproduzir:
1. Acessar https://bolt.com.br/
2. Rolar a página até o rodapé 
3. Ir na seção de "Institucional"
4. Clicar em "Contato"

Resultado esperado:
Deve redirecionar para a página "Fale Conosco"

Resultado atual:
A página recarrega e retorna ao início

Severidade: Alta
Prioridade: Alta

Evidência:

▶️ Vídeo: 
[Ver execução do bug](../evidencias/bugs/02_bug_contato.mp4)

---

## BUG-03
Título: Página "Política de Segurança Cibernético" retorna erro "Not Found"

Passos para reproduzir:
1. Acessar https://bolt.com.br/
2. Rolar a página até o rodapé 
3. Ir na seção de "Institucional"
4. Clicar em "Política de Segurança Cibernético"

Resultado esperado:
Deve abrir a página da política e disponibilizar o PDF com as "politicas de 
segurança cibernética"

Resultado atual:
A aplicação redireciona para uma página de erro com a mensagem:
"Not Found - The requested URL was not found on this server."

Observação:
A URL acessada (bolt.com.br/politica_seguranca) indica que a rota pode estar incorreta ou inexistente no servidor, resultando em erro HTTP 404.

Severidade: Crítica
Prioridade: Alta

Evidência:

[Bug 03 - Not Found](../evidencias/bugs/03_bug_politica_cibernetica.png)

▶️ Vídeo: 
[Ver execução do bug](../evidencias/bugs/03_bug_politica.mp4)

---

## BUG-04
Título: Página "Política e Normas Internas de PLD" retorna erro "Not Found"

Passos para reproduzir:
1. Acessar https://bolt.com.br/
2. Rolar a página até o rodapé 
3. Ir na seção de "Institucional"
4. Clicar em "Política e Normas Internas de PLD"

Resultado esperado:
Deve abrir a página da política e disponibilizar o PDF com as  “Política e Normas Internas de PLD”

Resultado atual:
A aplicação redireciona para uma página de erro com a mensagem:
"Not Found - The requested URL was not found on this server."

Observação:
O mesmo erro acontece com a página de "Política de Segurança Cibernético"

Severidade: Crítica
Prioridade: Alta

Evidência:

[Bug 04 - Not Found](../evidencias/bugs/04_bug_normas_pld.png)

▶️ Vídeo: 
[Ver execução do bug](../evidencias/bugs/04_bug_normas.mp4)