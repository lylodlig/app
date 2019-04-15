import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login"
import List from "./pages/home/List"
import Test from "./pages/login/Test";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/home" component={List}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
