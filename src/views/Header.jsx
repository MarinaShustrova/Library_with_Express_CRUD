const React = require('react');

module.exports = function Header({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Elbrus library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" data-type="main-link" href="/">
                Main
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                  // data-type="logout-link"
                  // href="/auth/logout"==> 3
                    data-type="addbook-link"
                    href="/books/add"
                  >
                    Add Book
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="mybooks-link"
                    href="/books/my"
                  >
                    Мои книги
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                  // data-type="addbook-link"
                  // href="/books/add"
                    data-type="logout-link"
                    href="/auth/logout"
                  >
                    lOGOUT
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="login-link"
                    href="/auth/login"
                  >
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="register-link"
                    href="/auth/register"
                  >
                    Register
                  </a>
                </li>
              </>
            )}
            {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
        </div>
      </div>
    </nav>
  );
};
