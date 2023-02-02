import React from 'react'

const Banner = () => {
    return (
        <div className='container'>
            <div className='banner'>
                <div className='banner_left'>
                    <h2>
                        modern temp
                        <span>
                            Labour <br />
                        </span>
                        <span>
                            solutions
                        </span>
                    </h2>
                    <div className='banner_btn'>
                        <button className='btn_black'> Find Workers </button>
                        <button className='btn_green'> Find a Job </button>
                    </div>
                </div>
                <div className='banner_right'>
                    <picture>
                        <source media="(max-width:768px)" srcset="/images/mobile_banner.svg" />
                        <img src="/images/banner.svg" alt="Flowers" />
                    </picture>
                </div>

            </div>
        </div>
    )
}

export default Banner