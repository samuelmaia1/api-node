# Titulo
API Node para gerenciamento de aluguéis. (Em produção)

## Sobre o projeto
Esta API é capaz de receber dados vindos de um formulário front-end para, não apenas cadastrar, mas também resgatar, editar e excluir registros em bancos de dados postgres. O front-end deste projeto também está neste perfil do github, confere lá!

## Construção: 
- Node.js: Ambiente para rodar JavaScript fora do navegador;
- Express: Framework para Node.js;
- Cors Middleware para receber requisições de outras aplicações;
- Neon: Plataforma serverless para bancos Postgres.

## Motivação
O projeto surgiu a partir de uma necessidade pessoal para auxiliar o gerenciamento dos aluguéis de uma microempresa focada em materiais para festas.

## Próximos passos
- Fazer validações e autenticações através dessa API;
- Permitir o gerenciamento de clientes;
- Hospedar um banco Postgres em alguma plataforma para não necessitar mais da Neon.

## Pré-requisitos para funcionamento:
- Ter o Node.js instalado na sua maquina.

## Instruções para execução
1. Faça o clone do projeto;
2. Abra a pasta raiz no terminal e digite o comando: 
```
npm run dev
```
3. Neste momento, o servidor estará funcionando na porta 3000 do localhost.

## API Endpoints
Estes são apenas os endpoints disponíveis atualmente, durante o período de produção serão adicionados mais endpoints!
```markdown
GET /materiais - Retorna todos os materiais vindos do banco de dados

GET /materiais/{MaterialId} - Retorna o material específico que contém este id

POST /materiais/adicionar - Cria um novo recurso no banco de dados com o body que vem da requisição

PUT /materiais/alugar/{MaterialId} - Subtrai do estoque do material o valor vindo da requisição e substitui o registro por um atualizado

DELETE /materiais/deletar/{MaterialId} - Deleta o registro com este id
```