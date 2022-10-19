O projeto deve ser analisado antes da implementação

# Clean Architecture

## Objetivo
### melhor manutenção, atualização e menos dependências.
### Fornecer aos desenvolvedores uma maneira de organizar o código de forma que encapsule a lógica de negócios, mas mantenha-o separado do mecanismo de entrega

<br />

## Enterprise business rules
- configuration
- Entities

## Application business rules
- Use cases

## Interface adapter
- Controllers
- routes
- serializes

## Framework and drivers
- Web
- Devices
- DB
- UI
- External interface

<br />

# VANTAGENS
## Testável
- Facilmente testavel

## Independente da interface do usuário
- A interface do usuário pode mudar facilmente

## Independente de banco de dados
- Regras de negócios não estão vinculadas ao banco de dados.

## Independente de qualquer agente externo
- As regras de negócios simplesmente não sabem nada sobre o mundo exterior, não estão ligadas a nenhum Framework.

Fonte: https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6

<br />

# Estrutura de pastas
    src                  → Application sources
      └ application      → Camada de serviços da aplicação
          └ security     → Ferramentas de segurança (ex: para gerar e decodificar token de acesso OAuth)
          └ use-cases    → Regras de negócios da aplicação
          └ utils        → Ferramentas úteis para o escopo da lógica de negócio
      └ infrastructure   → Frameworks, drivers, ferramentas como Database e etc.
        └ config         → Serviços de configuração da aplicação
        └ orm            → Middleware de ORMs de banco de dados
          └ typeorm.ts   → Cliente e esquemas do typeorm
        └ repositories   → Implementação de interfaces de repositório de domínio
        └ security       → Implementações de ferramentas de segurança (ex: JwtAccessTokenManager)
        └ webserver      → Configuração do servidor Web (servidor, rotas, plugins, etc.)
          └ server.ts    → Definição do servidor
      └ interfaces       → Interliga o externo do interno
        └ controllers    → Manipuladores de rotas
        └ routes.ts      → Definições de rota
        └ serializers    → Conversão ou reestrutura de objetos
        └ utils          → Ferramentas úteis para o escopo de interface

<br />

# Nomenclatura de pastas

## camelCase:
### para nomes de arquivos de classes, componentes React, VARIÁVEIS E FUNÇÕES

<br/>

## snake_case:
### para colunas de banco de dados

<br/>

## kebab-case:
### Para os demais arquivos
