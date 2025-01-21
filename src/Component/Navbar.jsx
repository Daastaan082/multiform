import React from 'react';

const Navbar = () => {
  return (
    <div className="headerbox">
      <section className="container-xl mt-2">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div className="d-flex align-items-center">
                  <a className="navbar-brand" href="#">
                    <div>
                        Navbar
                    </div>
                  </a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarFinline"
                  aria-controls="navbarFinline"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarFinline">
                  <ul className="navbar-nav ms-auto">
                    {/* <li className="nav-item pt-1 pe-3">
                      <a className="nav-link" href="https://www.finline.in/how-to-create-project-report-online">
                        Help
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
