const React = require('react');
const Layout = require('./Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
      <div className="login container registration">
        <form>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="firstName"
            />
            <label className="form-label" htmlFor="form2Example1">
              Имя
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="lastName"
            />
            <label className="form-label" htmlFor="form2Example1">
              Фамилия
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="email"
            />
            <label className="form-label" htmlFor="form2Example1">
              Email
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              name="password"
            />
            <label className="form-label" htmlFor="form2Example2">
              Пароль
            </label>
          </div>
          <select
            className="form-select mb-4"
            aria-label="Default select example"
            name="group"
          >
            <option selected>Выбери свою группу</option>
            <option value="Орлы">Орлы</option>
            <option value="Совы">Совы</option>
            <option value="Пчёлы">Пчёлы</option>
            <option value="Медведи">Медведи</option>
            <option value="Еноты">Еноты</option>
            <option value="Лисы">Лисы</option>
            <option value="Волки">Волки</option>
            <option value="Бобры">Бобры</option>
            <option value="Ежи">Ежи</option>
          </select>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="graduationYear"
            />
            <label className="form-label" htmlFor="form2Example2">
              Год выпуска
            </label>
          </div>
          <button
            type="button"
            data-type="register-button"
            data-url="/auth/register"
            className="btn btn-primary btn-block mb-4"
          >
            Register
          </button>
          <div className="message" />
        </form>
      </div>
    </Layout>
  );
};
