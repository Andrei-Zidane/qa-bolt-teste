# Teste Exploratório - Site Bolt

Data: 17/03/2026

## Objetivo
Validar o funcionamento do menu Institucional e seus redirecionamentos.

## Escopo
- Sobre a Bolt
- Grupo Adriano Cobuccio
- Atendimento Online
- Ouvidoria
- Contato
- Política de Segurança Cibernético
- Política e Normas Internas de PLD

## Resultados

### ✔ Funcionalidades funcionando corretamente:
- Sobre a Bolt → Redirecionamento correto
- Grupo Adriano Cobuccio → Redirecionamento correto
- Atendimento Online → Funcionando conforme esperado

### ❌ Problemas encontrados:

- Ouvidoria não redireciona corretamente
- Contato não redireciona corretamente
- Política de Segurança Cibernético retorna erro "Not Found"
- Política de PLD retorna erro "Not Found"

## Observações técnicas
Durante os testes foi observado comportamento de recarregamento da página (possível problema de rota ou link incorreto).

## Possíveis causas
- Links quebrados ou mal configurados
- Rotas inexistentes no servidor
- Falha na navegação do front-end

## Sugestões de melhoria

- Implementar página de erro 404 customizada
- Exibir código de status HTTP (404) de forma clara ao usuário
- Garantir fallback amigável para páginas inexistentes
- Validar todos os links institucionais antes de deploy

## Conclusão
A aplicação apresenta falhas críticas em funcionalidades institucionais importantes, impactando diretamente a experiência do usuário e acesso a informações essenciais.