import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./pages/login/Login"
import List from "./pages/home/List"

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={List}/>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
