import React, { Component } from "react";
import Logo from "../logo.svg"

import { Link } from 'react-router-dom'

class NewHeader extends Component {
    signOut () {        
        localStorage.removeItem("Is Login");
        this.props.history.push("/");
    }
    render () {
        return (
            <div className="header-lama container-fluid">
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
                                <ul className="nav--list d-flex align-items-center list-unstyled">
                                    <li><Link to="/">Beranda</Link></li>
                                    <li><Link to="/profile">Profil</Link></li>
                                    {
                                        this.props.isQuery !== undefined 
                                            ? <li onClick={this.props.int("technology")}>Teknologi</li>
                                            : <li><Link to="/category/technology">Teknologi</Link></li>
                                    }
                                    {
                                        this.props.isQuery !== undefined 
                                            ? <li onClick={this.props.int("entertaintment")}>Hiburan</li>
                                            : <li><Link to="/category/entertaintment">Hiburan</Link></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-md-6 align-items-center">
                                <input className="form-control" type="text" placeholder="search" onChange={this.props.lakukanPencarian} value={this.props.sementara}/>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav--list d-flex align-self-center list-unstyled">
                                    {
                                        (localStorage.getItem("Is Login") == null) ? <li><Link to="/signin">Masuk</Link></li> : <li onClick={() => this.signOut()}>Keluar</li>
                                    }   
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

export default NewHeader;