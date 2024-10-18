import './main.css';
function Contact(){
    return(
     <div className="Contact">
      <div id="contact" className="contact section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>

      <div className="container row gy-4" style={{display: "flex",flexDirection: "row",justifyContent: "center"}}>

        <div className="col-lg-6">


          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>M Kumarasamy college of engineering, Thalavapalayam, <br></br>Tamil Nadu 639113</p>
            </div>
          </div>
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>head.tih@mkce.ac.in</p>
            </div>
          </div>




        </div>
        <div className="col-lg-6">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97568.49744906381!2d78.048435!3d11.0541752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2c5940c36779%3A0x638aea1962e8ae96!2sM.Kumarasamy%20College%20of%20Engineering%2C%20Autonomous%20(Accredited%20with%20A%20grade%20by%20NAAC)!5e1!3m2!1sen!2sin!4v1728144087160!5m2!1sen!2sin"
            width="600" height="300"  style={{border:"0", paddingRight:" 10px"}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


      </div>

      </div>


  <footer id="footer" className="footer"  style={{background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(11, 77, 78, 1) 53%, rgba(9, 60, 121, 1) 95%)"}}>
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="d-flex align-items-center">
            <span className="sitename">TIH</span>
          </a>
          <div className="footer-contact pt-3">
            <p>M.Kumarasamy College of Engineering, Thalavapalayam</p>
            <p>Karur, Tamilnadu-639113</p>
            <p><strong>Email:</strong> <span>head.tih@mkce.ac.in</span></p>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#about">Terms of service</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>

            <li><i className="bi bi-chevron-right"></i> <a href="#services">Full Stack Development</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#services">Mobile App Development</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="https://www.linkedin.com/company/technology-innovation-hub-mkce/"><i
                className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p></p>
          <p>© <span>Copyright</span> <strong className="px-1 sitename">TIH</strong> <span>All Rights Reserved
            </span>Designed and Maintained by Technology Innovation Hub - MKCE</p>
        </div>
      </div>
    </div>
  </footer>
  </div>
    
    );
}
export default Contact;