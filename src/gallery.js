import './main.css';

function Gallery(){
    return(
        <div className="Gallery">
            <div id="gallery" className="team section">
      <div className="container">
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p></p>
        </div>
        <div className="slider">
          <div className="owl-carousel">
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/tihall.jpg" alt="" />
              </div>

            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih1.jpeg" alt="" />
              </div>

            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih2.jpeg" alt="" />
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih3.jpeg" alt="" />
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih4.jpeg" alt="" />
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih5.jpeg" alt="" />
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="assets/img/sih6.jpeg" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

        </div>
    );
}
export default Gallery;