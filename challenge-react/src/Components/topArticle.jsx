import React, { Component } from "react";

import TopArticle from "../assets/json/topArticle.json"

class ComponentTopArticle extends Component {
    render() {
        return (
            <div className="top-article-wrapper">
                <div className="row d-flex">
                    <div className="col-md-6 text-left">BERITA TERKINI</div>
                    <div className="col-md-6 text-right">lihat semua</div>
                </div>
                {
                    TopArticle.map( (item) => (
                        <div className="top-article-item">
                            <button className="col-md-1 btn btn-danger text-left disabled" >{item.Nomor}</button>
                            <div className="col-md-12 text text-left">{item.Judul}</div>
                        </div>
                    ))
                }
            </div>
            
        )
    }
}

export default ComponentTopArticle;