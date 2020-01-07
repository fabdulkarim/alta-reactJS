import React, { Component } from "react";
import axios from "axios"

import ComponentListArticle from "../Components/listArticle"
import NewHeader from "../Components/newHeader";

// USAGE FOR AXIOS
const apiKey = "485a6bc08eca4546a902aa3f87808b0c";
const baseUrl = "https://newsapi.org/v2";
const urlCombined = baseUrl + "/top-headlines?country=id&apiKey=" + apiKey;

class PageRumah extends Component {
    state = {
        mainList: [],
        mainLoading: true,
        nowTime: new Date()
    };

    reload = (category, ...restArgument) => {
        const self = this;
        let newUrl
        (restArgument.length === 0) ? newUrl = urlCombined + "&category=" + category : newUrl = urlCombined + "&search=" + restArgument[0]
        axios.get(newUrl + "&pageSize=10")
            .then(function (response) {
                self.setState({ mainList: response.data.articles, mainLoading: false});
            })
            .catch()
        self.setState({ nowTime: new Date() })
    }

    componentDidMount = () => {
        this.reload("general")
    }

    render () {
        console.log(this.state.listNews)
        return (
            <React.Fragment>
                <div className="body-kabar">
                    <NewHeader />
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

export default PageRumah;