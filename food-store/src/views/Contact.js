import React from "react";
import './Contact.css'


function Contact() {
    return (
      <div className="container">
        <div className="text" style={{textAlign:"center"}}>
            
        <h1>CONTACT ME</h1>

       </div>

       <p style={{textAlign:"center", padding:"2%"}}>__________</p>
       <p style={{textAlign:"center", padding:"2%"}}>123-456-7890INFO@MYSITE.COM</p>

      <p style={{textAlign:"center", padding:"2%"}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      <br></br>
       Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>

<div className="cont">
       <div class="row100">
    <div class="col">
        <div class="inputBox">
            <input type="text" name="" placeholder="email" required="
            required"/>
            <span class="text">Email</span>
            <span class="line"></span>
  </div>
</div>
 

<div class="col">
<div class="inputBox">
    <input type="text" name="" placeholder="Mobile" required="
    required"/>
    <span class="text">Mobile</span>
    <span class="line"></span>
</div>
 </div>
 </div>
    

<div class="row100">
    <div class="col">
    <div class="inputBox textarea">
    <textarea required="required"></textarea>
    <span class="text">Type Your Massage Here </span>
    <span class="line"></span>
</div>
</div>
</div>

<div class="row100 p-5">
<div class="col">
    <button type="submit">Send</button>
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
export default Contact;