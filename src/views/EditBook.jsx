const React = require('react');
const Layout = require('./Layout');

module.exports = function EditBook({ user, book }) {
  return (
    <Layout user={user}>
      <div className="login container registration">
        <form>
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={book.title}
            />
            <label className="form-label" htmlFor="form2Example1">
              Название
            </label>
          </div>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              name="description"
              rows="3"
              defaultValue={book.description}
            />
            <label className="form-label" htmlFor="form2Example2">
              Описание
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="cover"
              defaultValue={book.cover}
            />
            <label className="form-label" htmlFor="form2Example3">
              Ссылка на обложку
            </label>
          </div>
          <button
            type="button"
            data-type="editbook-button"
            data-bookid={book.id}
            className="btn btn-primary btn-block mb-4"
          >
            Сохранить
          </button>
          <div className="message" />
        </form>
      </div>
    </Layout>
  );
};
