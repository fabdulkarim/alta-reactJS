import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import NewHeader from "../Components/newHeader";

//using axios for validasi login mockszzz
import axios from "axios";

class PageSignIn extends Component {

    state = { username:"", password: ""};

    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    goSign = () => {
        const { username, password } = this.state
        const data = {
            username: username,
            password: data
        }
        const self = this;
        axios
            .post("https://reactroutingmock.free.beeceptor.com/signin", data)
            .then(function(response) {
                console.log(response);
                localStorage.setItem("Nama Lengkap", response.data.nama_lengkap);
                localStorage.setItem("Nomor di Grup", response.data.nomor_grup);
                localStorage.setItem("Foto Mbaknya", response.data.url_foto);
                localStorage.setItem("Is Login", true);
                self.props.history.push("/profile");
            });
    };

    render () {
        // console.log(this.state.listNews)
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
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama random" name="username" onChange={e => this.changeInput(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={e => this.changeInput(e)} />
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

export default withRouter(PageSignIn);