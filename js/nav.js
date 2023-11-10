const nav = document.querySelector("nav");

nav.innerHTML = `
<div class="nav-wrap">
          <div id="logo-wrap">
          <a href="/"> <lottie-player style="height: 100%;"
              src="https://d3i7ke5fj3tp7c.cloudfront.net/images/logo.json"
              background="transparent" speed="0.7" intermission="2000" rednerer: 'canvas' loop autoplay></lottie-player></a>
          </div>
          <div class="navbar-toggler">
            <span class="nav__toggle"></span>
            <span class="nav__toggle"></span>
            <span class="nav__toggle"></span>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav gap-0 gap-md-3">
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item services-nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link  text-uppercase" href="/services.html">Services</a>
                <div class="services-dropdown">
                  <a class="sub-nav-link" href="/pages/services/seo.html">SEO</a>
                  <a class="sub-nav-link" href="/pages/services/sem.html">SEM</a>
                  <a class="sub-nav-link" href="/pages/services/branding.html">Branding</a>
                  <a class="sub-nav-link" href="/pages/services/advertising.html">Advertising</a>
                  <a class="sub-nav-link" href="/pages/services/photography.html">Photography</a>
                  <a class="sub-nav-link" href="/pages/services/social-media.html">Social Media</a>
                  <a class="sub-nav-link" href="/pages/services/digital-strategy.html">Digital Strategy</a>
                  <a class="sub-nav-link" href="/pages/services/video-production.html">Video Production</a>
                  <a class="sub-nav-link" href="/pages/services/ar.html">Augmented Reality</a>
                  <a class="sub-nav-link" href="/pages/services/influencer-mgmt.html">Influencer Management</a>
                  <a class="sub-nav-link" href="/pages/services/reputation-mgmt.html">Reputation Management</a>
                  <a class="sub-nav-link" href="/pages/services/community-mgmt.html">Community Management</a>
                </div>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/awards.html">Awards</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/portfolio.html">Portfolio</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/clients.html">Clients</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/contactus.html">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
`;

const navLinks = document.querySelectorAll(".nav-link, .sub-nav-link");

navLinks.forEach((ele) => {
  if (ele.getAttribute("href") == window.location.pathname || ele.getAttribute("href").replace(".html", "") == window.location.pathname || ele.getAttribute("href").replace("/", "/index.html") == window.location.pathname) {
    ele.classList.add("active");
  } else if (window.location.pathname.includes("/pages/services")) {
    if (ele.getAttribute("href") === "/services.html") {
      ele.classList.add("active");
    }
  } else if (window.location.pathname.includes("/pages/blog")) {
    if (ele.getAttribute("href") === "/blog.html") {
      ele.classList.add("active");
    }
  }
});
