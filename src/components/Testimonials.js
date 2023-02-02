import React from 'react'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className="container">
                <div className='testimonials_top'>
                    <img src="images/IconDual.svg" alt="hart" />
                    <p className='indicater'>TESTIMONIALS</p>
                    <h2 className='title'>See what our <span>customers</span> are saying</h2>
                </div>
                <div className='testimonials_center'>
                    <div className='box'>
                        <div className="companie_logo">
                            <img src="images/image6.png" alt="logo" />
                        </div>
                        <div className="content">
                            <p className='testimonials_dec'>Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!</p>
                            <div className='auther'>
                                <h3>Tony Hartzenberg</h3>
                                <p>CEO, Sugarplum</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='customers'>
                    <p className='indicater'>Featured Customers</p>
                    <div className='companies'>
                        <img src="images/image1.png" alt="1" />
                        <img src="images/image2.png" alt="1" />
                        <img src="images/image3.png" alt="1" />
                        <img src="images/image4.png" alt="1" />
                        <img src="images/image5.png" alt="1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials