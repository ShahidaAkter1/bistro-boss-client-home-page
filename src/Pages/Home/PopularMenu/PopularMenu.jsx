import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu,setMenu] =useState([]);
    useEffect( () =>{
        fetch(`menu.json`)
        .then(res =>res.json())
        .then(data =>{
            const popularItems= data.filter(item => item.category === 'popular');
             setMenu(popularItems)})
    },[])

    return (
        <section className='mb-12'>
            <SectionTitle      
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=> <MenuItem 
                      key={menu._id}
                      item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 my-4 ml-96 text-orange-800 font-bold'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;