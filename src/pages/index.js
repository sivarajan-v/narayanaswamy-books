import React from "react"
import NavbarIndex from "../components/navbar-index"
import BackToTop from "../components/back-to-top"
import { Helmet } from "react-helmet"
import "../scss/theme.scss"

const IndexPage = () => (
  <div>
    <Helmet>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      <script src="js/theme.min.js"></script>
    </Helmet>
    <NavbarIndex />
    <IntroSection />
    <DemoSection />
    <ComponentsSection />
    <InnerPagesSection />
    <MobileInterfaceSection />
    <FeaturesSection />
    <FooterSection />
    <BackToTop />
  </div>
)

export default IndexPage

function IntroSection() {
  return (
    <section className="position-relative bg-dark overflow-hidden pt-7 pb-lg-7">
      <div className="container-fluid pt-4 pb-5 pt-lg-5">
        <div className="row align-items-center py-3">
          <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
            <div
              className="pt-2 pb-3 pb-lg-0 mx-auto mb-5 mb-lg-0 ml-lg-0 mr-xl-7 text-center text-lg-left"
              style={{ maxWidth: "495px" }}
            >
              <h1 className="display-4 text-light pb-2">
                <span className="font-weight-light">Have a look </span>Around!
              </h1>
              <p className="h4 font-weight-light text-light opacity-70 line-height-base">
                And you will find everything you need to build a great looking
                website.
              </p>
              <a
                className="d-inline-flex align-items-center text-decoration-none pt-2 mt-4 mb-5"
                href="#demos"
                data-scroll="data-scroll"
              >
                <span className="btn btn-icon rounded-circle border-primary">
                  <i className="fe-arrow-down h4 text-primary my-1" />
                </span>
                <span className="ml-3 text-primary font-weight-medium">
                  View Demos
                </span>
              </a>
              <hr className="hr-light mb-5" />
              <div className="row">
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="h1 text-light mb-1">11</div>
                  <div className="h5 text-light font-weight-normal opacity-70 mb-2">
                    Demo Homepages
                  </div>
                  <span className="badge badge-pill badge-success">
                    More coming
                  </span>
                </div>
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="h1 text-light mb-1">50+</div>
                  <div className="h5 text-light font-weight-normal opacity-70 mb-1">
                    Flexible Components
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="h1 text-light mb-1">47</div>
                  <div className="h5 text-light font-weight-normal opacity-70 mb-1">
                    Inner Page Templates
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="cs-parallax" style={{ maxWidth: "898px" }}>
              <div
                className="cs-parallax-layer position-relative"
                data-depth="0.1"
              >
                <img
                  src="img/demo/presentation/intro/layer01.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.15">
                <img
                  src="img/demo/presentation/intro/layer02.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.25">
                <img
                  src="img/demo/presentation/intro/layer03.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.35">
                <img
                  src="img/demo/presentation/intro/layer04.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.5">
                <img
                  src="img/demo/presentation/intro/layer05.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.28">
                <img
                  src="img/demo/presentation/intro/layer06.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.4">
                <img
                  src="img/demo/presentation/intro/layer07.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.5">
                <img
                  src="img/demo/presentation/intro/layer08.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.28">
                <img
                  src="img/demo/presentation/intro/layer09.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.4">
                <img
                  src="img/demo/presentation/intro/layer10.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.25">
                <img
                  src="img/demo/presentation/intro/layer11.png"
                  alt="Layer"
                />
              </div>
              <div className="cs-parallax-layer" data-depth="0.45">
                <img
                  src="img/demo/presentation/intro/layer12.png"
                  alt="Layer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-shape cs-shape-bottom cs-shape-curve bg-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
          <path
            fill="currentColor"
            d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
          />
        </svg>
      </div>
    </section>
  )
}

function DemoItem(prop) {
  return (
    <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
      <a className="d-block nav-heading text-center" href={prop.link}>
        <div className="card card-hover border-0 box-shadow-lg mb-4">
          <img className="card-img" src={prop.img} alt={prop.alt} />
        </div>
        <h3 className="h5 nav-heading-title mb-0">{prop.title}</h3>
        <span className="font-size-sm font-weight-normal text-muted">
          {prop.subtitle}
        </span>
      </a>
    </div>
  )
}

