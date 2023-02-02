import React from 'react'
import Slider from 'react-slick';

const Industries=()=> {


    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "60px",
                }
            }
        ]
    };

    return (

        <section className="industries">
            <div className="container">
                <div className="main_title">
                    <p className="indicater" > We are serving in </p>
                    <h2 className='title'>
                        <span>How </span> on-demand staffing works
                    </h2>
                </div>
            </div>

            <div className="industries_slider">
                <div className="container">


                    <Slider {...settings}>
                        <div className="industries_item">
                            <div>
                                <img src="/images/item-1.png" />
                                <div className="content">
                                    <h3>
                                        Warehousing
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="industries_item">
                            <div>
                                <img src="/images/item-2.png" />
                                <div className="content">
                                    <h3>
                                        Manufacturing
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="industries_item">
                            <div>
                                <img src="/images/item-3.png" />
                                <div className="content">
                                    <h3>
                                        Food & Beverage
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="industries_item">
                            <div>
                                <img src="/images/item-4.png" />
                                <div className="content">
                                    <h3>
                                        Hospitality
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="industries_item">
                            <div>
                                <img src="/images/item-5.png" />
                                <div className="content">
                                    <h3>
                                        Restaurants
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="industries_item">
                            <div>
                                <img src="/images/item-6.png" />
                                <div className="content">
                                    <h3>
                                        Event Services
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Industries