import React from 'react'
import {Route} from 'react-router-dom'
import {Button, Card} from "antd";
import history from '../../common/history'
import './login.css'
import Test from './Test'


function Login(props) {
    console.log("login")
    console.log(props)

    function login() {
        props.history.push({pathname: '/home/:test', query: {name: "sdfhk"}})
    }

    return (
        <div className="body">
            <div className="content shadow">
                <Button className="btn" onClick={login}>143</Button>
            </div>
        </div>
    )
}

export default Login