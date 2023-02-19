# Express-CRUD-Fetch
# Express-Node-CRUD-Session
Here some basic concepts of node-express auth and session
## init project
1. npm init -y
2. npx eslint --init
3. npx create-gitignore node 
4. touch .babelrc
5. npm i dotenv
6. команда touch создает папку в директории проекта 
# config for .babelrc
'{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": { "node": "14" },
          "modules": false
        }
      ],
      "@babel/preset-react"
    ]
  }'
  7. .env_example 
PORT=3000
DEV_DB_URL=postgres://admindb:admindb@localhost:5432/dbName
 TEST_DB_URL=postgres://username_testdb:password@localhost:5432/dbName
PROD_DB_URL=postgres://username:password@server.com/dbName
8. !!! не забыть создать файл .env_example !!!
9. npm install express
10. npm i react react-dom @babel/core @babel/preset-env @babel/preset-react @babel/register
11. npm i express morgan
12. npm install --save path
13. require('dotenv').config(); в файлк app.js
14. npm i express-session
15.  пишем middleware в файле app.js
  app.use(express.static(path.resolve('public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  ### ATTETION  сначала прописать файл sequelizerc как у ромы потом дб инит! иначе errors
  16. npm i sequelize sequelize-cli pg pg-hstore 
  
  ** config .sequelize rc !! обратить внимание папка db находится в src 
module.exports = {
  'config': path.resolve('src', 'db', 'database.json'),
  'models-path': path.resolve('src', 'db', 'models'),
  'seeders-path': path.resolve('src', 'db', 'seeders'),
  'migrations-path': path.resolve('src', 'db', 'migrations')
};
 
17. npx sequelize init
18. npx sequelize db:create
const path = require('path');
require('dotenv').config();

19. npm i bcrypt
20. npm i session-file-store
21. npm install --save-dev nodemon
22. config for cookies
const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
}
// записывает в переменную req.session.user данные из прилетевшей куки, если такаяже была найдена в базе данных для кук.
//  если куки нету или она не найдена в session storage, то req.session.user будет равно unfefined
app.use(session(sessionConfig));

23. for package.json
"main": "src/index.js", !!!!!!!!
///
  "scripts": {
    "start": "node src/index.js",
    "prod": "NODE_ENV=production node src/index.js",
    "dev": "nodemon src/index.js --ignore sessions --ext js,jsx",
    "debug": "node --no-lazy --inspect-brk src/index.js",
    "db-up": "npx sequelize db:create; npx sequelize db:migrate; npx sequelize db:seed:all;",
    "db-down": "npx sequelize db:migrate:undo:all; npx sequelize db:drop;"
  },
///
    "prettier": {
    "singleQuote": true
  }

  24. npx sequelize db:create 
  25. команда на создание модели юсера 
  npx sequelize model:create --name User --attributes name:string,password:string,email:string 
  
