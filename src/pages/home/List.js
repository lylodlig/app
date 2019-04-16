import React, {useState} from 'react'
import {Button} from "antd";


function List(props) {
    // console.log(props)
    // console.log(match)
    console.log("list")
    let [name, setName] = useState("Name")

    function loginClick() {
    }

    return (
        <div>
            <h1>水果健康大概看了大家</h1>
            {/*<Route path={props.match.url + "/:test"} component={Test}/>*/}
            <Button type="primary" onClick={loginClick}>测试股</Button>
            {/*<Route path={props.match.url + "/:test"} component={Test}/>*/}
        </div>
    )
}
export default List