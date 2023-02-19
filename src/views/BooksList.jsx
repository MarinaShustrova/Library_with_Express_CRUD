const React = require('react');
const Layout = require('./Layout');
const Book = require('./Book');

module.exports = function BooksList({ user, books }) {
  return (
    <Layout user={user}>
      {books.map((book) => (
        <Book key={book.id} book={book} user={user} />
      ))}
    </Layout>
  );
};
