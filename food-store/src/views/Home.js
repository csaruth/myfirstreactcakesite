import React from "react";
import './Home.css'
import img1 from '../asset/firstcake.jpg'
import img2 from '../asset/secondcake.jpg'
import img3 from '../asset/cake3.jpg'
import img4 from '../asset/cake4.jpg'
import img5 from '../asset/cake5.jpg'
import img6 from '../asset/cake6.jpg'
import img7 from '../asset/cake7.jpg'
import img8 from '../asset/cake8.jpg'
import img9 from '../asset/cake9.jpg'
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="Home">
            
        <div className="hana">
                HANNA BAKES
             </div>
            

<div className="container text-center">
 <div className="row">
    <div className="col">
        <img src={img1} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-5">
    <img src={img2} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-1"  style={{backgroundColor: "pink"}}>
     <p style={{textAlign: "center", padding: "40%" , fontWeight: "bold", height:"90%"}}>Designer Cakes Delivered to Your Doorstep</p>
    </div>

  </div>


  <div className="col">
        
        <p style={{textAlign:"center",padding:"50px", fontSize:"25px", width:"100%",height:"30%", backgroundColor:"grey", marginTop:"12px"}}>ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE</p>
    </div>
</div>



    <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src={img3} alt = "me" style={{width: "100%"}}/>
   <Link to="/About">
    <button>
    meet hanna
    </button>
   </Link>
    </div>
    <div class="col">
    <img src={img4} alt = "me" style={{width: "90%"}}></img>
    <Link to="/Order">
    <button>
    Order Now
    </button>
   </Link>
    </div>
  </div>

  <p style={{textAlign:"center",  fontSize:"30px"}}>Follow me on Instagram</p>

  <div className="container text-center p-5">
 <div className="row">
    <div className="col">
    {/* <div className="work-info">
                <h3>Best Cake</h3>
                <span>Birthday Cake</span>
              </div> */}
        <img src={img5} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-5">
      <img src={img6} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-5">
      <img src={img7} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-5">
    <img src={img8} alt = "me" style={{width: "100%"}}></img>
    </div>

    <div className="col order-5">
    <img src={img9} alt = "me" style={{width: "100%"}}></img>
    </div>
  </div>
</div>
    
</div>


<div style={{justifyContent:"center"}} class="d-grid gap-2 ">
  <p style={{textAlign:"center"}}>SUSCRIBE TO MY NEWS LATER</p>
  <input type="email" name="email" id="email" placeholder="enter your email here" style={{width:"100%",textAlign:"center"}}></input>
  <button class="btn btn-secondary" type="button" style={{width:"100%"}}>Suscribe Now</button>
</div>
  

        </div>
    );
}

export default Home;