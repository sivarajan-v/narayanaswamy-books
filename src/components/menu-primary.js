import React from "react"

export default function MenuPrimary() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown dropdown-mega">
        <div
          className="nav-link dropdown-toggle"
          href="#"
          data-toggle="dropdown"
          role="button"
        >
          Demos
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-column dropdown-column-img bg-secondary"
            style={{ backgroundImage: "url(img/demo/menu-banner.jpg)" }}
          ></div>
          <div className="dropdown-column">
            <a className="dropdown-item" href="index.html">
              Web Template Presentation
            </a>
            <a className="dropdown-item" href="demo-business-consulting.html">
              Business Consulting
            </a>
            <a className="dropdown-item" href="demo-shop-homepage.html">
              Shop Homepage
            </a>
            <a className="dropdown-item" href="demo-booking-directory.html">
              Booking / Directory
            </a>
            <a className="dropdown-item" href="demo-creative-agency.html">
              Creative Agency
            </a>
            <a className="dropdown-item" href="demo-web-studio.html">
              Web Studio
            </a>
            <a className="dropdown-item" href="demo-product-software.html">
              Product Landing - Software
            </a>
          </div>
          <div className="dropdown-column">
            <a className="dropdown-item" href="demo-product-gadget.html">
              Product Landing - Gadget
            </a>
            <a className="dropdown-item" href="demo-mobile-app.html">
              Mobile App Showcase
            </a>
            <a className="dropdown-item" href="demo-coworking-space.html">
              Coworking Space
            </a>
            <a className="dropdown-item" href="demo-event-landing.html">
              Event Landing
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
          Templates
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-column mb-2 mb-lg-0">
            <h5 className="dropdown-header">Blog</h5>
            <a className="dropdown-item" href="blog-grid-rs.html">
              Grid Right Sidebar
            </a>
            <a className="dropdown-item" href="blog-grid-ls.html">
              Grid Left Sidebar
            </a>
            <a className="dropdown-item" href="blog-grid-ns.html">
              Grid No Sidebar
            </a>
            <a className="dropdown-item" href="blog-list-rs.html">
              List Right Sidebar
            </a>
            <a className="dropdown-item" href="blog-list-ls.html">
              List Left Sidebar
            </a>
            <a className="dropdown-item" href="blog-list-ns.html">
              List No Sidebar
            </a>
            <a className="dropdown-item" href="blog-single-rs.html">
              Single Post Right Sidebar
            </a>
            <a className="dropdown-item" href="blog-single-ls.html">
              Single Post Left Sidebar
            </a>
            <a className="dropdown-item" href="blog-single-ns.html">
              Single Post No Sidebar
            </a>
          </div>
          <div className="dropdown-column mb-2 mb-lg-0">
            <h5 className="dropdown-header">Portfolio</h5>
            <a className="dropdown-item" href="portfolio-style-1.html">
              Grid Style 1
            </a>
            <a className="dropdown-item" href="portfolio-style-2.html">
              Grid Style 2
            </a>
            <a className="dropdown-item" href="portfolio-style-3.html">
              Grid Style 3
            </a>
            <a
              className="dropdown-item"
              href="portfolio-single-side-gallery-grid.html"
            >
              Project Side Gallery (Grid)
            </a>
            <a
              className="dropdown-item"
              href="portfolio-single-side-gallery-list.html"
            >
              Project Side Gallery (List)
            </a>
            <a className="dropdown-item" href="portfolio-single-carousel.html">
              Project Carousel
            </a>
            <a
              className="dropdown-item"
              href="portfolio-single-wide-gallery.html"
            >
              Project Wide Gallery
            </a>
          </div>
          <div className="dropdown-column mb-2 mb-lg-0">
            <h5 className="dropdown-header">Shop</h5>
            <a className="dropdown-item" href="shop-ls.html">
              Grid Left Sidebar
            </a>
            <a className="dropdown-item" href="shop-rs.html">
              Grid Right Sidebar
            </a>
            <a className="dropdown-item" href="shop-ns.html">
              Grid No Sidebar
            </a>
            <a className="dropdown-item" href="shop-single.html">
              Single Product
            </a>
            <a className="dropdown-item" href="checkout.html">
              Cart &amp; Checkout
            </a>
            <a className="dropdown-item" href="order-tracking.html">
              Order Tracking
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
          Account
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              Dashboard
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="dashboard-orders.html">
                  Orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dashboard-sales.html">
                  Sales
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dashboard-messages.html">
                  Messages
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dashboard-followers.html">
                  Followers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dashboard-reviews.html">
                  Reviews
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dashboard-favorites.html">
                  Favorites
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              Account Settings
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="account-profile.html">
                  Profile Info
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="account-payment.html">
                  Payment Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="account-notifications.html">
                  Notifications
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="signin-illustration.html">
              Sign In - Illustration
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="signin-image.html">
              Sign In - Image
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="signin-signup.html">
              Sign In - Sign Up
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="password-recovery.html">
              Password Recovery
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
          Pages
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="about.html">
              About
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              Contacts
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="contacts-v1.html">
                  Contacts v.1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="contacts-v2.html">
                  Contacts v.2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="contacts-v3.html">
                  Contacts v.3
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              Help Center
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="help-topics.html">
                  Help Topics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="help-single-topic.html">
                  Single Topic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="help-submit-request.html">
                  Submit a Request
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              404 Not Found
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="404-simple.html">
                  Simple Text
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="404-illustration.html">
                  Illustration
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              href="/"
              data-toggle="dropdown"
            >
              Coming Soon
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="coming-soon-image.html">
                  Image
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="coming-soon-illustration.html"
                >
                  Illustration
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
          Docs / UI Kit
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="docs/dev-setup.html">
              <div className="d-flex align-items-center">
                <div className="font-size-xl text-muted">
                  <i className="fe-file-text" />
                </div>
                <div className="pl-3">
                  <span className="d-block text-heading">Documentation</span>
                  <small className="d-block text-muted">
                    Kick-start customization
                  </small>
                </div>
              </div>
            </a>
          </li>
          <li className="dropdown-divider" />
          <li>
            <a className="dropdown-item" href="components/typography.html">
              <div className="d-flex align-items-center">
                <div className="font-size-xl text-muted">
                  <i className="fe-layers" />
                </div>
                <div className="pl-3">
                  <span className="d-block text-heading">
                    UI Kit<span className="badge badge-danger ml-2">50+</span>
                  </span>
                  <small className="d-block text-muted">
                    Flexible components
                  </small>
                </div>
              </div>
            </a>
          </li>
          <li className="dropdown-divider" />
          <li>
            <a className="dropdown-item" href="mailto:contact@createx.studio">
              <div className="d-flex align-items-center">
                <div className="font-size-xl text-muted">
                  <i className="fe-life-buoy" />
                </div>
                <div className="pl-3">
                  <span className="d-block text-heading">Support</span>
                  <small className="d-block text-muted">
                    contact@createx.studio
                  </small>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}
