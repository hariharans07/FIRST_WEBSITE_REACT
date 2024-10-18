import './main.css';
function Service(){
    return(
        <div className="Service">
        <div id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <h2>TIH Provides Training On</h2>
      </div>

      <div className="container">
        <div className="row gy-4">

         
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div  style={{display: "flex", alignItems: "center"}}>
                <div className="icon" style={{marginRight:"20px"}}><i className="bi bi-window-fullscreen"></i></div>
                <h4>
                  Full Stack
                </h4><br></br>
              </div>
              <strong style={{color: "#fff"}}>The development of both front-end and back-end aspects of a website or
                application, encompassing both client-side and server-side technologies.</strong>
            </div>
          </div>

         
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div style={{display: "flex", alignItems: "center"}}>
                <div className="icon" style={{marginRight: "20px"}}><i className="bi bi-headset-vr"></i></div>
                <h4>
                  Immersive Technology</h4>
              </div>
              <strong style={{color: "#fff"}}>Digital experiences that deeply engage users by creating a sense of presence
                within virtual or augmented environments.</strong>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div  style={{display: "flex", alignItems: "center"}}>
                <div className="icon" style={{marginRight: "20px"}}><i className="bi bi-person-workspace"></i></div>
                <h4>
                  UI/UX</h4><br></br>
              </div>
              <strong style={{color: "#fff"}}>Creating intuitive and user-friendly digital interfaces through design and
                functionality to enhance user satisfaction and interaction efficiency.</strong>
            </div>
          </div>
         
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div style={{display: "flex", alignItems: "center"}}>
                <div className="icon" style={{marginRight: "20px"}}><i className="bi bi-android2"></i></div>
                <h4>Mobile App Development</h4>
              </div>
              <strong  style={{color: "#fff"}}>Creating software applications specifically designed to operate on mobile
                devices such as smartphones and tablets, catering to diverse user needs and platforms.</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
    


  
    <div id="training" className="training section">

      <div className="container section-title" data-aos="fade-left">
        <h2>Roadmap</h2>
      </div>
      <div className="container" data-aos="fade-left" data-aos-delay="100">

        <div className="row gy-4" style={{display:" flex",flexDirection: "row",justifyContent: "center"}}>

          <div className="col-lg-8">

            <div className="info-wrap">
              <img src="assets/img/testimonials/Roadmap.jpeg" alt="" style={{border:"0", width: "100%", height: "auto"}}/>
            </div>
          </div>

        </div>

      </div>

    </div>
   
    <div className="selectionProcess">
      <div id="training" className="training section">

        <div className="section-title" data-aos="fade-up">
          <h2>Selection Process</h2>
        </div>



        <div className="row gy-4"  style={{display: "flex",flexDirection: "row",justifyContent: "center"}}>

          <div className="col-lg-8">
            <div>
              <ul>
                <li  style={{accentColor:"#41516C"}}>
                  <div className="date">Primary Round</div>
                  <div className="title"><b>Basic Coding Test</b></div>
                  <div className="descr">2nd year students with CGPA above 8.0 can appear for this round. Questions will
                    be based on basic problem-solving and programming.</div>
                </li>
                <li style={{accentColor:"#ffa500"}}>
                  <div className="date">Primary Round Result</div>
                  <div className="title"><b>Final Round Eligibility</b></div>
                  <div className="descr">Students who got above 80% will be eligible for the final round</div>
                </li>
                <li style={{accentColor:"#E24A68"}}>
                  <div className="date">Final Round</div>
                  <div className="title"><b>Personal Interview</b></div>
                  <div className="descr">Eligible students will be interviewed based on their technical skills,
                    Communication skills and area of interest.</div>
                </li>
                <li style={{accentColor:"#1B5F8C"}}> 
                  <div className="date">Final Round Result</div>
                  <div className="title"><b>Results </b></div>
                  <div className="descr">A total of 30 students will be selected based on their performance on the
                    personal interview</div>
                </li>
                <li style={{accentColor:"#4CADAD"}}>
                  <div className="date">Congratulations</div>
                  <div className="title"><b></b></div>
                  <div className="descr">You are now one of the Member of TIH</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    );

}
export default Service;