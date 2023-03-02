const ham = document.querySelector(".navbar-toggler");
const navBtnFirst = document.querySelectorAll(".nav__toggle:first-child");
const navBtnLast = document.querySelectorAll(".nav__toggle:last-child");
const navBtnMiddle = document.querySelectorAll(".nav__toggle:nth-child(2)");
const navBody = document.querySelector(".nav-body");
const navBodyItems = document.querySelectorAll(".nav-body__item");

const menu = document.querySelector(".mob-main-menu");
menu.innerHTML = `
<ul>
        <li><a class="nav-link-mob" href="/">Home</a></li>
        <li><a class="nav-link-mob" href="/awards.html">Awards</a></li>
        <li><a class="nav-link-mob" href="/services.html">Services</a></li>
        <li><a class="nav-link-mob" href="/blog.html">Blog</a></li>
        <li><a class="nav-link-mob" href="/clients.html">Clients</a></li>
        <li><a class="nav-link-mob" href="/contactus.html">Contact Us</a></li>
      </ul>
      <ul class="mob-social-wrap">
        <li>
          <a target="_blank" href="https://www.instagram.com/theglimpseproject/"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/TheGlimpseProject/"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/glimpseproject/"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/glimpse-digital-agency"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://www.tiktok.com/@theglimpseproject/"
            ><i class="fab fa-tiktok"></i
          ></a>
        </li>
      </ul>
`;
const links = menu.querySelectorAll("li");

const navLinksMob = document.querySelectorAll(".nav-link-mob");

navLinksMob.forEach((ele) => {
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

const tl = gsap.timeline({ paused: true });
// const tlBtn = gsap.timeline({ duration: 0.5, paused: true });
// tlBtn

tl.to(menu, {
  duration: 0,
  opacity: 1,
  height: "100vh", // change this to 100vh for full-height menu
  ease: "expo.inOut",
  zIndex: "99",
})
  .to(document.body, {
    height: "100%",
    overflow: "hidden",
  })
  .to(navBtnFirst, {
    rotation: 45,
    transformOrigin: "50% 50%",
    width: "100%",
    x: -5,
    y: 6,
  })
  .to(
    navBtnLast,
    {
      rotation: -45,
      transformOrigin: "-50% 50%",
      width: "100%",
      x: 3,
      y: 12,
    },
    "<"
  )
  .to(navBtnMiddle, { x: -100, opacity: 0 }, "<");
tl.from(
  links,
  {
    duration: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "expo.inOut",
  },
  "-=0.5"
);

tl.reverse();

ham.addEventListener("click", () => {
  //   tlBtn.reversed(!tlBtn.reversed());
  tl.reversed(!tl.reversed());
});
