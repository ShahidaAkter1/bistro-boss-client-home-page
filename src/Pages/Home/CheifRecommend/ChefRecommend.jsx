import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuRecommend from './MenuRecommend';

const ChefRecommend = () => {

    const [recommend,setRecommend]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data=>{
            const ChefRecommendITem=data.filter (menu => menu.category === "salad")
            setRecommend(ChefRecommendITem);
        })
    },[])

    return (
        <section>
            <SectionTitle
              subHeading="Should Try"
              heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-200 p-6'>
                    {
                        recommend.map(menu => <MenuRecommend
                          key={recommend._id}
                          menu={menu}
                        ></MenuRecommend>)
                    }
                </div>
        </section>
    );
};

export default ChefRecommend;