function DemoSection() {
  return (
    <section className="bg-secondary" id="demos">
      <div className="container pt-5 pb-4 py-md-6 py-lg-7">
        <div className="text-center mb-5 pt-3 pt-lg-4">
          <h2 className="h1 mb-4">
            Homepage{" "}
            <span className="bg-faded-primary rounded text-primary px-3 py-2">
              Demos
            </span>
          </h2>
          <p className="text-muted">
            Choose from pre-built layouts of our unique homepage demos
          </p>
        </div>
        <div className="row">
          <DemoItem
            link="demo-business-consulting.html"
            img="img/demo/presentation/demos/business-consulting.jpg"
            alt="Business Consulting"
            title="Business Consulting"
            subtitle="Corpoarate, Business, Agency"
          />
          <DemoItem
            link="demo-shop-homepage.html"
            img="img/demo/presentation/demos/shop-homepage.jpg"
            alt="Shop Homepage"
            title="Shop Homepage"
            subtitle="E-Commerce, Retail, Electronics, Fashion"
          />
          <DemoItem
            link="demo-booking-directory.html"
            img="img/demo/presentation/demos/booking.jpg"
            alt="Booking / Directory"
            title="Booking / Directory"
            subtitle="Listings, Flights, Destinations"
          />
          <DemoItem
            link="demo-creative-agency.html"
            img="img/demo/presentation/demos/creative-agency.jpg"
            alt="Creative Agency"
            title="Creative Agency"
            subtitle="Creative Business, Portfolio, Agency"
          />
          <DemoItem
            link="demo-web-studio.html"
            img="img/demo/presentation/demos/web-studio.jpg"
            alt="Web Studio"
            title="Web Studio"
            subtitle="Web Design, Portfolio, Agenc"
          />
          <DemoItem
            link="demo-product-software.html"
            img="img/demo/presentation/demos/software-landing.jpg"
            alt="Product Landing - Software"
            title="Product Landing - Software"
            subtitle="Software, Showcase, Landing Page"
          />
          <DemoItem
            link="demo-product-gadget.html"
            img="img/demo/presentation/demos/gadget-landing.jpg"
            alt="Product Landing - Gadget"
            title="Product Landing - Gadget"
            subtitle="Gadget, Showcase, Landing Page"
          />
          <DemoItem
            link="demo-mobile-app.html"
            img="img/demo/presentation/demos/mobile-app.jpg"
            alt="Mobile App Showcase"
            title="Mobile App Showcase"
            subtitle="Mobile App, Showcase, Landing"
          />
          <DemoItem
            link="demo-coworking-space.html"
            img="img/demo/presentation/demos/coworking.jpg"
            alt="Coworking Space"
            title="Coworking Space"
            subtitle="Coworking Space Landing Page"
          />
          <DemoItem
            link="demo-event-landing.html"
            img="img/demo/presentation/demos/event-landing.jpg"
            alt="Event Landing"
            title="Event Landing"
            subtitle="Landing Page, Event, Countdown, Tickets"
          />
          <DemoItem
            link="index.html"
            img="img/demo/presentation/demos/template-presentation.jpg"
            alt="Web Template Presentation"
            title="Web Template Presentation"
            subtitle="Showcase your Web Template features beautifully"
          />
          <DemoItem
            link=""
            img="img/demo/presentation/demos/coming.png"
            alt="Coming"
            title="Coming Soon"
            subtitle=""
          />
        </div>
      </div>
    </section>
  )
}

function ComponentItem(props) {
  return (
    <div className="col-6 px-2 mb-3">
      <a
        className="d-block border border-light rounded-lg pt-3 pb-4 px-3 text-center text-decoration-none"
        href={props.link}
      >
        <img
          className="d-inline-block opacity-60 mb-3"
          width={props.imgWidth}
          src={props.img}
          alt={props.alt}
        />
        <h3 className="h6 text-light mb-0">{props.title}</h3>
      </a>
    </div>
  )
}

