import React from "react";
import "../Styles/Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <section className="footer-content">
                <div>
                    <a href="" target="_blank" >21 ladprao Street Bangkok, Thailand</a>
                    <a href="tel:123-456-7890">123-456-7890</a>
                    <a href="mailto:NongToy@gmail.com">NongToy@gmail.com</a>
                </div>
                <div>
                    <p className="text1">About the company</p>
                    <p className="text2">NongToy is your go-to platform for discovering unique art toys and collectibles. <br />We bring together a diverse range of designs from top brands and talented creators, <br />offering a personalized and engaging experience for collectors and enthusiasts alike.</p>
                </div>
            </section>
            <p className="textcopy">&copy; 2025 NongToy. All rights reserved.</p>
        </div>
    );
};

export default Footer;