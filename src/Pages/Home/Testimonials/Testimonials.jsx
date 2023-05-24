import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className=''>
            <SectionTitle
               subHeading="What our client say"
               heading="Testimonials"
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide
               key={review._id}
               
            >
                <div className='m-24 flex flex-col items-center '>

                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

                    <p className='my-4'>{review.details}</p>
                <h3 className='text-2xl text-orange-400 my-2'>{review.name}</h3>
                </div>
            </SwiperSlide>
            )
        }
      </Swiper>
        </section>
    );
};

export default Testimonials;