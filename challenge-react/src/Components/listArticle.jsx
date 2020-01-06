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
                            <h3 className="article-item-title">{item.Judul}</h3>
                            <div className="article-item-text">{item.Teks}</div>
                            <div className="article-item-updated">{item.UpdatedAt}</div>
                            <div className="icon-listing row d-fle">
                                <div className="col-md-4 text-center">
                                    <i className="fa fa-heart-o"></i>
                                </div>
                                <div className="col-md-4 text-center">
                                    <i className="fa fa-share-alt"></i>
                                </div>
                                <div className="col-md-4 text-center">
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