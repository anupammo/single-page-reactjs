import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#header-bg">Single Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#header-bg">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
    <header className="jumbotron jumbotron-fluid" id="header-bg">
        <div className="container">
          <h1 className="display-5 text-center text-white text-uppercase">
              <strong>Fluid Jumbotron</strong>
          </h1>
          <p className="lead text-center text-white">This is a modified jumbotron that occupies the 
              entire horizontal space of its parent.</p>
        </div>
    </header>
    <section id="services">
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-danger text-center text-uppercase mt-4 mb-5 display-5">
                        <strong>Lorem ipsum dolor sit amet</strong>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <div className="card mb-3">
                        <img src="/image/cool-background-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text text-justify">Some quick example text to build on the 
                            card title and make up the bulk of the cards content</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card mb-3">
                        <img src="image/cool-background-2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text text-justify">Some quick example text to build on the 
                            card title and make up the bulk of the cards content</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card mb-3">
                        <img src="image/cool-background-3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text text-justify">Some quick example text to build on the 
                            card title and make up the bulk of the cards content</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="about" className="bg-primary">
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-white text-center text-uppercase mt-4 mb-4 pt-5 display-5">
                        <strong>Lorem ipsum dolor sit amet</strong>
                    </h2>
                    <p className="text-white text-justify mt-5 pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Viverra vitae congue eu consequat ac felis donec. Non blandit massa enim nec dui nunc mattis enim. A condimentum vitae sapien pellentesque. Et magnis dis parturient montes nascetur. Eget egestas purus viverra accumsan. Tortor consequat id porta nibh venenatis cras sed felis eget. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Et tortor at risus viverra adipiscing at in tellus integer. Lobortis feugiat vivamus at augue eget. Tellus mauris a diam maecenas sed enim. Tempus urna et pharetra pharetra. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Fringilla ut morbi tincidunt augue interdum velit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" className="container mt-5 mb-5">
        <div className="row">
            <div className="col-12">
                <h2 className="text-success text-center text-uppercase mb-5">
                    <strong>Contact Us</strong>
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="offset-md-4 col-md-4 offset-md-4 col-xs-12">
                <form>
                    <div className="form-group">
                        <label htmlFor="fname">Your Full Name</label>
                        <input id="fname" type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Your eMail ID</label>
                        <input id="mail" type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mob">Your Mobile Number</label>
                        <input id="mob" type="tel" className="form-control" placeholder="Mobile No" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="msg">Example textarea</label>
                        <textarea className="form-control" id="msg" rows="3" placeholder="Type your message here"></textarea>
                    </div>                    
                    <div className="form-group">
                        <button className="btn btn-block btn-success" type="submit">Send Now</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <footer id="footer-bg" className="bg-primary pt-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="text-center text-white">All Rights Reserved © Anupam Mondal</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
