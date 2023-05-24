import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Featured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='featured-items bg-fixed text-white pt-8 my-20'>
            <SectionTitle
              subHeading="Check it out"
              heading="Featured Item"
            ></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 '>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p className='my-2'>Aug 20,2019</p>
                <p className='uppercase my-2'> Where can i get some?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sequi incidunt iure esse blanditiis aliquid quis minus similique, cupiditate nihil.</p>
                <button className='btn btn-outline border-0 border-b-4 my-4'>Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;