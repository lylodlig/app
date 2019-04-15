import React, {useState, useEffect} from 'react'
import {Button} from "antd";


function List() {
    let [name, setName] = useState("Name")

    function login() {
        console.log("珍珍是个傻逼:" + name)
    }

    useEffect(() => {
        console.log("effect")
    });

    return (
        <div>
            <h1>水果健康大概看了大家</h1>
            <Button type="primary" onClick={login}>测试股</Button>
        </div>
    )
}

export default List