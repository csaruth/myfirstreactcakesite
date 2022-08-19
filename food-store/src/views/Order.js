
import { Link } from 'react-router-dom'
import React from "react";

import './Order.css'
// import img8 from '../asset/cake8.jpg'
import img5 from '../asset/cake5.jpg'
import img6 from '../asset/cake6.jpg'
import img7 from '../asset/cake7.jpg'
import img8 from '../asset/cake8.jpg'
import img9 from '../asset/cake9.jpg'

function Order(){

    return (

        <div>

         <h1 style={{textAlign:"center" ,margin:"3%"}}>ORDER</h1>

        <div
        
        className="site-section site-portfolio">
           <div className="container">
           <div className="row mb-5 align-items-center">
          <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
            <h2>Hey, I'm HANNA</h2>
            <p>please feel free to make your cake order</p>
          </div>


       
        <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">

            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
               <div className="work-info" >
                <h3>Sweet</h3>
                <span>Wedding Cake</span>
              </div>
              <img src={img8} alt = "me" style={{width: "100%"}}></img>
            </Link>
            </div>

          <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
              <div className="work-info">
                <h3>Best Cake</h3>
                <span>Birthday Cake</span>
              </div>
              <img src={img5} alt = "me" style={{width: "95%"}}></img>
            </Link>
          </div>

          <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
              <div class="work-info">
                <h3>Diliciouse</h3>
                <span> Celaberation Cake</span>
              </div>
              <img src={img6} alt = "me" style={{width: "100%"}}></img>
            </Link>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
              <div className="work-info">
                <h3>Best Cake</h3>
                <span>Birthday Cake</span>
              </div>
              <img src={img7} alt = "me" style={{width: "100%"}}></img>
            </Link>
          </div>

          <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
              <div className="work-info">
                <h3>Beautiful</h3>
                <span>Wedding Cake</span>
              </div>
              <img src={img8} alt = "me" style={{width: "100%"}}></img>
            </Link>
          </div>

          <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link className="navbar-brand" to="/Order" class="item-wrap fancybox">
              <div className="work-info">
                <h3>Deliciouse</h3>
                <span>Celaberation Cake</span>
              </div>
              <img src={img9} alt = "me" style={{width: "100%"}}></img>
            </Link>
          </div>
        </div>
</div>
</div>


<div style={{justifyContent:"center"}} className="d-grid gap-2 p-5">
  <p style={{textAlign:"center"}}>SUSCRIBE TO MY NEWS LATER</p>
  <input type="email" name="email" id="email" placeholder="enter your email here" style={{width:"100%",textAlign:"center"}}></input>
  <button class="btn btn-secondary" type="button" style={{width:"100%"}}>Suscribe Now</button>
</div>
 </div>



   </div>     

    );
}
export default Order;



