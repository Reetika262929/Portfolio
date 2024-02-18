import React from 'react'
import Image from 'next/image'
const header = () => {
    const toggleResponsive = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      };
    return (
        <div>
            <div style={{background:'#5221e6',padding:'1px'}}>

                <p style={{textAlign:'center',color:'#fff',fontWeight:'500',}}>Click here to get 2 FREE months of skillshare Premium & watch my Webflow course on building this website from scratch!</p>
            </div>
         <div class="topnav" id="myTopnav">
         <div style={{float:'left'}}>
         <a href="#contact" style={{fontSize:'30px',letterSpacing
        :'initial'}}>REETIKA TRIPATHI</a>
            </div>
  <div style={{float:'right'}}>




 
  <a href="#contact">About</a>
  <a href="#news">Experience</a>
  <a href="#news">Skills</a>
  <a href="#about">blog</a>
  <a href="#news">Contact</a>
 
  </div>
  <a href="javascript:void(0);" class="icon" onclick="toggleResponsive()">
    <i class="fa fa-bars"></i>
  </a>
</div>



        </div>
    )
}

export default header