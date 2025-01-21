import React from "react";
import "../Styles/Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <section className="footer-content">
                <section className="contact-info">
                    <div className="contact">
                        <img src="Images/Map.png" alt="https://citly.me/vNcdK" />
                        <a href="" target="_blank">
                            21 ladprao Street Bangkok, Thailand
                        </a>
                    </div>

                    <div className="contact">
                        <img src="Images/Phone.png" alt="" />
                        <a href="tel:123-456-7890">123-456-7890</a>
                    </div>
                    <div className="contact">
                        <img src="Images/Email.png" alt="" />
                        <a href="mailto:NongToy@gmail.com">NongToy@gmail.com</a>
                    </div>
                </section>

                <section className="about">
                    <p className="text1">About the company</p>
                    <p className="text2">
                        NongToy is your go-to platform for discovering unique art toys and
                        collectibles. We bring together a diverse range of designs from top
                        brands and talented creators, offering a personalized and engaging
                        experience for collectors and enthusiasts alike.
                    </p>
                    <p className="social">
                        <img src="Images/Facebook.png" alt="" />
                        <img src="Images/Instagram.png" alt="" />
                        <img src="Images/Twitter.png" alt="" />
                    </p>
                </section>
            </section>
        </div>
    );
};

export default Footer;
