import React from 'react'
import goto from '../assets/goto.svg'

const LookingFor = () => {
    return (
        <section className='looking_section'>
            <div className="container">
                <div className='section'>
                    <div className='looking_button section_left'>
                        <h2>Looking for additional help?</h2>
                        <a href="#"><span>Find Workers</span> <img src={goto} alt="" /></a>
                    </div>
                    <div className='looking_button section_right'>
                        <h2>Looking for extra cash?</h2>
                        <a href="#"><span>Find a Job</span> <img src={goto} alt="" /></a>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default LookingFor