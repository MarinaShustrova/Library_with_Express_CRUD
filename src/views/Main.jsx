const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      <div className="row row-cols-2">Hello world</div>
    </Layout>
  );
};
