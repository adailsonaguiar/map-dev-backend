# map-dev-backend

### Clonando a aplicação

Clone a aplicação através do comando:

> git clone https://github.com/adailsonaguiar/map-dev-backend.git

### Instalar as dependências da aplicação

> npm i

### Conectar ao seu cluster no mongodb Atlas:

Crie um arquivo na pasta `.env` na **pasta raiz** da aplicação.

```javascript
API_URL=http://localhost:3333/

MONGO_URL=mongodb+srv://deploy:web-deploy123@cluster0-ftlu8.mongodb.net/test?retryWrites=true&w=majority
```

### Rotas

**1.** localhost:3333/devs (POST)

> Exemplo de requisição enviada no **body**.

```json
{
  "github_username": "adailsonaguiar",
  "stacks": "angular, React",
  "latitude": -10.2092426,
  "longitude": -48.328996
}
```

**2.** localhost:3333/devs (GET)

> Consulta realizada através da **query** (search): **http://localhost:3333/devs?search=adailson**

**3.** localhost:3333/search (GET)

> Consulta realizada através das **querys** (latitude, longitude, stacks): **http://localhost:3333/search?latitude=-10.2111874&longitude=-48.3265592&stacks=angular**
> (**stacks** são strings separadas por vírgulas. **Ex: "angular, reactJs"**).

**4.** localhost:3333/remove (DELETE)

> Exemplo de requisição enviada no **body**.

```json
{
  "github_username": "adailsonaguiar"
}
```

**5.** localhost:3333/update (PUT)

> Exemplo de requisição enviada no **body**.

```json
{
  "github_username": "adailsffonaguiar",
  "bio": "Minha nova bio salva!",
  "name": "Deonilde Aguiar",
  "latitude": -48.328996,
  "longitude": -10.2092426,
  "stacks": "Vue.js, Svelt, Laravel",
  "avatar_url": ""
}
```
