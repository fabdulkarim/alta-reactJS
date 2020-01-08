import React, { Component } from "react";

import ComponentHeader from "../Components/header"
import ComponentFooter from "../Components/footer"

import photo from "../assets/img/asdf.png"

class PageAbout extends Component {
    render() {
        return (
            <div className="bodynew">
                <header>
                    <ComponentHeader />
                </header>
                {/* <!-- aboutme text --> */}
                <div className="about-back">
                    <div className= "container">
                        <div className="wrap-aboutme">
                            <div className="aboutme-block">
                                <div className="aboutme-text">
                                    ABOUT ME.
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <!-- EOF anoutme text --> */}
                </div> 
                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-wrap-content-left">
                                    <div className="about-wrap-versetile">
                                        <div className="versetile-text">
                                            Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.
                                        </div>
                                    </div>
                                    <div className="wrap-education-content">
                                        <div className="education-text">
                                            Education
                                        </div>
                                        <div className="education-wrap">
                                            <ul className="education__list">
                                                <li><span className="year">2014</span><br/>
                                                    <span className="degree">DIPLOMA</span><br/>
                                                    <span className="major">Computer Engineering - University of Chicago</span>
                                                </li>
                                                <li><span className="year">2014</span><br/>
                                                    <span className="degree">BACHELOR DEGREE</span><br/>
                                                    <span className="major">BS Computer Engineering - University of Chicago</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="heresfew-tableset">
                                        <div className="heresfew-text">
                                            Here’s few technologies I’ve been working with recently :
                                        </div>
                                        <div className="tableset-value">
                                            <table>
                                                <tr>
                                                    <td>HTML & CSS</td>
                                                    <td>Serverless</td>
                                                    <td>Scrum</td>
                                                </tr>
                                                <tr>
                                                    <td>Programming</td>
                                                    <td>Restful API</td>
                                                    <td>Test-Driven Dev</td>
                                                </tr>
                                                <tr>
                                                    <td>Database</td>
                                                    <td>Javascript</td>
                                                    <td>Software Testing</td>
                                                </tr>
                                                <tr>
                                                    <td>Git & Github</td>
                                                    <td>Single Page App</td>
                                                    <td>UX/UI Designer</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                            {/* <!-- picture right --> */}
                                <div className="about-wrap-picture-right">
                                    {/* <!-- <img className="dot-pict" src="assets/img/img-dot.png" width="80" height="80"/>
                                    <img className="rect-pict" src="assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" width="290" height="280"/> --> */}
                                    <img src={photo} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            {/* <!------------------------------------------- footer -------------------------------------------> */}
                <footer>
                    <ComponentFooter />
            {/* <!------------------------------------------- EOF footer -------------------------------------------> */}

                </footer>    
            {/* <!------------------------------------------- EOF body ------------------------------------------->
            assets/js/bootstrap.min.js
                <!-- Bootstrap JS --> */}
                <link rel="stylesheet" href="" />
            </div>
        )
    }
}

export default PageAbout;

