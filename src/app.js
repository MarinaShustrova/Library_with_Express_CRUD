// todo переменная окружения
require('dotenv').config();
// todo подключаем экспресс
const express = require('express');
// todo подключаем пасспорт
const passport = require('passport');
// todo подключаем сессии для рег и утентификации
const session = require('express-session');
// todo подключаем локальную стратегию для аутонтефикации
const LocalStrategy = require('passport-local').Strategy;
// todo подключаем стор для хранения сессий
const FileStore = require('session-file-store')(session);
// todo пакет для загрузки файлов
const fileUpload = require('express-fileupload');
// todo пакет дляхэширования паролей
const bcrypt = require('bcrypt');

//* подключаем роутеры
const indexRouter = require('./routes/router.index');
const authRouter = require('./routes/router.auth');
const booksRouter = require('./routes/router.books');

//* проверка
const authCheck = require('./middlewares/checkAuth');

//* деструктуризацие выаскиваем модель юзера из бд
const { User } = require('../db/models');

const PORT = process.env.PORT || 3100;
const app = express();

// todoподключение статики
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// todo конфиг сессий
app.use(
  session({
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

// todo локальная стратегия
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'Incorect email' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return done(null, false, { message: 'Incorrect password' });
      }
      const { id, firstName, lastName } = user;
      return done(null, {
        id, firstName, lastName, email,
      });
    },
  ),
);

// todo серелиазация юсера
passport.serializeUser((user, done) => {
  done(null, user);
});
// todo десерелиазация юсера
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());

// todo использование роутов
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/books', booksRouter);

// todo прослушка порта
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
