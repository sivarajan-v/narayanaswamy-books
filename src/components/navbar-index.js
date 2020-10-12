import React from "react"
import MenuPrimary from "./menu-primary"

export default function NavbarIndex() {
  return (
    <header className="cs-header navbar navbar-expand-lg navbar-dark navbar-floating navbar-sticky">
      <div className="container px-0 px-xl-3">
        <button
          className="navbar-toggler ml-n2 mr-2"
          type="button"
          data-toggle="offcanvas"
          data-offcanvas-id="primaryMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a
          className="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4"
          href="index.html"
        >
          <img
            className="navbar-floating-logo d-none d-lg-block"
            width={153}
            src="img/logo/logo-light.png"
            alt="Around"
          />
          <img
            className="navbar-stuck-logo"
            width={153}
            src="img/logo/logo-dark.png"
            alt="Around"
          />
          <img
            className="d-lg-none"
            width={58}
            src="img/logo/logo-icon.png"
            alt="Around"
          />
        </a>
        <div className="d-flex align-items-center order-lg-3 ml-lg-auto">
          <a className="btn btn-primary" href="/">
            <i className="fe-shopping-cart font-size-lg mr-2" />
            Buy <span className="d-none d-lg-inline">Template</span>
          </a>
        </div>
        <div className="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
          <div className="cs-offcanvas-cap navbar-box-shadow">
            <h5 className="mt-1 mb-0">Menu</h5>
            <button
              className="close lead"
              type="button"
              data-toggle="offcanvas"
              data-offcanvas-id="primaryMenu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="cs-offcanvas-body">
            <MenuPrimary />
          </div>
        </div>
      </div>
    </header>
  )
}
