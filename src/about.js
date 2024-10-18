import './main.css';
function About(){
    return(
       <div className='About'>   
       <div id="about" className="about section-bg">
    <div className="container" data-aos="fade-up">


      <div className="section-title">
        <h2>About</h2>
      </div>
      <div className="row">
        <div className="col-lg-6" style={{paddingTop: "20px"}}>
          <h3>Find Out More <span>About Us</span></h3>
          <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>A hub for creativity and innovation, providing access to the latest
            technology and equipment to students.
          </p>
          <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>TIH will produce in-house
            projects for our college as well as consultancy projects.
          </p>
          <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>Project-Based Learning will be given to students, which will make
            them industry-ready.
          </p>

        </div>
        <div className="col-lg-6">
          <div  data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/tihhall1.jpg" className="img-fluid " alt="" />
          </div>

        </div>
      </div>
        
     


      <div className="row">
        
         
        

        <div className="container-xxl service py-5"></div>
        <div className="container-xxl">
          <div className="row g-4 wow fadeInUp animated animated" data-wow-delay="0.3s"
            style={{visibility: "visible", animationDelay:" 0.3s"}}>
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <i className="fa fa-question-circle fa-2x me-3"></i>
                  <h4 className="m-0">Why TIH</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2" type="button">
                  <i className="fa fa-lightbulb-o fa-2x me-3"></i>
                  <h4 className="m-0">Vision</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 " data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3" type="button">
                  <i className="fa fa-bullseye fa-2x me-3"></i>
                  <h4 className="m-0">Mission</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade active show" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: "350px"}}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid" src="assets/img/skills.png"
                          style={{objectFit: "cover"}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">

                      <p className="mb-4 jus"> <i className="fa fa-check text-success me-3"></i>To provide a space to students
                        to explore their passion, collaborate with their peers, and develop the skills they need to
                        succeed in their chosen field. Bridging the gap between academia and industry, and
                        facilitating the transfer of technology, knowledge, and resources.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: "350px"}}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid" src="assets/img/vis.png"
                          style={{objectFit: "cover"}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">

                      <p className="jus"><i className="fa fa-check text-success me-3"></i>To become a leading Technology
                        Innovation Hub across the globe for students by fostering a culture of creativity, collaboration, and cutting-edge technological advancements.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade " id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: "350px"}}>
                      <div className="position-relative h-100">
                        <img className=" img-fluid w-40 h-50" src="assets/img/mission.png"
                          style={{objectFit: "cover"}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">

                      <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>To promote innovation and
                        entrepreneurship among students by providing a nurturing environment that encourages ideation,
                        experimentation, and problem-solving.
                      </p>
                      <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>To facilitate interdisciplinary
                        research and foster cross-functional collaborations, encouraging the exchange of ideas and
                        expertise among different engineering disciplines.
                      </p>
                      <p className="mb-4 jus"><i className="fa fa-check text-success me-3"></i>To continuously adapt and
                        evolve in response to emerging technologies and industry trends, bridging the gap between
                        academia and industry, and facilitating the transfer of technology, knowledge, and resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>



  </div>
  </div>
 
  
    );
}

export default About;