import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom"
//using newHeader
import NewHeader from "../Components/newHeader";

//using unistore
import { connect } from "unistore/react"
// this should be a static page, no?
// import { action } from "../store" 

class PageProfile extends Component {   
    render () {
        if (this.props.is_login !== true) {
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
                                        Nama Lengkap: {this.props.full_name}
                                    </div>
                                    {/* <div className="form-group">
                                        Nomor Urut di Grup: {this.state.groupNumber}
                                    </div> */}
                                    <div className="form-group text-center">
                                        <img src={this.props.url_to_image} alt="mbak cantik" style={{maxHeight: "300px"}} />
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

export default connect("is_login, full_name, url_to_image")(withRouter(PageProfile));