import React, { useEffect, useState } from "react";

export default function Pagination(props) {
  const [pageArray, setPageArray] = useState([]);

  const totalPages = parseInt(props.totalPages);
  const currentPage = parseInt(props.currentPage);

  useEffect(() => {
    var pageArr = [];
    if (totalPages > 0) {
      if (totalPages <= 6) {
        var i = 1;
        while (i <= totalPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage <= 4) pageArr = [1, 2, 3, 4, 5, "", totalPages];
        else if (totalPages - currentPage <= 4) {
          pageArr = [
            1,
            "",
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        } else {
          pageArr = [
            1,
            "",
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            "",
            totalPages,
          ];
        }
      }
    }
    setPageArray(pageArr);
  }, [totalPages, currentPage]);

  return (
    <nav aria-label="Page navigation" className="my-3">
      <ul className="pagination float-end">
        {pageArray.map((ele, ind) => {
          const toReturn = [];
          if (ind === 0) {
            toReturn.push(
              <li
                key={"prevpage"}
                className="page-item"
                onClick={() => {
                  if (currentPage !== 1) {
                    props.setPagination(currentPage - 1);
                  }
                }}
              >
                <a className="page-link" href={null} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            );
          }
          if (ele === "") {
            toReturn.push(
              <li className="page-item" key={ind}>
                <a className="page-link" href={null}>
                  -
                </a>
              </li>
            );
          } else {
            toReturn.push(
              <li
                key={ind}
                className={`page-item ${currentPage === ele ? "active" : ""}`}
                onClick={() => {
                  if (currentPage !== ele) {
                    props.setPagination(ele);
                  }
                }}
                aria-current={currentPage === ele ? "page" : null}
              >
                <a className="page-link" href={null}>
                  {ele}
                </a>
              </li>
            );
          }
          if (ind === pageArray.length - 1) {
            toReturn.push(
              <li
                key={"nextpage"}
                className="page-item"
                onClick={() => {
                  if (currentPage !== ele) {
                    props.setPagination(currentPage + 1);
                  }
                }}
              >
                <a className="page-link" href={null} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            );
          }
          return toReturn;
        })}
      </ul>
    </nav>
  );
}
