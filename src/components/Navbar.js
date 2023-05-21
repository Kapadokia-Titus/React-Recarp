function Navigation() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/#">
          Home
        </a>
      </li>
    </ul>
  );
}
function Search() {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

function Dropdown() {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Something else here</a>
    </div>
  </li>
  );
}

export default function Navbar(params) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <Search />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}