function ComponentsSection() {
  return (
    <section className="bg-gradient py-5 py-md-6 py-lg-7">
      <div className="container-fluid py-3 py-lg-4 overflow-hidden">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5 d-flex justify-content-end mb-5 mb-lg-0">
            <div
              className="mx-auto ml-lg-0 mr-xl-7 text-center text-lg-left"
              style={{ maxWidth: "495px" }}
            >
              <h2 className="h1 text-light mb-4">
                Flexible{" "}
                <span className="bg-faded-light rounded px-3 py-2">
                  Components
                </span>
              </h2>
              <p className="text-light opacity-70 mb-5">
                The complete UI Kit with over 50 modular and highly customizable
                components: Bootstrap + Around unique elements.
              </p>
              <div className="row mb-2 mx-n2">
                <ComponentItem
                  link="components/carousel.html"
                  imgWidth="68"
                  img="img/demo/presentation/icons/carousel.svg"
                  alt="Sliders & Carousels"
                  title="Sliders & Carousels"
                />
                <ComponentItem
                  link="components/gallery.html"
                  imgWidth="45"
                  img="img/demo/presentation/icons/gallery.svg"
                  alt="Image / Video Gallery"
                  title="Image / Video Gallery"
                />
                <ComponentItem
                  link="components/charts.html"
                  imgWidth="39"
                  img="img/demo/presentation/icons/chart.svg"
                  alt="Line, Bar & Pie Charts"
                  title="Line, Bar & Pie Charts"
                />
                <ComponentItem
                  link="components/video-popup.html"
                  imgWidth="44"
                  img="img/demo/presentation/icons/play.svg"
                  alt="Video Popup & Embed"
                  title="Video Popup & Embed"
                />
                <ComponentItem
                  link="components/forms.html"
                  imgWidth="42"
                  img="img/demo/presentation/icons/forms.svg"
                  alt="Form Controls"
                  title="Form Controls"
                />
                <ComponentItem
                  link="components/testimonials.html"
                  imgWidth="46"
                  img="img/demo/presentation/icons/review.svg"
                  alt="Testimonials & Reviews"
                  title="Testimonials & Reviews"
                />
              </div>
              <a className="btn btn-success" href="components/typography.html">
                View All Components
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 d-flex justify-content-end pr-0">
            <a className="d-block mr-n3" href="components/hotspots.html">
              <img
                className="d-block"
                src="img/demo/presentation/macbook.png"
                alt="Components"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tab(prop) {
  return (
    <li className="nav-item mb-3" style={{ width: "16.5rem" }}>
      <a
        className="nav-link mr-2"
        href={prop.link}
        data-toggle="tab"
        role="tab"
      >
        <div className="media align-items-center">
          <img className="rounded" width={60} src={prop.img} alt={prop.alt} />
          <div className="media-body pl-2 ml-1">
            <div className="d-flex justify-content-between align-items-center">
              <div className="font-size-sm pr-1">{prop.title}</div>
              <i className="fe-chevron-right lead ml-2 mr-1" />
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

function TabContent(prop) {
  let content = [
    {
      id: "account",
      col1: {
        title: "User Account",
        items: [
          {
            link: "account-profile.html",
            title: "Profile Info",
          },
          {
            link: "account-payment.html",
            title: "Payment Methods",
          },
          {
            link: "account-notifications.html",
            title: "Notifications",
          },
          {
            link: "signin-illustration.html",
            title: "Sign In - Illustration",
          },
          {
            link: "signin-image.html",
            title: "Sign In - Image",
          },
          {
            link: "signin-signup.html",
            title: "Sign In - Sign Up",
          },
          {
            link: "password-recovery.html",
            title: "Password Recovery",
          },
        ],
      },
      col2: {
        title: "Dashboard",
        items: [
          {
            link: "dashboard-orders.html",
            title: "Orders",
          },
          {
            link: "dashboard-sales.html",
            title: "Sales",
          },
          {
            link: "dashboard-messages.html",
            title: "Messages",
          },
          {
            link: "dashboard-followers.html",
            title: "Followers",
          },
          {
            link: "dashboard-reviews.html",
            title: "Reviews",
          },
          {
            link: "dashboard-favorites.html",
            title: "Favorites",
          },
        ],
      },
    },
    {
      id: "portfolio",
      col1: {
        title: "Portfolio Grid",
        items: [
          {
            link: "portfolio-style-1.html",
            title: "Grid Style 1",
          },
          {
            link: "portfolio-style-2.html",
            title: "Grid Style 2",
          },
          {
            link: "portfolio-style-3.html",
            title: "Grid Style 3",
          },
        ],
      },
      col2: {
        title: "Single Project",
        items: [
          {
            link: "portfolio-single-side-gallery-grid.html",
            title: ">Project Side Gallery (Grid)",
          },
          {
            link: "portfolio-single-side-gallery-list.html",
            title: "Project Side Gallery (List)",
          },
          {
            link: "portfolio-single-carousel.html",
            title: "Project Carousel",
          },
          {
            link: "portfolio-single-wide-gallery.html",
            title: "Project Wide Gallery",
          },
        ],
      },
    },
    {
      id: "ecommerce",
      col1: {
        title: "Shop Layouts",
        items: [
          {
            link: "shop-ls.html",
            title: "Grid Left Sideba",
          },
          {
            link: "shop-rs.html",
            title: "Right Sidebar",
          },
          {
            link: "shop-ns.html",
            title: "Grid No Sidebar",
          },
        ],
      },
      col2: {
        title: "Shop Pages",
        items: [
          {
            link: "shop-single.html",
            title: "Single Product",
          },
          {
            link: "checkout.html",
            title: "Cart & Checkout",
          },
          {
            link: "order-tracking.html",
            title: "Order Tracking",
          },
        ],
      },
    },
    {
      id: "pages",
      col1: {
        title: "Inner Pages",
        items: [
          {
            link: "about.html",
            title: "About",
          },
          {
            link: "contacts-v1.html",
            title: "Contacts v.1",
          },
          {
            link: "contacts-v2.html",
            title: "Contacts v.2",
          },
          {
            link: "contacts-v3.html",
            title: "Contacts v.3",
          },
        ],
      },
      col2: {
        title: "Help Center",
        items: [
          {
            link: "help-topics.html",
            title: "Help Topics",
          },
          {
            link: "help-single-topic.html",
            title: "Single Topic",
          },
          {
            link: "help-submit-request.html",
            title: "Submit a Request",
          },
        ],
      },
    },
    {
      id: "blog",
      col1: {
        title: "Blog Layouts",
        items: [
          {
            link: "blog-grid-rs.html",
            title: "Grid Right Sidebar",
          },
          {
            link: "blog-grid-ls.html",
            title: "Grid Left Sidebar",
          },
          {
            link: "blog-grid-ns.html",
            title: "Grid No Sidebar",
          },
          {
            link: "blog-list-rs.html",
            title: "List Right Sidebar",
          },
          {
            link: "blog-list-ls.html",
            title: "List Left Sidebar",
          },
          {
            link: "blog-list-ns.html",
            title: "List No Sidebar",
          },
        ],
      },
      col2: {
        title: "Single Post",
        items: [
          {
            link: "blog-single-rs.html",
            title: "Right Sidebar",
          },
          {
            link: "blog-single-ls.html",
            title: "Left Sidebar",
          },
          {
            link: "blog-single-ns.html",
            title: "No Sidebar",
          },
        ],
      },
    },
    {
      id: "specialty",
      col1: {
        title: "404 Error",
        items: [
          {
            link: "404-simple.html",
            title: "Simple Text",
          },
          {
            link: "404-illustration.html",
            title: "Illustration",
          },
        ],
      },
      col2: {
        title: "Coming Soon",
        items: [
          {
            link: "coming-soon-image.html",
            title: "Image",
          },
          {
            link: "coming-soon-illustration.html",
            title: "Illustration",
          },
        ],
      },
    },
  ]

  return content.map((contentItem, index) => {
    return (
      <div
        key={index}
        className={`tab-pane fade show ${index === 0 ? "active" : ""}`}
        id={contentItem.id}
      >
        <div className="row text-center text-sm-left">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <h3 className="h5 mb-4">{contentItem.col1.title}</h3>
            <ul className="list-unstyled">
              {contentItem.col1.items.map((col1Items, index) => {
                return (
                  <li key={index} className="mb-3">
                    <a
                      className="font-weight-medium text-decoration-none"
                      href={col1Items.link}
                    >
                      {col1Items.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col-sm-6">
            <h3 className="h5 mb-4">{contentItem.col2.title}</h3>
            <ul className="list-unstyled">
              {contentItem.col2.items.map((col2Items, index) => {
                return (
                  <li key={index} className="mb-3">
                    <a
                      className="font-weight-medium text-decoration-none"
                      href={col2Items.link}
                    >
                      {col2Items.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  })
}

function InnerPagesSection() {
  let tab = [
    {
      link: "#account",
      img: "img/demo/presentation/icons/user.svg",
      alt: "User Account",
      title: "User Account & Dashboard",
    },
    {
      link: "#portfolio",
      img: "img/demo/presentation/icons/portfolio.svg",
      alt: "Portfolio",
      title: "Portfolio",
    },
    {
      link: "#ecommerce",
      img: "img/demo/presentation/icons/shopping-cart.svg",
      alt: "E-Commerce",
      title: "E-Commerce",
    },
    {
      link: "#pages",
      img: "img/demo/presentation/icons/web-page.svg",
      alt: "Secondary Pages",
      title: "Secondary Pages",
    },
    {
      link: "#blog",
      img: "img/demo/presentation/icons/blog.svg",
      alt: "Blog & News",
      title: "Blog & News",
    },
    {
      link: "#specialty",
      img: "img/demo/presentation/icons/error-404.svg",
      alt: "Specialty Pages",
      title: "Specialty Pages",
    },
  ]
  const tabList = []
  for (var i = 0; i < tab.length; i++) {
    let item = tab[i]
    tabList.push(<Tab key={i} {...item} />)
  }
  return (
    <section className="py-5 py-md-6 py-lg-7">
      <div className="container pb-3 pt-4 pb-lg-2">
        <div className="row justify-content-center mb-4 pb-2">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="h1 mb-4 text-center">
              Handcrafted{" "}
              <span className="bg-faded-primary rounded text-primary px-3 py-2">
                Inner Pages
              </span>
            </h2>
            <p className="text-muted text-center">
              Big collection of thoroughly designed inner page templates from
              User Account/Dashboard to Specialty pages like 404 and Coming Soon
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ul className="nav nav-tabs cs-media-tabs justify-content-center justify-content-lg-start">
              {tabList}
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tab-content">
              <TabContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileInterfaceSection() {
  return (
    <section className="bg-secondary py-5 py-md-6 py-lg-7">
      <div className="container py-3 py-lg-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="mx-auto mx-md-0" style={{ maxWidth: "525px" }}>
              <img
                className="d-block"
                src="img/demo/presentation/mobile-screens.jpg"
                alt="Mobile screens"
              />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-left">
            <h2 className="h1 mb-4">
              <span className="bg-faded-primary rounded text-primary px-3 py-2">
                Mobile Friendly
              </span>{" "}
              Interface
            </h2>
            <p className="text-muted mb-5">
              Around based on advanced fully responsive Bootstrap grid. It looks
              great at any screen resolution and optimized for small touch
              screens. Around features 2 types of navigation for handeld devices
              and off-canvas sidebars that are easily accessible. All sliders
              used in the template have swipe support.
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img
                width={120}
                src="img/demo/presentation/qrcode.png"
                alt="QR Code"
              />
              <div className="pl-3 pl-sm-4">
                <div
                  className="text-nav text-left"
                  style={{ maxWidth: "175px" }}
                >
                  Scan QR code to test on your device
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem(prop) {
  return (
    <div className="d-flex mb-4 pb-2">
      <i className="fe-check-circle h4 text-success" />
      <div className="pl-3">
        <h3 className="h5">{prop.title}</h3>
        <p className="font-size-md mb-0">{prop.desc}</p>
      </div>
    </div>
  )
}

function FeaturesSection() {
  let features = [
    {
      title: "Kick-start Your Development",
      desc:
        "Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation",
    },
    {
      title: "Easy to Customize with Sass",
      desc:
        "Around is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.",
    },
    {
      title: "Pug - Node Templating Engine",
      desc:
        "No need to write huge amount of HTML, if you don’t want to. Pug provides features not available in plain HTML like variables, includes, mixins, functions…",
    },
    {
      title: "Built With Latest Bootstrap",
      desc:
        "Around is the powerful e-commerce front-end solution based on Bootstrap 4 - the world's most popular responsive, mobile-first front-end component library.",
    },
    {
      title: "50+ Flexible Components",
      desc:
        "Besides styling all default Bootstrap 4 components Around introduces lots of new flexible, customizable and reusable elements you can use across the website.",
    },
    {
      title: "Mobile Friendly Interface",
      desc:
        "It's not a surprise that nowadays over 70% of users surf the inernet and shop online using their mobile devices. Around is 100% responsive and optimized for small touch screens.",
    },
    {
      title: "Google Fonts",
      desc:
        "Around uses Google fonts which are free, fast to load and of very high quality. Currently Google fonts library includes 900+ font families to choose from.",
    },
    {
      title: "Touch-enabled Sliders",
      desc:
        "In the era of touch screens it's important to ensure great user experience on handheld devices, especially when it comes to such frequently used interface component as slider.",
    },
    {
      title: "Vector Based HD Ready Icons",
      desc:
        "Around is equiped with font-based icon pack and svg icons to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.",
    },
    {
      title: "W3C Valid HTML Code",
      desc:
        "All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Around is innovative at its core.",
    },
    {
      title: "Future-proof JavaScript",
      desc:
        "Around core scripts as well as all dependencies are written in vanilla JS. The only component that requires jQuery is Bootstrap itself. But that will change soon. And whent this happens we will drop jQuery altogether.",
    },
    {
      title: "Detailed Documentation",
      desc:
        "Download package includes links to online documentation. It covers all crucial information about how to get started, customize template and components usage.",
    },
    {
      title: "",
      desc: "",
    },
  ]

  const col1 = []
  const col2 = []
  for (var i = 0; i < 7; i++) {
    let item = features[i]
    col1.push(<FeatureItem key={i} title={item.title} desc={item.desc} />)
  }
  for (var j = 7; j < 12; j++) {
    let item = features[j]
    col2.push(<FeatureItem key={j} title={item.title} desc={item.desc} />)
  }
  return (
    <section className="container py-5 py-md-6 py-lg-7">
      <div className="text-center mb-5 pt-3 pt-lg-4">
        <h2 className="h1">
          Around{" "}
          <span className="bg-faded-primary rounded text-primary px-3 py-2">
            Feature Highlights
          </span>
        </h2>
      </div>
      <div className="row pt-3 pt-lg-4">
        <div className="col-md-6">{col1}</div>
        <div className="col-md-6">
          {col2}
          <h3 className="h5">...and much more</h3>
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <footer className="cs-footer bg-dark pt-5 pt-md-6 pt-lg-7">
      <div className="container pt-3 pt-md-0">
        <div className="pb-md-4 text-center">
          <h3 className="text-light font-weight-light mb-3">
            Still not convinced?
          </h3>
          <h2 className="text-light mb-5">
            Add premium support and lifetime updates to this.
          </h2>
          <a className="btn btn-primary" href="/">
            <i className="fe-shopping-cart font-size-lg mr-2" />
            Buy Around
          </a>
        </div>
        <hr className="hr-light my-5 pb-md-4" />
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 pb-md-4 text-center">
            <h4 className="text-light mb-grid-gutter">
              Subscribe to Newsletter
            </h4>
            <form
              className="cs-subscribe-form validate"
              action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate="novalidate"
            >
              <div className="input-group input-group-overlay flex-nowrap">
                <div className="input-group-prepend-overlay">
                  <span className="input-group-text text-muted">
                    <i className="fe-mail" />
                  </span>
                </div>
                <input
                  className="form-control prepended-form-control"
                  type="email"
                  name="EMAIL"
                  placeholder="Your email"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    name="subscribe"
                  >
                    Subscribe*
                  </button>
                </div>
              </div>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  className="cs-subscribe-form-antispam"
                  type="text"
                  name="b_c7103e2c981361a6639545bd5_29ca296126"
                  tabIndex={-1}
                />
              </div>
              <small className="form-text text-light opacity-50 pt-2">
                *Subscribe to our newsletter to receive early discount offers
                and new templates info.
              </small>
              <div className="cs-subscribe-status" />
            </form>
          </div>
        </div>
        <hr className="hr-light mt-5 pb-4" />
        <p className="font-size-sm text-center mb-0 pb-4 py-3">
          <span className="text-light opacity-50 mr-1">
            © All rights reserved. Made by
          </span>
          <a
            className="nav-link-style nav-link-light"
            href="https://vstpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            vstpress.com
          </a>
        </p>
      </div>
    </footer>
  )
}
