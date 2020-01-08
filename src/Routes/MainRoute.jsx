import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

//using unistore
import { store } from "../store"
import { Provider } from "unistore/react"

// import Page from "../Pages/something" 
import PageRumah from "../Pages/rumah"
import PageSignIn from "../Pages/signin"
import PageProfile from "../Pages/profil"
import PageQuery from "../Pages/query"

const MainRoute = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageRumah} />
                    <Route exact path="/signin" component={PageSignIn}/>
                    <Route exact path="/profile" component={PageProfile} />
                    <Route path="/category/:cat" component={PageQuery} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;