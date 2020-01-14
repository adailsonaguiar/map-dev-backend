# map-dev-backend

**Para se conectar ao seu cluster no mongodb Atlas:**

Crie um arquivo na pasta `config` do app com o nome `mongo-connection.js`.

```javascript
const config = {
  url:
    'mongodb+srv://<user>:<passworc>@cluster0-ftlu8.mongodb.net/map-dev?retryWrites=true&w=majority',
  rules: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

module.exports = config;
```
