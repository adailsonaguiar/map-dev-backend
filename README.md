# map-dev-backend

### Clonando a aplicação

Clone a aplicação através do comando:

> git clone https://github.com/adailsonaguiar/map-dev-backend.git

### Instalar as dependências da aplicação

> npm i

### Conectar ao seu cluster no mongodb Atlas:

Crie um arquivo na pasta `/src/config` do app com o nome `mongo-connection.js`.

```javascript
const config = {
  url:
    'mongodb+srv://<user>:<passworc>@cluster0-	ftlu8.mongodb.net/map-dev?retryWrites=true&w=majority',
  rules: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
module.exports = config;
```

### Rotas

**1.** localhost:3333/devs (POST)

> Exemplo de requisição enviada no **body**.

```json
{
  "github_username": "adailsonaguiar",
  "techs": "angular, React",
  "latitude": -10.2092426,
  "longitude": -48.328996
}
```

**2.** localhost:3333/devs (GET)

> Consulta realizada através da **query** (search): **http://localhost:3333/devs?search=adailson**

**3.** localhost:3333/search (GET)

> Consulta realizada através das **querys** (latitude, longitude, techs): **http://localhost:3333/search?latitude=-10.2111874&longitude=-48.3265592&techs=angular**
> (**techs** são strings separadas por vírgulas. **Ex: "angular, reactJs"**).

**4.** localhost:3333/remove (DELETE)

> Exemplo de requisição enviada no **body**.

```json
{
  "github_username": "adailsonaguiar"
}
```
