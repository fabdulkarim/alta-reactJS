import React, { Component } from "react";
import LogoAlta from "../assets/img/logo-ALTA.png"

class ComponentHeader extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="header-logo text-center">
                            <img src={LogoAlta} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        {/* <!-- none  --> */}
                    </div>
                    <div className="col-md-6">
                        <div className="header--nav">
                            <ul className="header--nav__list list-unstyled">
                                <li>
                                    <a className="home-active" href="home.html">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="experience.html">Experience</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentHeader;