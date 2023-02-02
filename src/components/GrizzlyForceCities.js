import React from 'react'
import img from '../assets/s6.png'
import learnMore from '../assets/learnMore.svg'

const GrizzlyForceCities = () => {
    return (
        <section className='for_section'>
            <div className='container'>
                <div className='section s6'>
                    <div className='section_left s6'><img src={img} alt="image" /></div>
                    <div className='section_right s6'>
                        <p className='section_indicater indicater'>Grizzly Force Cities</p>
                        <h2 className='section_title title s6' >Serving <span> the Greater Vancouver, Victoria, Okanagan, Calgary & Toronto</span> areas</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrizzlyForceCities