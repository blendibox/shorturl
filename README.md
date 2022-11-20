

## :computer: Instalação

```bash
# Clone este repositório
$ git clone https://github.com/blendibox/shortulr

# Navegue até ele e instale todas as dependências
$ npm i

# Popule a base de dados
$ npm run knex:migrate

# Inicie o servidor
$ npm start
```

É **importante** que você crie o arquivo `auth.ts` dentro da pasta src com o seguinte conteúdo:

```javascript
const auth = {
  "admin": "your_username",
  "password": "your_password"
};

export default auth;
```

## :octocat: Utilizando a aplicação

### Rotas

| Método  | Rota  | Descrição  |
| :------------ | :------------ | :------------ |
| GET  | `/shortUrl`  |  Redireciona o usuário para o link relacionado ao url minificado  |
|  GET |  `/status/:shortUrl`  |  Retorna quantas vezes a url minificada foi clicada |
|  GET |   `/list`  |  Lista todas as urls presentes no banco de dados para o usuário autenticado  |
|  POST | `/create`  | Cria uma url minificada e retorna ao usuário  |

## Exemplos
**Criação de url minificada**
Inserir em JSON no corpo da requisição:

```json
{
  "longUrl": "https://github.com/blendibox/shorturl"
}
```

**Retorno do status de uma url minificada**
```json
{
  "shortUrl": "55474d",
  "cliked": 11
}
```

**Retorno de uma lista de urls**
```json
[
  {
    "shortUrl": "885475d",
    "longUrl": "https://click.linksynergy.com/link?id=4yv1y2Xuono&offerid=685863.20543903210&type=2&murl=https%3A%2F%2Fwww.calvinklein.com.br%2Fcalcinha-tanga-ck-one-algogao-organico-calvin-klein-underwear_preto_mas8540_0987%2Fp%3Fidsku%3D2143775",
    "cliked": 21,
    "created_at": "2022-11-20"
  }
]
```

## Próximas features
- [ ] Testes automatizados
- [ ] Deletar url do banco de dados

