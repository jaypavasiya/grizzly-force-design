import React from 'react'
import img from '../assets/s3.png'
import learnMore from '../assets/learnMore.svg'

const ForEmployers = () => {
    return (
        <section className='for_section'>
            <div className='container'>
                <div className='section'>
                    <div className='section_right'>
                        <p className='section_indicater indicater'>For Employers</p>
                        <h2 className='section_title title' ><span>Workforce</span> At Your Fingertips </h2>
                        <ul className='section_list'>
                            <li>Easy to use mobile & web platform</li>
                            <li><strong>45,000+</strong> workers</li>
                            <li>Realtime <strong>tracking</strong></li>
                            <li><strong>95%</strong> fulfillment rate</li>
                            <li>Preferred worker list</li>
                        </ul>
                        <div className='section_learnmore'>
                            <a href="">Learn More <img src={learnMore} alt="-" /></a>
                        </div>
                    </div>
                    <div className='section_left'><img src={img} alt="image" /></div>
                </div>
            </div>
        </section>
    )
}

export default ForEmployers