import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";
import Login from "./pages/login/Login"
import List from "./pages/home/List"

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/home" component={List}/>
                    </Switch>
                </BrowserRouter>
            </LocaleProvider>
        );
    }
}

export default App;
