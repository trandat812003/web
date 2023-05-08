import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Addproduct from "../pages/Addproduct";
import { getEID } from "../api";

function NavBar({ setSearchTerm }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {

    const getTodos = async () =>{
      try {
        const res = await getEID();
        // setAdmin(res);
        if(res == 1) setAdmin(true);else setAdmin(false);
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    }

    getTodos();
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => setSearchTerm(" ")}
              to={`/`}
            >
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => setSearchTerm("Văn")}
              to={`/`}
            >
              Văn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => setSearchTerm("Trinh thám")}
              to={`/`}
            >
              Trinh thám
            </Link>
          </li>

          {admin && <li className="nav-item">
            <Link
              className="nav-link"
              to={`/add`}
            >
              Thêm sản phẩm.
            </Link>
          </li>}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
