import React, {useState} from 'react'
import {Button} from "antd";
import {Route} from "react-router-dom"
import history from '../../common/history'


function Login() {
    let [name, setName] = useState("Name")

    function login() {
        console.log("珍珍是个傻逼:" + name)
        history.push('/home')
        history.go()
    }

    return (
        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </div>

    )
}

export default Login