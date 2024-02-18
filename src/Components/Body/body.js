import React from 'react';
import Image from 'next/image';

const Body = () => {
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
        <div className='row' style={{backgroundColor:'black'}}>
            <div className='column'>
     <img src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_640.png" width={800} height={700}  style={{objectFit:'cover'}} />
    </div>
    <div className='column' style={{color:'white',width:'44%',paddingLeft:'17%',paddingTop:'8%'}}>
        <h1 style={{fontSize:'4rem'}}>I'm REETIKA.
A Frontend Developer
based in India.</h1>
<p style={{fontSize:'21px'}}>I'm probably the most passionate designer you will ever get to work with. If you have a great project that needssome amazing skills, then do contact me.</p>
    </div>
    </div>

    <div style={{backgroundColor:'black',color:'white',marginTop:'-17px'}}>

<div style={{    padding: '114px'}} >
      <p style={{color:'#8491a0',fontSize:'1.2rem'}}>Work Experience</p>
      <h1 styl={{fontSize:'3rem'}}>Companies I have worked <br />for in the past.</h1>
    </div>

    <div style={{display:'flex',gap:'15px',marginTop:'-156px',paddingLeft:'7%',paddingBottom:'7%'}}>

      <div>
      <h1 style={{fontSize:'7rem',}}>01</h1>
<p style={{marginTop:'-49px',fontSize:'1.5rem'}}>Google, Interaction Designer</p>
<p>  I  currently am the lead designer on the interaction design team for Google Play.</p>
      </div>

      <div>
        <h1 style={{fontSize:'7rem'}}>02</h1>
<p style={{marginTop:'-49px',fontSize:'1.5rem'}}>Facebook, Product Designer</p>
<p> I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</p>
        </div>

        <div>
          <h1 style={{fontSize:'7rem'}}>03</h1>
<p style={{marginTop:'-49px',fontSize:'1.5rem'}}>Dribbble, Graphic Designer</p>
<p> I started my design career with Dribbble. I was incharge of creating illustrations for the platform.</p>
        </div>
    </div>
    </div>

    <div className='row' style={{padding:'6%', backgroundColor:'#fff3e4',height:'431px'}}>

<div className='column' style={{backgroundColor:'#fff3e4', width:'50%'}}>
  <h1 style={{fontSize:'3rem'}}>Philosophy & values</h1>
  <p style={{width:'84%',color:'#5b6876',letterSpacing:'3px'}}>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
</div>

<div className='column' style={{width:'40%',marginTop:'-1px'}}>
  <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5bece6f9113960579b_Philosophy.jpg" width={800} height={629} />
</div>
</div>

<div style={{backgroundColor:'black',height:'20px'}}>

</div>

<div className='row' style={{padding:'6%', backgroundColor:'#fff3e4',height:'435px'}}>

<div className='column' style={{backgroundColor:'#fff3e4', width:'50%'}}>
  <h1 style={{fontSize:'3rem'}}>Instagram</h1>
  <p style={{width:'84%',color:'#5b6876',letterSpacing:'3px'}}>If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world</p>
</div>

<div className='column' style={{width:'40%',marginTop:'-98px'}}>
  <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c8e322037cac55ee3_Instagram.jpg" width={800} height={629} />
</div>
</div>

    </div>
  );
};

export default Body;
