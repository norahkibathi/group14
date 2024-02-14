import React from 'react';
import './about.css'; 


function About() {
    return (
        <div className='about-container'>
            <div className='about-image'>
            <img src ="" alt="profile" />
                <div className='about-text'>
                    <h1>About Us</h1>
                </div>
            </div>
                       <div className='about-history'>
                <h1>About the Founders</h1>
                            <p>
                    We started our journey in 2010 with a passion for delivering top-quality jewelry to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis.
                </p>
                <div className='about-secondimage'>
                <img src='https://www.pinterest.com/pin/155303887805385288/' alt='Second Image'></img> 
                          </div>
                          </div>
            <div className='about-historyus'>
                <h2>Our History</h2>
                
                <ul>
                    <li>
                        <strong>2010 - Established</strong>
                        <p>
                            Our journey began in 2010 with a passion for delivering top-quality jewelry to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet.
                        </p>
                    </li>
                    <li>
                        <strong>2015 - Expansion</strong>
                        <p>
                            In 2015, we expanded our operations to reach a wider audience, providing even more customers with access to our exquisite jewelry collections.
                        </p>
                    </li>
                    <li>
                        <strong>2018 - New Designs</strong>
                        <p>
                            2018 marked the introduction of new designs and innovations, as we continually strive to bring fresh and captivating pieces to our customers.
                        </p>
                    </li>
                    <li>
                        <strong>2020 - Online Presence</strong>
                        <p>
                            Recognizing the importance of online accessibility, we launched our online store in 2020, offering customers the convenience of browsing and purchasing from the comfort of their homes.
                        </p>
                    </li>
                    <li>
                        <strong>2021 - Customer Satisfaction</strong>
                        <p>
                            In 2021, we reaffirmed our commitment to customer satisfaction by enhancing our customer support services and implementing feedback-driven improvements to our products and shopping experience.
                        </p>
                    </li>
                    <li>
                        <strong>2023 - Continued Growth</strong>
                        <p>
                            As we look towards the future, we remain dedicated to our mission of delivering exceptional quality and service. With your continued support, we aim to further expand our offerings and reach new heights in the world of jewelry.
                        </p>
                    </li>
                </ul>
            </div>
            </div>
           );
}

export default About;
