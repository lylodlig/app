import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./pages/login/Login"
import List from "./pages/home/List"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Login}/>
                <Route path="/home" component={List}/>
            </BrowserRouter>
        );
    }
}

export default App;
