# PROJETO VET CLINIC

Este projeto é uma API CRUD que permite gerenciar tutores e seus pets, utilizando SQLite como banco de dados e ORM Sequelize para facilitar as operações de banco de dados.

## Configuração do Ambiente

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Além disso, instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
```

## Configuração do Banco de Dados

O banco de dados SQLite já está configurado no projeto e não requer nenhuma configuração adicional.

## Arquivo de Variáveis de Ambiente

Para configurar variáveis de ambiente, apague o `.example` do arquivo `.env.example` na raiz do projeto e defina as variáveis necessárias. Um exemplo de arquivo `.env` é fornecido abaixo:

```
PORT=3000
```

## Endpoints Disponíveis

### Listar todos os tutores
```
GET /tutor
```
Este endpoint retorna uma lista de todos os tutores cadastrados.

### Criar um novo tutor
```
POST /tutor
```
Este endpoint permite criar um novo tutor. Os dados do tutor devem ser enviados no corpo da requisição no formato JSON.

### Atualizar um tutor existente
```
PUT /tutor/:id
```
Este endpoint permite atualizar as informações de um tutor existente. O ID do tutor a ser atualizado deve ser fornecido como parâmetro na URL, e os novos dados devem ser enviados no corpo da requisição no formato JSON.

### Deletar um tutor
```
DELETE /tutor/:id
```
Este endpoint permite deletar um tutor existente. O ID do tutor a ser deletado deve ser fornecido como parâmetro na URL.

### Criar um pet e associá-lo a um tutor
```
POST /pet/:tutorId
```
Este endpoint permite criar um novo pet e associá-lo a um tutor existente. O ID do tutor ao qual o pet será associado deve ser fornecido como parâmetro na URL, e os dados do pet devem ser enviados no corpo da requisição no formato JSON.

### Atualizar as informações de um pet
```
PUT /pet/:petId/tutor/:tutorId
```
Este endpoint permite atualizar as informações de um pet existente. O ID do pet e do tutor associado devem ser fornecidos como parâmetros na URL, e os novos dados do pet devem ser enviados no corpo da requisição no formato JSON.

### Deletar um pet de um tutor
```
DELETE /pet/:petId/tutor/:tutorId
```
Este endpoint permite deletar um pet associado a um tutor. O ID do pet e do tutor associado devem ser fornecidos como parâmetros na URL.

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
node .\index.js
```

O servidor estará acessível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para relatar problemas ou sugestões.

## Recomendações

Recomenda-se o uso do Postman para realmente ver a aplicação funcionando;

Para isso:
-Inicie o Postman
-Entre em Headers
-Adicione um novo com as seguintes informações:
    - Key = "Content-Type"
    - Value = "application/json"


Para efetuar um POST ou PUT
- Entre em Body
- escolha a opção x-www-form-urlencoded
- Coloque em "Key" os valores das colunas do banco de dados e em Value os valores que deseja adicionar nas mesmas: 

