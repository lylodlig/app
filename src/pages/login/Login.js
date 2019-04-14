import React, {useState} from 'react'
import {Button} from "antd";
import {Route} from "react-router-dom"


function Login() {
    let [name, setName] = useState("Name")

    function login() {
        console.log("珍珍是个傻逼:" + name)
    }

    return (
        <div>
            <Button type="primary" onClick={login}>珍珍是个傻逼</Button>

        </div>

    )
}

export default Login