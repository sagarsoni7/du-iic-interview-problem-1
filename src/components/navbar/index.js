import React from "react";

export default function NavBar(){
    return(
        <div id="sidebar" className="sidebar py-3 shadow-sm">
        <a
          href="#"
          className="navbar-brand font-weight-bold  text-base sidebar-toggler mr-4 mr-lg-5 lead to-right"
          data-toggle="collapse"
          data-target=".HideThisOnCollapse"
        >
          <span className="HideThisOnCollapse panel-collapse  collapsed collapse show">
            UIMS Portal &nbsp;
          </span>
          <i className="fas fa-angle-left"></i>
        </a>
        <br />
        <br />
        <ul className="sidebar-menu list-unstyled">
          <li className="sidebar-list-item">
            <a
              href="#"
              className=" sidebar-link text-muted"
              data-toggle="collapse"
              data-target=".HideThisCollapse"
            >
              <i className="fas fa-chart-pie mr-3"></i>
              <span className="HideThisOnCollapse panel-collapse  collapsed collapse show">
                Portal Dashboard
              </span>
            </a>
          </li>
          <li></li>
          <li className="sidebar-list-item">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#pages"
              aria-expanded="false"
              aria-controls="pages"
              className="sidebar-link text-muted active"
            >
              <i className="fas fa-balance-scale mr-3"></i>
              <span>Legal Cases</span>
            </a>
            <div id="pages" className="collapse show">
              <ul className="sidebar-menu list-unstyled border-left border-primary">
                <li className="sidebar-list-item">
                  <a href="#" className="sidebar-link text-muted pl-lg-5">
                    Dashboard
                  </a>
                </li>
                <li className="sidebar-list-item">
                  <a
                    href="#"
                    className="sidebar-link text-muted pl-lg-5 active sublink"
                  >
                    Manage Cases
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
}