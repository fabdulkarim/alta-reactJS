import React, { Component } from "react";

import ListArticle from "../assets/json/listArticle.json"

let stringTime;
const calculateDifference = (now, then) => {
    const diff = Number(now.getTime() - then.getTime())
        if (diff < (60 * 1000)) {
            stringTime = "just now";
        } else if (diff < (3600 * 1000)) {
            stringTime = " " + Math.floor(diff / (60 * 1000)) + " minutes ago"
        } else if (diff < (24 * 3600 * 1000)) {
            stringTime = " " + Math.floor(diff / (3600 * 1000)) + " hours ago"
        } else if (diff < (7 * 24 * 3600 * 1000)) {
            stringTime = " " + Math.floor(diff / (24 * 3600 * 1000)) + " days ago"
        } else {
            stringTime = " " + Math.floor(diff / (7 * 24 * 3600 * 1000)) + " weeks ago"
        }
    // console.log(stringTime)
}
class ComponentListArticle extends Component {
    
    render() {
        return (
            <div className="list-article-wrapper">
                {
                    this.props.listArt.map( (item) => (
                        <div className="list-article-item">
                            <div className="article-item--image">
                                <img src={item.urlToImage} alt="" width="100%"/>
                            </div>
                            <h3 className="article-item-title">{item.title}</h3>
                            <div className="article-item-text">{item.description}</div>
                            {
                                calculateDifference(this.props.nowTime, new Date(item.publishedAt))
                            }
                            <div className="article-item-updated">Published {stringTime}</div>
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
