import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='for_newsletter'>
                <div className="container">
                    <div className='newsletter'>
                        <h2 className='newsletter_title title'>Subscribe to our <span>Newsletter</span></h2>
                        <p className='newsletter_dec'>Keep up with the Grizzly Force team!</p>
                        <div className="newsletter_email">
                            <div class="go-top">
                                <input class="input-edit" name="name" type="text" required />
                                <label class="lable-for-input">Email Address</label>
                                <label class="lable-for"></label>
                            </div>
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <p className="copyright">© 2022 Grizzly, Inc. All rights reserved</p>
                        <div className="social_icon">
                            <img src="images/facebook.svg" alt="" />
                            <img src="images/twitter.svg" alt="" />
                            <img src="images/instagram.svg" alt="" />
                            <img src="images/github.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <footer className='for_footer'>
                <div className="container">
                    <div className="footer">
                        <div className="footer_left">
                            <div className="footer_logo"><img src="images/logo.svg" alt="" /></div>
                            <p className='footer_dec'>Grizzly is a private virtual network that has unique features and has high security.</p>
                            <div className="store">
                                <div><img src="images/GP.svg" alt="" /></div>
                                <div><img src="images/AS.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="footer_right">
                            <div className="products">
                                <ul>

                                    <li>Product</li>
                                    <li>Download</li>
                                    <li>Pricing</li>
                                    <li>Locations</li>
                                    <li>Server</li>
                                    <li>Countries</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className='engage'>
                                <ul>
                                    <li>Engage</li>
                                    <li>Grizzling?</li>
                                    <li>FAQ</li>
                                    <li>Tutorials</li>
                                    <li>About Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>
                            <div className="money">
                                <ul>
                                    <li>Earn Money?</li>
                                    <li>Affiliate?</li>
                                    <li>Become Partner?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <p className="copyright">© 2022 Grizzly, Inc. All rights reserved</p>
                        <div className="social_icon">
                            <img src="images/facebook.svg" alt="" />
                            <img src="images/twitter.svg" alt="" />
                            <img src="images/instagram.svg" alt="" />
                            <img src="images/github.svg" alt="" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer