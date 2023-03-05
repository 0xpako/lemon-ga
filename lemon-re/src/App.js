import React from 'react';
import './App.css';
class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
        <div id="Welcome">
  
          <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
              <img src="assets/images/logo.png" width="40" height="50" class="d-inline-block" alt="" /> Little Lemon
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#Welcome">Welcome</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Restaurant">Restaurant</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Reservation">Reservation</a>
                </li>
              
              </ul>
          </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider1.jpg" alt="First slide" />
                <div class="carousel-caption">
                  <h2>Welcome!</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider2.jpg" alt="Second slide" />
                  <div class="carousel-caption">
                  <h2>Traditional Cuisine</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider3.jpg" alt="Third slide" />
                  <div class="carousel-caption">
                  <h2>Selected Products</h2>
                <p>...</p>
              </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div class="container">
        <div class="row" id="Restaurant">
            <div class="col navMenu">
                <h2 class="text-center" >~ Restaurant ~</h2>
            </div>
          </div>
          <div class="row bg-light" >
            <div class="col-md-6">
              <h3>Location</h3>
              <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
              <h5>Origin</h5>
              <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div class="col-md-6" data-aos="fade-up">
              <img class="img-fluid" src="assets/images/location.jpg" />
            </div>
          </div>
          <div class="row bg-light"><br /></div>
          <div class="row bg-light">
            <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
              <img class="img-fluid " src="assets/images/cuisine.jpg" />
            </div>
            <div class="col-md-6 order-md-12 order-1">
              <h3>Cuisine</h3>
              <p>Anthing you can think of!</p>
              <h5>A Unique Experience</h5>
              <p>You will never forget your visit.</p>
            </div>
          </div>
        
        
        <div class="row" id="Reservation">
          <div class="col navMenu">
                <h2 class="text-center">~ Reservation ~</h2>
          </div>
        </div>
        <div class="row">
          <div class=" col-lg-12 reserve-container" data-aos="fade-up">
            <img class="img-fluid image-reserve" src="assets/images/reserve.jpg" />
            <div class="reserve-text col-lg-12 ">
              <h1 class="text-center">Timetables</h1>
              <div class="row">
                <div class="col-6">
                    <h2 class="text-center">Lunch</h2>
                    <h5 class="text-center">12:00 - 15:00</h5>
                </div>
                <div class="col-6">
                    <h2 class="text-center">Dinner</h2>
                    <h5 class="text-center">19:30 - 23:30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row bg-light">
          <div class="col">
            <form>
              <div class="form-row">
                  <div class="form-group col-6">
                    <h3>Reserve</h3>
                    <label for="inputDate"> Date</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Data gg/mm/aaaa" />
                  </div>
                  <div class="form-group col-6">
                    <h3>Details</h3>
                    <label for="inputName"> Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Name" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputTime"> Timetables</label>
                    <input type="time" class="form-control" id="inputTime" placeholder="Timetables" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputEmail"> Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputNumber"> Number of Guests</label>
                    <input type="number" class="form-control" id="inputNumber" placeholder="Number of Guests" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputCel"> Phone</label>
                    <input type="tel" class="form-control" id="inputCel" placeholder="Phone" />
                  </div>
                  <div class="form-group col-12">
                    <label for="inputComment"> Further requests</label>
                  <textarea class="form-control" rows="4" id="inputComment" placeholder="Further requests"></textarea>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-4 col-md-offset-4">
                    <button type="submit" class="btn btn-secondary btn-block">Reserve</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
    </div>
  </div>
) } }
 export default App;