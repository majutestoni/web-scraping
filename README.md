# Web Scrapring

## Como utilizar o projeto em sua maquina

```bash
 git clone https://github.com/majutestoni/web-scraping.git
```

```bash
 npm i
```

- Necessario criar um database MariaDB ou Mysql como o nome "noticia", demais informações de banco de dados disponível em: src\database\data-source.ts
- Rodar as migrations
```bash
 npm run typeorm -- -d ./src/database/data-source.ts migration:run
```
 - Levantar o projeto:
```bash
 npm start
```

#### Tabela Noticia

| Parâmetro  | Tipo      | Descrição                      |
| :--------- | :-------- | :----------------------------- |
| `id`       | `int`     | **Obrigatório**. id da noticia |
| `title`    | `varchar` | **Obrigatório**.               |
| `subtitle` | `varchar` | **Obrigatório**.               |


## Utilizado
 - [Express](https://expressjs.com/pt-br/)
 - [Typeorm](https://typeorm.io/)
 - [Mysql2](https://www.npmjs.com/package/mysql2) - e MariaDB na workbench 
 - [DBeaver](https://dbeaver.io/download/) - Como workbench
 - [puppeteer](https://pptr.dev/) - utilizado versão 10.4.0
 - [Node](https://nodejs.org/en) - v14.20.0

