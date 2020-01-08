import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import NewHeader from "../Components/newHeader";

//using axios for validasi login mockszzz
import axios from "axios";

//using unistore
import { connect } from "unistore/react"
import { actions } from "../store"

class PageSignIn extends Component {
    goSign = () => {
        // const { username, password } = this.state
        const data = {
            username: this.props.username,
            password: this.props.password
        }
        const self = this;
        axios
            .post("https://reactroutingmock.free.beeceptor.com/signin", data)
            .then(function(response) {
                console.log(response);
                self.props.handleInput({"key":"full_name","value":response.data.nama_lengkap});
                self.props.handleInput({"key":"url_to_image","value":response.data.url_foto});
                self.props.handleInput({"key":"is_login","value":true});
                self.props.history.push("/profile");
            });
    };

    render () {
        console.log(this.props)
        if (this.props.is_login === true) {
            return <Redirect to={{ pathname:"/profile" }} />;
        } else {
            return (
                <React.Fragment>
                <div className="body-kabar">
                    <NewHeader />
                    <div className="container bodynew d-flex">
                        <div className="col-md-4">
                            <div className="load-icon--home fa-3x text-center"><i className="fa fa-cog fa-spin"></i></div>
                        </div>
                        <div className="col-md-8">
                            <form className="form-thingy--kotak" onSubmit={e => e.preventDefault()} >
                                <div className="form-group">
                                    <label for="exampleInputEmail1">username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama random" name="username" onChange={e => this.props.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={e => this.props.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <button onClick={e => this.goSign()} type="submit" className="btn btn-primary">Masuk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            )
        }
    }
}

export default connect("username, password, is_login", actions)(withRouter(PageSignIn));