import React from "react";
import { images } from "./images/Dataimg";

import "./Css/Home.css";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Body from "./Body/Body";



// export const images = [
//   {
//     image:
//       "https://talesara.in/image/cache/catalog/header-1140x380.jpg",
//     heading: "Silde 1",
//     desc: " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
//   },
//   {
//     image:
//       "https://static1.lenskart.com/media/desktop/img/June22/15thjune/Launch-desktop.gif",
//     heading: "Silde 2",
//     desc: " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     heading: "Silde 3",
//     desc: " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
//   },
// ];

export default function Home(props) {
  
    const [currentSlide, setCurrentSlide ] = useState(0);

    const slideLength = images.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    //     console.log("next");
    //   };


    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1 );
        console.log("next");
    }
    const prevSlide = () =>{
        setCurrentSlide(currentSlide ===  0 ?slideLength - 1 : currentSlide - 1 );
        console.log("next");
    }

    function auto () {
        slideInterval = setInterval(nextSlide,intervalTime);
    }

    useEffect(() =>{
        setCurrentSlide(0);
    },[]);

    useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentSlide]);

     
  return (
      <>
     
   <div className="slider">
 
       <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
       <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

       {images.map((Slide,index)=>{
           return (
               <div 
              className={index === currentSlide ? "slide current":"Slide"}
              key={index}>
                  {index === currentSlide && (
                      <div>
                          <img src={Slide.image} alt=""  className="image"/>
                        
                          </div>
                  )}
                </div>
           )
       })}


   </div>
 <div className="body part">
<Body/>
 </div>
      
   </>
   );
}
