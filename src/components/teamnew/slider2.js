import React from 'react'
import Kartikay from '../resources/kartikay_gupta.png'
import Aditya from '../resources/aditya_kumar.jpg'
import Padmaja from '../resources/padmaja_joshi.jpeg'
import Aman from '../resources/aman_kumar.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from './namecard';
import './teamnew.css'
export default function Slider2() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className = "slider1">
            <h2 data-aos = "zoom-in" data-aos-once = "true">Technical Team</h2>
        <Slider {...settings}>
                
                <div>
                <div className = "coord">
                    <div className = "icon">
                        <img src = {Kartikay}/>
                        <Namecard name = 'Kartikay Gupta' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                    <div className = "icon">
                    <img src = {Aditya}/>
                        <Namecard name = 'Aditya Kumar' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                    <div className = "icon">
                        <img src = {Padmaja}/>
                        <Namecard name = 'Padmaja Joshi' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:madhur.nilu@gmail.com"/>
                    </div>
                </div>
                </div>
                <div>
                <div className = "coord">
                    <div className = "icon">
                    <img src = {Aman}/>
                        <Namecard name = 'Aman Kumar' link1 = "https://www.linkedin.com/in/madhur-malpani-818646196/" link2 = "mailto:atishayjain@iitg.ac.in"/>
                    </div>
                </div>
                </div>
            
           
        </Slider>
        </div>
      );
    
    
}