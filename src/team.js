import './main.css';
function Team(){
    return(
        <div className="Team">

    <div id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our Dedicated and Honest Team Members</p>
      </div>
      <div id="batch-filter" className="batch-filter section" style={{padding:" 10px",paddingTop:" 5px"}}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-container">
                <ul className="team-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                  <li data-filter="2023" value="2023">2023</li>
                  <li data-filter="2024" value="2024" className="active">2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="team-members" className="row gy-4">
          
        </div>
       
        <div id="pagination-controls" className="pagination-controls" data-aos="fade-up">
       
        </div>
      </div>
    </div>


        </div>
    );
}
export default Team;