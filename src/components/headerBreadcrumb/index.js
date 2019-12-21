import React from "react";

export default function HeaderBreadcrumb(){
    return(
        <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Legal Cases</a>
        </li>
        <li
          className="breadcrumb-item active"
          aria-current="page"
        >
          Manage Cases
        </li>
      </ol>
    )
};