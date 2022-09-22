import React from 'react'
import '../Css/Body.css'
import Bodyimg from './Bodyimg'
import pic from'../images/len.mp4'


export default function Body(props) {


  
 
  return (
    <div>
     
       <div className="bimg">
      <img className='p1' src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg" alt="" />
      </div>
      <div className="wearTreand">
      WEAR THE
      <div  className='w1' >TREND</div>
      <div className="TrendyTag">Our hottest collection</div>
      </div>

      <div className="gogl">
      {Bodyimg.map((ph)=>{
        return(
          <>

           <div className="Wear">
          <img className='imas' src={ph.img} alt="" />
          <div className="trendtitle"> {ph.Dec}</div>
          <button className='wear-btn'>Explore</button>
         </div>
          </>
        )
      })}
      </div>

      {/* section 2 */}

      <div >
        <img className='p1' src="https://static1.lenskart.com/media/desktop/img/July22/monsoon/1920x200%20(1).jpg" alt="" />
      </div>
<div className="font-head">
<h4>As Seen on Tv: Progressive Not Expensive</h4>
</div>
<div className="imgs">
  <div className="colums">
  
  <img className='img1' src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" alt="" />
  <img className='img1' src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="" />
  <img className='img1' src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="" />
  <img className='img1' src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="" />
</div>
</div>
<div className="">
  <img className='p1' src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/JJ-Banner.jpg" alt="" />
</div>
<div className="font-head">
  <h4>video</h4>
  {/* autoplay ="true" with loop=:"true" */}
 <video className='vid' src={pic}  >
   {/* <source  src={pic}   /> */}
 </video>
</div>
<div className="font-head">
  <h4>OUR BLOG</h4>
 
</div>
<img className='p1' src="https://static1.lenskart.com/media/desktop/img/Nov21/20211224_d_newyears2022_spectacular_below_gridR.jpg" alt="" />
    </div>



  )
}
