# Teste Exploratório Completo - Site Bolt

## Objetivo
Realizar uma análise exploratória da aplicação, identificando falhas, inconsistências e oportunidades de melhoria na experiência do usuário.

---

## Escopo

- Menu principal
- Seção institucional
- Cards e botões da página inicial
- Rodapé (footer)
- Navegação geral

---

## Problemas encontrados

- Funcionalidades "Ouvidoria" e "Contato" não redirecionam corretamente
- Páginas de políticas retornam erro 404 (Not Found)
- Botão "Clique Aqui" do card de 'Antecipação de Recebiveis' executa redirecionamento incorreto.
- Inconsistência no botão "Adquira sua Bolt"
- Algumas funcionalidades do rodapé (Portal do Lojista e Serviços) não apresentam comportamento esperado

---

## Detalhamento dos principais problemas

- **Funcionalidades "Ouvidoria" e "Contato"**
  → Ao clicar, a página apenas recarrega e não há redirecionamento  
  → Esperado: redirecionar para a página "Fale Conosco"

- **Páginas de políticas**
  → As opções "Política de Segurança Cibernético" e "Política e Normas Internas de PLD" redirecionam para páginas com erro "Not Found"  
  → Esperado: exibir conteúdo das políticas e disponibilizar acesso ao PDF

- **Antecipação de recebíveis**
  → O botão "Clique aqui" redireciona para uma página genérica da Bolt  
  → Esperado: redirecionar para conteúdo específico da funcionalidade

- **Botão "Adquira sua Bolt"**
  → Na seção "Sobre a Bolt", apenas recarrega a página  
  → No menu principal funciona corretamente  
  → Esperado: comportamento consistente em todos os pontos

- **Funcionalidades do rodapé (Portal do Lojista e Serviços)**
  → Itens como "Solicitação de antecipação", "Relatórios gerenciais" e "DIRF" não apresentam comportamento adequado  
  → Em alguns casos, a página apenas recarrega ou abre uma nova guia com a mesma aplicação  
  → Esperado: redirecionar corretamente para funcionalidades específicas ou páginas relacionadas

---

## Sugestões de melhoria

- Melhorar a visibilidade das funcionalidades presentes no rodapé  
  → Tornar itens importantes acessíveis no menu principal ou em área mais visível

- Implementar funcionalidade "Fale Conosco"  
  → Garantir acesso ao suporte através de formulário ou canais de atendimento

- Padronizar comportamento de botões  
  → Evitar inconsistências entre elementos com a mesma função

- Implementar tratamento de erro 404 customizado  
  → Melhorar experiência do usuário em páginas inexistentes

- Validar links e rotas antes de publicação  
  → Evitar links quebrados em produção

- Reestruturar o conteúdo do rodapé  
  → O rodapé atualmente contém diversas funcionalidades que não estão operando corretamente e possuem baixa visibilidade  
  → Sugere-se manter no rodapé apenas informações institucionais como:
     - Redes sociais (com ícones)
     - Informações de contato
     - Endereço/localização  
  → Funcionalidades operacionais devem ser movidas para áreas mais apropriadas, como o menu principal  
  → Reduz a sobrecarga de informações no rodapé e melhora a experiência de navegação

---

## Observações adicionais

- Foi identificada inconsistência entre elementos que representam a mesma funcionalidade em diferentes partes da aplicação
- Algumas funcionalidades importantes possuem baixa visibilidade por estarem localizadas apenas no rodapé

---

## Conclusão

A aplicação apresenta boa estrutura visual e organização, porém possui falhas críticas relacionadas à navegação, redirecionamento e consistência de funcionalidades. Esses problemas impactam diretamente a experiência do usuário e o acesso a informações essenciais.