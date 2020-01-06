import React, { Component } from "react";

import ListArticle from "../assets/json/listArticle.json"

class ComponentListArticle extends Component {
    render() {
        return (
            <div className="list-article-wrapper">
                {
                    ListArticle.map( (item) => (
                        <div className="list-article-item">
                            <div className="article-item--image">
                                <img src={item.LinkPhoto} alt="" width="100%"/>
                            </div>
                            <div className="className">{item.Judul}</div>
                            <div className="className">{item.Teks}</div>
                            <div className="className">{item.UpdatedAt}</div>
                            <div className="row d-flex">
                                <div className="col-md-4">
                                    <i className="fa fa-heart-o"></i>
                                </div>
                                <div className="col-md-4">
                                    <i className="fa fa-share-alt"></i>
                                </div>
                                <div className="col-md-4">
                                    <i className="fa fa-thumbs-o-down"></i>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ComponentListArticle;