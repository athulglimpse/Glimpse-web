const nav = document.querySelector("nav");

nav.innerHTML = `
<div class="nav-wrap">
          <a class="navbar-brand" href="/"
            ><img src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/logo.svg" alt="logo"
          /></a>
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
                <a class="nav-link text-uppercase" aria-current="page" href="/"
                  >Home</a
                >
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link text-uppercase" href="#about">About Us</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link text-uppercase" href="/awards.html">Awards</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase" href="/services.html"
                  >Services</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase" href="/blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase" href="/clients.html"
                  >Clients</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase" href="/contactus.html"
                  >Contact us</a
                >
              </li>
            </ul>
          </div>
        </div>
`;

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((ele) => {
  if (ele.getAttribute("href") == window.location.pathname) {
    ele.classList.add("active");
  } else if (window.location.pathname.includes("/pages/services")) {
    if (ele.getAttribute("href") === "/services.html") {
      ele.classList.add("active");
    }
  } else if (window.location.pathname.includes("/pages/blogs")) {
    if (ele.getAttribute("href") === "/blog.html") {
      ele.classList.add("active");
    }
  }
});
