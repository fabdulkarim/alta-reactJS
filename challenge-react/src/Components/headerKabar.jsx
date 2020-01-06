import React, { Component } from "react";
import Logo from "../logo.svg"

class ComponentHeaderKabar extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-md-5 d-flex align-items-center">
                                <div className="header-logo-2 text-center">
                                    <img src={Logo} alt=""/>
                                </div>
                                <div className="header-logo--text">
                                    KabarKabar
                                </div>
                            </div>
                            <div className="col-md-7 outer-nav d-flex align-items-center">
                            
                                <ul className="nav--list d-flex align-self-center list-unstyled">
                                    <li>Sepakbola</li>
                                    <li>Ekonomi</li>
                                    <li>Politik</li>
                                    <li>Hiburan</li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-md-6 align-items-center">
                                <form action="">
                                    <div className="input-group mb-4">
                                        <input type="search" placeholder="search" aria-describedby="button-addon5" className="form-control" />
                                        <div className="input-group-append">
                                            <button id="button-addon5" type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav--list d-flex align-self-center list-unstyled">
                                    <li>Masuk</li>
                                    <li>Daftar</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentHeaderKabar;