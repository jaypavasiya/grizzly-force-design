import React from 'react'

const Ondemad = () => {
    return (
        <section className='ondemand'>
            <div className='container'>
                <div className='ondemand_wrp'>
                    <h2 className='title'>
                        <span>How </span> on-demand staffing works
                    </h2>

                    <div className='ondemand_wrp_items'>
                        <ul>
                            <li>
                                <img src='/images/IconDual.png' alt='ondemand_image' />
                                <div className='content'>
                                    <label> step 1 </label>
                                    <h2> Quick Signup </h2>
                                    <p>
                                        Our Grizzly Force technology makes it easy to sign up in minutes
                                    </p>
                                </div>

                            </li>


                            <li>
                                <img src='/images/IconDual-1.png' alt='ondemand_image' />
                                <div className='content'>
                                    <label> step 2 </label>
                                    <h2> Post Jobs 24/7 </h2>
                                    <p>
                                        Use our mobile app or web platform from the office or on the go, any time of day
                                    </p>
                                </div>

                            </li>


                            <li>
                                <img src='/images/IconDual-2.png' alt='ondemand_image' />
                                <div className='content'>
                                    <label> step 3 </label>
                                    <h2> View Matches</h2>
                                    <p>
                                        With thousands of ready-to-go workers you can watch your jobs being filled in real time
                                    </p>
                                </div>

                            </li>


                            <li>
                                <img src='/images/IconDual-3.png' alt='ondemand_image' />
                                <div className='content'>
                                    <label> step 4 </label>
                                    <h2> We Do The Rest! </h2>
                                    <p>
                                        We take care of payroll, deductions and insurance
                                    </p>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ondemad