import React, { Component } from "react";
import axios from "axios"

import ComponentHeaderKabar from "../Components/headerKabar"
import ComponentTopArticle from "../Components/topArticle"
import ComponentListArticle from "../Components/listArticle"

// USAGE FOR AXIOS
const apiKey = "485a6bc08eca4546a902aa3f87808b0c";
const baseUrl = "https://newsapi.org/v2";
const urlCombined = baseUrl + "/top-headlines?country=id&apiKey=" + apiKey;
// const newUrl = baseUrl + "/top-headlines?country=id"
class PageKabar extends Component {
    state = {
        listNews: [],
        isLoading: true,
        mainList: [],
        mainLoading: true,
        nowTime: new Date()
    };

    filterOut = () => {
        const self = this;
        const scoop = this.state.mainList.filter(function(item){
            return item.urlToImage != null
        })
        self.setState({ mainList: scoop })
    }

    reload = (category, ...restArgument) => {
        const self = this;
        // e.preventDefult();
        let newUrl
        (restArgument.length === 0) ? newUrl = urlCombined + "&category=" + category : newUrl = urlCombined + "&search=" + restArgument[0]
        axios.get(urlCombined + "&pageSize=5")
            .then(function (response) {
                self.setState({ listNews: response.data.articles, isLoading: false });
            })
            .catch()
        axios.get(newUrl + "&pageSize=10")
            .then(function (response) {
                self.setState({ mainList: response.data.articles, mainLoading: false});
            })
            .catch()
        self.setState({ nowTime: new Date() })
        self.filterOut()
    }

    componentDidMount = () => {
        this.reload("general")
    }
    render () {
        console.log(this.state.listNews)
        return (
            <div className="body-kabar">
                <header>
                    <ComponentHeaderKabar reload={this.reload}/>
                </header>
                <div className="container bodynew d-flex">
                    <div className="col-md-4">
                        <ComponentTopArticle topArt={this.state.listNews} isLoading={this.state.isLoading} reload={this.reload}/>                   
                    </div>
                    <div className="col-md-8">
                        <ComponentListArticle listArt={this.state.mainList} loading={this.state.mainLoading} nowTime={this.state.nowTime}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageKabar;