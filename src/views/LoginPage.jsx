const React = require('react');
const Layout = require('./Layout');

module.exports = function LoginPage() {
  return (
    <Layout>
      <div className="login container registration">
        <form>
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
              Password
            </label>
          </div>
          <button
            type="button"
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>
          <div className="message" />
          <div className="text-center">
            <p>
              Not a member?{' '}
              <a href="/auth/register" data-type="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};
