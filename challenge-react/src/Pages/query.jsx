import React, { Component } from "react";
import axios from "axios"

import ComponentListArticle from "../Components/listArticle"
import NewHeader from "../Components/newHeader";


//using unistore
import { connect } from "unistore/react"
import { withRouter } from "react-router-dom"
import { actions } from "../store"


class PageQuery extends Component {

    handleChange = async e => {
        let value = e.target.value;
        this.setState({ search: value, mainList: this.state.mainList, mainLoading: false, nowTime: await new Date() });
        if (this.state.search.length > 2) {
            this.reload(this.state.search)
        }
    }

    componentDidMount = async () => {
        let cat = this.props.match.params.cat;
        this.props.handleInput({"key":"is_query","value":true});
        await this.props.reload(cat);
    }

    //handle perpindahan kategori di dalam query, terdiri dari dua part
    //ganti url di atas, dan reload berdasarkan urlnya
    internalRoute = async e => {
        let cat = e
        this.props.history.replace("/category/" + cat)     
        await this.props.reload(cat)
    }

    render () {
        return (
            <React.Fragment>
                <div className="body-kabar">
                    <NewHeader lakukanPencarian={event => this.handleChange(event)} sementara={this.props.search} int={e => this.internalRoute(e)} />
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
export default connect("main_list,main_loading,now_time,search",actions)(withRouter(PageQuery));
// export default PageQuery;