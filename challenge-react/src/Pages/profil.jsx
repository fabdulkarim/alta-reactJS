import React, { Component } from "react";
import { Redirect } from "react-router-dom"
//using newHeader
import NewHeader from "../Components/newHeader";

class PageProfile extends Component {
    state = {
        fullName:localStorage.getItem("Nama Lengkap"),
        groupNumber:localStorage.getItem("Nomor di Grup"),
        photoUrl:localStorage.getItem("Foto Mbaknya"),
        isLogin:localStorage.getItem("Is Login")
    }
    
    render () {
        if (this.state.isLogin === null) {
            return <Redirect to={{ pathname:"/signin" }} />;
        } else {
            return (
                <React.Fragment>
                    <div className="body-kabar">
                        <NewHeader {...this.props} />
                        <div className="container bodynew d-flex">
                            <div className="col-md-4">
                                <div className="load-icon--home fa-3x text-center"><i className="fa fa-cog fa-spin"></i></div>
                            </div>
                            <div className="col-md-8">
                                <form className="form-thingy--kotak">
                                    <div className="form-group">
                                        Nama Lengkap: {this.state.fullName}
                                    </div>
                                    <div className="form-group">
                                        Nomor Urut di Grup: {this.state.groupNumber}
                                    </div>
                                    <div className="form-group text-center">
                                        <img src={this.state.photoUrl} alt="mbak cantik" style={{maxHeight: "300px"}} />
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

export default PageProfile;