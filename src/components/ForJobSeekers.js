import React from 'react'
import img from '../assets/s5.png'
import learnMore from '../assets/learnMore.svg'

const ForJobSeekers = () => {
    return (
        <section className='for_section'>
            <div className='container'>
                <div className='section seekers'>
                    <div className='section_right s5'>
                        <p className='section_indicater indicater'>For Job Seekers</p>
                        <h2 className='section_title title' >Connecting You With <span>Flexible Work</span> </h2>
                        <ul className='section_list'>
                            <li>User friendly mobile app</li>
                            <li>New jobs <strong>everyday</strong>  </li>
                            <li>Payout in <strong>24hrs</strong></li>
                            <li>Employment benefits</li>
                            <li>Temporary & permanent positions</li>
                        </ul>
                        <div className='section_learnmore'>
                            <a href="">Learn More <img src={learnMore} alt="-" /></a>
                        </div>
                    </div>
                    <div className='section_left s5'><img src={img} alt="image" /></div>
                </div>
            </div>
        </section>
    )
}

export default ForJobSeekers