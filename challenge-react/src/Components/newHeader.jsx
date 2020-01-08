import React, { Component } from "react";
import Logo from "../logo.svg"

import { Link, withRouter } from 'react-router-dom'

//using unistore
import { connect } from "unistore/react";
import { actions } from "../store";
// import { store } from "../store";

class NewHeader extends Component {
    signOut () {        
        this.props.handleInput({"key":"is_login","value":false});
        this.props.history.push("/");
    }
    render () {
        console.log(this.props)
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
                                        this.props.is_query === true 
                                            ? <li onClick={()=>this.props.int("technology")}>Teknologi</li>
                                            : <li><Link to="/category/technology">Teknologi</Link></li>
                                    }
                                    {
                                        this.props.is_query === true 
                                            ? <li onClick={()=>this.props.int("sports")}>Olahraga</li>
                                            : <li><Link to="/category/sports">Olahraga</Link></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-md-6 align-items-center">
                                <input className="form-control" type="text" name="search" placeholder="search" onChange={this.props.lakukanPencarian} value={this.props.sementara}/>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav--list d-flex align-self-center list-unstyled">
                                    {
                                        this.props.is_login ? <li onClick={() => this.signOut()}>Keluar</li> : <li><Link to="/signin">Masuk</Link></li> 
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

export default connect("is_login,is_query", actions)(withRouter(NewHeader));