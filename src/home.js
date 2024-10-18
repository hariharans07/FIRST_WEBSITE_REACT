import './main.css';
function Home(){
    return(

        <div className="Home">

<header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" className="logo d-flex align-items-center me-auto">
        
        <img src="assets/img/favicon.png" alt="" className="img-fluid" />
        <h1 className="sitename">TIH</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="index.html#hero" className="">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#products">Products</a></li>
          <li><a href="index.html#team">Team</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>

  <main className="main">

   
<div className="hero section" id="hero">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 className="">WELCOME TO TECHNOLOGY INNOVATION HUB</h1>
            <p className="">We are a dynamic team of skilled developers passionate about crafting innovative applications.
            </p>
          <div className='d=flex'></div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/img/group7.jpg" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
  </main>
        </div>
    );
    
}

export default Home;