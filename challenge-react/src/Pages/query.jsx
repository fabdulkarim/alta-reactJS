import React, { Component } from "react";
import axios from "axios"

import ComponentListArticle from "../Components/listArticle"
import NewHeader from "../Components/newHeader";

// USAGE FOR AXIOS
const apiKey = "485a6bc08eca4546a902aa3f87808b0c";
const baseUrl = "https://newsapi.org/v2";
const urlCombined = baseUrl + "/top-headlines?country=id&apiKey=" + apiKey;

class PageQuery extends Component {
    state = {
        mainList: [],
        mainLoading: true,
        nowTime: new Date(),
        search: null
    };

    reload = async (...restArgument) => {
        const category = this.props.match.params.cat
        const self = this;
        let newUrl;
        (this.state.search === null) ? newUrl = urlCombined + "&category=" + category : newUrl = urlCombined + "&search=" + this.state.search
        await axios.get(newUrl + "&pageSize=10")
            .then(function (response) {
                self.setState({ mainList: response.data.articles, mainLoading: false});
            })
            .catch()
        self.setState({ nowTime: new Date() })
    }

    handleChange = e => {
        let value = e.target.value
        this.setState({ search: value })
        (this.state.search.length > 2) && this.reload(this.state.search)
    }

    componentDidMount = () => {
        this.reload()
    }

    internalRoute = async e => {
        let cat = e
        await this.props.history.replace("/category/" + cat)
        this.reload()
    }

    render () {
        console.log(this.state.listNews)
        return (
            <React.Fragment>
                <div className="body-kabar">
                    <NewHeader lakukanPencarian={event => this.handleChange(event)} sementara={this.state.search} isQuery={true} int={e => this.internalRoute(e)} />
                    <div className="container bodynew d-flex">
                        <div className="col-md-4">
                            <div className="load-icon--home fa-3x text-center"><i className="fa fa-cog fa-spin"></i></div>
                        </div>
                        <div className="col-md-8">
                            <ComponentListArticle listArt={this.state.mainList} loading={this.state.mainLoading} nowTime={this.state.nowTime}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageQuery;