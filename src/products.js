import './main.css';
function Products(){
    return(
        <div className="Products">        
        <div id="products" class="portfolio section">

        <div class="container section-title" data-aos="fade-up">
          <h2>PRODUCTS</h2>
          <p>TIH completed projects</p>
        </div>
        <div class="container">
  
          <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
  
            <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-completed">Completed</li>
              <li data-filter=".filter-ongoing">Ongoing</li>
              <li data-filter=".filter-testing">Testing</li>
              <li data-filter=".filter-upcoming">Upcoming</li>
            </ul>
  
            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
  
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-completed">
                <img src="assets/img/masonry-portfolio/mic.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>MIC</h4>
                  <p>MKCE Info Corner - Mentor-Mentee Application</p>
                  <a href="assets/img/masonry-portfolio/mic.png" title="MKCE Info Corner - Mentor-Mentee Application"
                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="https://mic.mkce.ac.in" class="details-link" target="_blank"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
  
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-completed">
                <img src="assets/img/masonry-portfolio/mkce.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>MKCE</h4>
                  <p>MKCE Updated Website</p>
                  <a href="assets/img/masonry-portfolio/mkce.png" title="MKCE Updated Website"
                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="https://mkce.ac.in" class="details-link" target="_blank"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
  
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-testing">
                <img src="assets/img/masonry-portfolio/itkm.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>ITKM</h4>
                  <p>Information Technology Knowledge Management</p>
                  <a href="assets/img/masonry-portfolio/itkm.png" title="Information Technology Knowledge Management"
                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
  
  
  
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-completed">
                <img src="assets/img/masonry-portfolio/bus.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Student Transport Hub</h4>
                  <p>Student Transport Hub</p>
                  <a href="assets/img/masonry-portfolio/bus.png" title="Bus" data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="https://bus.mkce.ac.in" class="details-link" target="_blank"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
  
  
  
  
  
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-testing">
                <img src="assets/img/masonry-portfolio/discipline.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Discipline System</h4>
                  <p>Discipline Management System</p>
                  <a href="assets/img/masonry-portfolio/discipline.png" title="Discipline Management System"
                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="https://discipline.mkce.ac.in" class="details-link" target="_blank"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
  
  
  
  
  
  
            </div>
  
          </div>
  
        </div>
  
      </div>
      <div id="testimonials" class="testimonials section">
  
        
        <div class="container section-title" data-aos="fade-up">
          <h2 style={{color: "white"}}>Head of TIH</h2>
        </div>
  
        <div class="container" data-aos="fade-up" data-aos-delay="100">
  
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/kalai.jpeg" class="testimonial-img" alt="" />
                  <h3 style={{color: "white"}}>MR. K. Kalaiarasan</h3>
                  <h4>Head of Technology Innovation Hub - MKCE</h4>
                  <p style={{color: "white"}}>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>Work hard in silence, Let your Success be your Noise</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
  
       
        <div class="container section-title" data-aos="fade-up">
          <h2 style={{color: "white"}}>Technical Trainers</h2>
        </div>
    
        <div class="container" data-aos="fade-up" data-aos-delay="100">
  
          <div class="testimonial-container" style={{display: "flex",gap: "20px", flexWrap: "wrap", justifyContent: "center"}}>
  
            <div class="testimonial-item">
              <img src="assets/img/testimonials/madhumitha.png" class="testimonial-img" alt="" />
              <h3 style={{color: "white"}}>Mrs. M. Madhumitha</h3>
              <h4>Trainer at Technology Innovation Hub - MKCE</h4>
            </div>
  
            <div class="testimonial-item">
              <img src="assets/img/testimonials/Haritha.png" class="testimonial-img" alt="" />
              <h3 style={{color: "white"}}>Ms. J. Haritha</h3>
              <h4>Trainer at Technology Innovation Hub - MKCE</h4>
            </div>
  
            <div class="testimonial-item">
              <img src="assets/img/testimonials/sudhir.png" class="testimonial-img" alt="" />
              <h3 style={{color: "white"}}>Mr. S. Sudhir</h3>
              <h4>Trainer at Technology Innovation Hub - MKCE</h4>
            </div>
  
          </div>
  
        </div>
  
  
  
      </div>
      </div>

    );

}
export default Products;