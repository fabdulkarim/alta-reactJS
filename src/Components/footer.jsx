import React, { Component } from "react";

import LogoAlta from "../assets/img/logo-ALTA-v2.png"

import IconFB from "../assets/img/ic_fb.png"
import IconTwitter from "../assets/img/ic-twitter.png"
import IconIG from "../assets/img/ic-instagram.png"
import IconLI from "../assets/img/ic-linkedin.png"
 
class ComponentFooter extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row footer-class">
                    <div class="col-sm-4 align-items-center d-flex justify-content-center">
                        <div class="footer-image-alterra">
                            <img src={LogoAlta} />
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex align-items-center justify-content-center">
                        <div class="footer-middle">
                            <div class="wrap-footer--socmed">
                                <span>
                                    Social Media
                                </span>
                                <ul class="list-unstyled">
                                    <li><a href=""><img src={IconFB} /></a></li>
                                    <li><a href=""><img src={IconTwitter} /></a></li>
                                    <li><a href=""><img src={IconIG}/></a></li>
                                    <li><a href=""><img src={IconLI}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 align-items-center justify-content-center d-flex">
                        <div class="footer-copyright">
                            <span>Copyright &copy 2019 Alterra</span>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentFooter;