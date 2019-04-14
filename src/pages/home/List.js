import React, {useState} from 'react'
import {Button} from "antd";


function List() {
    let [name, setName] = useState("Name")

    function login() {
        console.log("珍珍是个傻逼:" + name)
    }

    return (
        <Button type="primary" onClick={login}>珍珍是个傻逼</Button>
    )
}

export default List