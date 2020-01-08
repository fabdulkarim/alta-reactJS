import React, { Component } from "react";
import axios from "axios"

import ComponentListArticle from "../Components/listArticle"
import NewHeader from "../Components/newHeader";

//using unistore/global state
import { connect } from "unistore/react"
import { withRouter } from "react-router-dom"
import { actions } from "../store"

class PageRumah extends Component {

    componentDidMount = () => {
        this.props.reload("general")
    }

    render () {
        return (
            <React.Fragment>
                <div className="body-kabar">
                    <NewHeader />
                    <div className="container bodynew d-flex">
                        <div className="col-md-4">
                            <div className="load-icon--home fa-3x text-center"><i className="fa fa-cog fa-spin"></i></div>
                        </div>
                        <div className="col-md-8">
                            <ComponentListArticle listArt={this.props.main_list} loading={this.props.main_loading} nowTime={this.props.now_time}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("main_list,main_loading,now_time",actions)(withRouter(PageRumah));