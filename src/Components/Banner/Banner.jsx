
"use client"
import IMAGE_URL from "@/api/imageUrl";
import  { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Style from './banner.module.css';
import Image from "next/image";
import BASE_URL from "@/api/baseUrl";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { autoplay, Navigation  } from 'swiper/modules';


const Banner = () => {
    const [bannerImage, setBannerImage] = useState([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(BASE_URL + "/home");
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setBannerImage(data?.slide); // Set the fetched data to the state
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [])

    

    // console.log(bannerImage)


    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


  
    return (


      <Swiper 
      navigation={true}  

      centeredSlides={true}
      Autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

   
      modules={[Navigation]} 
      
      className="mySwiper">
        {
          bannerImage?.map (image => 
          
            <SwiperSlide  key = {image.id} className = "w-full max-h-[700px]">
              <Image className = "w-full h-full" alt="slider image" src = {IMAGE_URL + image?.image} width = {500} height ={500}></Image>
            </SwiperSlide>
          ) 
        }

    </Swiper>

      // <Carousel className={Style.carousel} activeIndex={index} onSelect={handleSelect}>
      //   {bannerImage?.map((slide) => (
      //     <Carousel.Item key={slide.id} className={Style.carouselItem}>
      //     <div className={Style.overlay}></div>
      //     <Image src={IMAGE_URL + slide?.image} className={`${Style.carouselImg}`} alt="slider image" width ={500} height ={500} />
      //     <Carousel.Caption className={Style.carouselCaption}>
      //       <h3 data-aos="fade-right" className={Style.title}>{slide?.title}</h3>
      //     </Carousel.Caption>
      //   </Carousel.Item>
        
      //   ))}
      // </Carousel>
    )
  };

  export default Banner;
  