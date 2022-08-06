import React, { useContext, useState } from 'react';
import dataContext from '../Context/dataContext';

function index(props) {

  const { pages } = useContext(dataContext);
  const { setPages } = useContext(dataContext);

  function text(e) {
    setPages(e.target.textContent)
  }

  return (
      <nav>
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item">
            <button className="page-link">Prev</button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              1
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              2
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              3
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              4
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              5
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              6
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              7
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              8
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              9
            </button>
          </li>

          <li className="page-item">
            <button onClick={(e) => text(e)} className="page-link" href="#">
              10
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" href="#">Next</button>
          </li>
        </ul>
      </nav>
  )}

export default index;