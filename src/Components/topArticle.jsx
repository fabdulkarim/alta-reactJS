import React, { Component } from "react";

// import TopArticle from "../assets/json/topArticle.json"

class ComponentTopArticle extends Component {
    render() {
        // const TopArticle = this.props.topArt
        console.log(this.props.topArt);

        return (
            <div className="top-article-wrapper">
                <div className="row d-flex">
                    <div className="col-md-6 text-left">BERITA TERKINI</div>
                    <div className="col-md-6 text-right" onClick={() => this.props.reload("general")}>lihat semua</div>
                </div>
                {
                    this.props.isLoading ? <div className="load-icon fa-3x text-center"><i className="fa fa-spinner fa-pulse"></i></div> :
                    this.props.topArt.map((item, index) => (
                        <div className="top-article-item">
                            <button className="col-md-1 btn btn-danger text-left disabled" >#{index +1}</button>
                            <div className="col-md-12 text text-left">{item.title}</div>
                        </div>
                    ))
                }
            </div>
            
        )
    }
}

export default ComponentTopArticle;