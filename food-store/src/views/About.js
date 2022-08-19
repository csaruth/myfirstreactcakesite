import React from "react";
import img7 from '../asset/cake7.jpg'
import './About.css'

function About(){
    return (
  
<div>

<div className="about">
<div  className="text-center rounded" style={{width:"100%", hieght:"auto", bacgrounColour:"pink"}}>
    <p>ABOUT ME</p>
    <p>___________</p>
    <p>HANNA MASON - PASTRY CHEF, HOME BAKER, BLOGGER</p>
<img src={img7} alt = "me" style={{width: "30%", borderRadius:"50%" ,height:"50%"}}></img>

<p style={{textAlign:"center"}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click 
    “Edit Text” or double click me to add your own content and make changes to the font.
     Feel free to drag and drop me anywhere you like on your page. I’m a great 
    place for you to tell a story and let your users know a little more about you.
</p>

<p>This is a great space to write long text about your company and your services.
     You can use this space to go into a little more detail about your company.
      Talk about your team and what services you provide. Tell your visitors the story of how you came up 
      with the idea for your business and what makes you different from your competitors.
     Make your company stand out and show your visitors who you are.
</p>


</div>
</div>

<div style={{justifyContent:"center"}} className="d-grid gap-2 p-5">
  <p style={{textAlign:"center"}}>SUSCRIBE TO MY NEWS LATER</p>
  <input type="email" name="email" id="email" placeholder="enter your email here" style={{width:"100%",textAlign:"center"}}></input>
  <button class="btn btn-secondary" type="button" style={{width:"100%"}}>Suscribe Now</button>
</div>
</div>



    );
}

export default About;