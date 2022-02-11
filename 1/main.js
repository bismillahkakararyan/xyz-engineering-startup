// creating a custom reusable header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <header>
        <nav class="navigation">
          <div class="topStripe">
            <a id="phoneNumber" href="tel:123-456789">
              <span><i class="fas fa-phone"></i></span> Call 123-456789
            </a>
            <a id="emailAddress" href="mailto:info@xyz.com">
              <span><i class="fas fa-envelope"></i></span> Email: info@xyz.com
            </a>
          </div>
          <div class="hiddenNavStripe">
            <!-- bar icon for mobile nav toggle -->
            <span id="toggleIcon"
              ><i onclick="changeIcon(this)" class="fas fa-bars"></i
            ></span>
            <!-- logo -->
           <img id="logo2" src="/images/logo1.png" alt="ENGINEERING logo" />
          </div>
  

  <div class="menu">  
  
  <a href="/index.html"><li class="nav-item">HOME</li></a>

            <div id="dropdown1" class="dropdown">
              <button class="dropbtn"> ABOUT US  <i class="fa-solid fa-chevron-down"></i></button>
              <div class="dropdown-content">
                <a href="/pages/about.html">ABOUT US</a>
                <a href="/pages/our team.html">OUR TEAM</a>
       
              </div>
            </div>


            <div id="dropdown2" class="dropdown">
              <button class="dropbtn">OUR EXPERTISE   <i class="fa-solid fa-chevron-down"></i></button>
              <div class="dropdown-content">
                <a href="/pages/services.html">OUR SERVICES</a>
                <a href="/pages/automative-services.html">AUTOMATIVE SERVICES</a>
                <a href="/pages/ethical-services.html">ETHICAL SERVICES</a>
                <a href="/pages/electrical-services.html">ELECTRICAL SERVICES</a>
                <a href="/pages/maintenance.html">MAINTENANCE</a>
              </div>
            </div>

            <!-- logo -->
            <img id="logo" src="/images/logo1.png" alt="ENGINEERING logo" />


            <div id="dropdown3" class="dropdown">
              <button class="dropbtn">PROJECTS   <i class="fa-solid fa-chevron-down"></i></button>
              <div class="dropdown-content">
                <a href="/pages/project-management.html">PROJECT MANAGEMENT</a>
                <a href="/pages/projects-accomplished.html">PROJECTS ACCOMPLISHED</a>
                <a href="/pages/gallery.html">GALLERY</a>

              </div>
            </div>


         <a href="/pages/Customers.html"><li class="nav-item">CUSTOMERS</li></a>
         <a href="/pages/contact.html">  <li class="nav-item">CONTACT</li></a>
          </div>
        </nav>
      </header>`
  }
}
// declaring it as an element
customElements.define("my-header", myHeader)


// creating a custom reusable footer
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div
        class="footer text-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4"
      >
        <div class="firstCol">
          <h3 id="footerHeroText">GET IN TOUCH</h3>
        </div>

        <div class="secondCol">
          <h3>HELP & SUPPORT</h3>

          <a href="tel:123456789"><i class="fas fa-phone"></i> 123-456789</a>

          <a href="mailto:info@xyz.com">
            <i class="fas fa-envelope"></i>
            info@xyz.com
          </a>
        </div>

        <div class="thirdCol">
          <h3>FOLLOW US</h3>

          <a href="#"><i class="footerIcons fab fa-facebook"></i></a>
          <a href="#"><i class="footerIcons fab fa-twitter"></i></a>
          <a href="#"><i class="footerIcons fab fa-instagram"></i></a>
          <a href="#"><i class="footerIcons fab fa-linkedin"></i></a>
        </div>

        <div class="fourthCol">
          <h3>ADDRESS</h3>
          <p>
            Lorem ipsum dolor <br />
            sit ametLorem ipsum consectetur.
          </p>
        </div>
      </div>

      <div class="footerNavLinks text-center">
       <a href="/index.html"><h5>HOME</h5></a>
         <a href="/pages/about.html"> <h5>ABOUT US</h5></a>
         <a href="/pages/services.html"> <h5>OUR SERVICES</h5></a>
         <a href="/pages/our team.html"> <h5>OUR TEAM</h5></a>
         <a href="/pages/contact.html"> <h5>CONTACT</h5></a>
      </div>

      <p id="copyright" class="text-center">
        Copyright © 2022 XYZ company All rights reserved. Developed by <a href="https://www.facebook.com/aryanbismillah">
          Bismillah
          Kakar Aryan
        </a>
      </p>
    </footer>`
  }
};
// declaring it as an element
customElements.define("my-footer", myFooter);


// form validation *contact-page
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
