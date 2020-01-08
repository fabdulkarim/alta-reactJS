import React, { Component } from "react";
import mhunsplash from "../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"

import ComponentHeader from "../Components/header"

class PageHome extends Component {
    render() {
        return (
            <div className="bodynew">
                <header>
                    <ComponentHeader />
                </header>
            {/* <!------------------------------------------- EOF header ------------------------------------------->


            <!------------------------------------------- section -------------------------------------------> */}
                <section>
                    <div className="container">
                        <div className="home-content">
                            <div className="home-content--left d-flex justify-content-center">
                                <div className="home-content--left__photo">
                                    <img src={mhunsplash} />
                                </div>
                            </div>
                            <div className="home-content--right">
                                    <div className="home-content--right__bio">
                                        <div className="wrap-home-content--right">
                                            <div className="mynameis">Hi, My name is</div>
                                            <div className="annesullivian">Anne Sullivian</div>
                                            <div className="ibuildthings">I build things for web</div>
                                            <div className="home-button__getintouch">
                                                <a href="contact.html"><button type="button" className="home-btn btn-success">Get In Touch</button></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!------------------------------------------- EOF body ------------------------------------------->
                assets/js/bootstrap.min.js
                <!-- Bootstrap JS --> */}
                <link rel="stylesheet" href="" />
            </div>
        )
    }
}

export default PageHome;