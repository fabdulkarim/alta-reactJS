import React, { Component } from "react";

import ComponentHeaderKabar from "../Components/headerKabar"
import ComponentTopArticle from "../Components/topArticle"
import ComponentListArticle from "../Components/listArticle"

class PageKabar extends Component {
    render () {
        return (
            <div className="body-kabar">
                <header>
                    <ComponentHeaderKabar />
                </header>
                <div className="container bodynew d-flex">
                    <div className="col-md-4">
                        <ComponentTopArticle />
                    </div>
                    <div className="col-md-8">
                        <ComponentListArticle />
                    </div>
                </div>
            </div>
        )
    }
}

export default PageKabar;