const footer = document.getElementById("footer");

footer.innerHTML = `
    <footer class="text-center text-lg-start mx-auto">
          <div class="container-fluid text-center text-md-start mt-5 mx-auto">
            <!-- Grid row -->
            <div class="footer-links__grid">
              <!-- Grid column -->
              <div class="">
                <img
                  src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/footer/logo.svg"
                  alt="logo"
                  width="150" height="200"
                  class="footer-logo"
                />
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="">
                <!-- Links -->
                <h6 class="fw-bold mb-4 gradient-text-small">Explore</h6>
                <p>
                  <a href="/#about" class="text-decoration-none text-white"
                    >About Us</a
                  >
                </p>
                <p>
                  <a href="/#trigger" class="text-decoration-none text-white"
                    >Portfolio</a
                  >
                </p>
                <p>
                  <a
                    href="/services.html"
                    class="text-decoration-none text-white"
                    >Services</a
                  >
                </p>
                <p>
                  <a href="/#experts" class="text-decoration-none text-white"
                    >Team</a
                  >
                </p>
                <p>
                  <a href="/blog.html" class="text-decoration-none text-white"
                    >Blogs</a
                  >
                </p>
                <p>
                  <a href="/contactus.html" class="text-decoration-none text-white"
                    >Contact Us</a
                  >
                </p>
              </div>
              <!-- Grid column -->
              <!-- Grid column -->
              <div class="">
                <!-- Links -->
                <h6 class="fw-bold mb-4 gradient-text-small">Support</h6>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >Enquiry</a
                  >
                </p>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >Careers</a
                  >
                </p>
                <p>
                  <a href="/privacy-policy.html" class="text-decoration-none text-white"
                    >Privacy Policy</a
                  >
                </p>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >Terms of Use</a
                  >
                </p>
                <p>
                  <a href="https://www.worxbyglimpse.com/" target="_blank" class="text-decoration-none text-white"
                    >Worx by Glimpse</a
                  >
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="">
                <!-- Links -->
                <h6 class="fw-bold mb-4 gradient-text-small">Follow Us</h6>
                <p>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/TheGlimpseProject/"
                    class="text-decoration-none text-white"
                    >Facebook</a
                  >
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/theglimpseproject/"
                    class="text-decoration-none text-white"
                    >Instagram</a
                  >
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://twitter.com/glimpseproject/"
                    class="text-decoration-none text-white"
                    >Twitter</a
                  >
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/glimpse-digital-agency"
                    class="text-decoration-none text-white"
                    >LinkedIn</a
                  >
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@theglimpseproject/"
                    class="text-decoration-none text-white"
                    >Tiktok</a
                  >
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="">
                <!-- Links -->
                <h6 class="fw-bold mb-4 gradient-text-small">Locations</h6>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >United Arab Emirates</a
                  >
                </p>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >Saudi Arabia</a
                  >
                </p>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >France</a
                  >
                </p>
                <p>
                  <a href="#!" class="text-decoration-none text-white"
                    >Lebanon</a
                  >
                </p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
          <div
            class="footer-bottom-wrap"
          >
            <div class="footer__input-wrapper">
              <h4 class="gradient-text-small fw-bold text-nowrap">
                Subscribe to our newsletter:
              </h4>
              <div
                class="footer__gradient-box__input rounded input-group d-flex align-items-center justify-content-evenly"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email*"
                  aria-label="Recipient's email"
                  aria-describedby="newsletter form"
                  required
                />
                <div class="input-group-append d-flex">
                  <button class="btn text-white px-4" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <img src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/footer/divider.svg" class="divider" alt="divider"/>
            <div class="footer__input-wrapper">
              <h4 class="gradient-text-small-rev fw-bold text-end">Get in touch:</h4>
              <div
                class="footer__gradient-box__input-rev rounded input-group d-flex align-items-center justify-content-evenly"
              >
                <a href="mailto:hello@theglimpseproject.com" target="_blank">
                  hello@theglimpseproject.com
                </a>
                <hr />
                <a href="tel:+971-4-565-5290"> +971 4 565 5290 </a>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 gap-4 px-4 text-white"
            style="font-size: 0.8rem"
          >
            <p>All rights reserved 2022 ?? Glimpse Digital Agency</p>
            <p>
              International Media Production Zone (IMPZ), Dubai, United Arab
              Emirates
            </p>
          </div>
        </footer>
    `;
