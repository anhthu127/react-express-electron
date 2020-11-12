import React, { useEffect, useState } from 'react'
import { Alert, Input, Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const { default: Axios } = require("axios");

function GetList(props) {
    const [data, setData] = useState()
    const [username, setName] = useState()
    const [password, setPass] = useState()
    useEffect(() => {

        console.log("data: " + JSON.stringify(data));
    }, []);

    const callAPi = async () => {
        const url = "http://localhost:3003/api/login"
        const data = {
            username: username,
            password: password
        }
        const res = await Axios.post(url, data)
        console.log(res.data);
        if (res.data.signal === 1) {
            localStorage.setItem('token', res.data.data)
            console.log("   ::::    " + JSON.stringify(props));
            props.history.push('/')
        } else {
            Alert("Điền thông tin")
        }
        await setData(res)
        // console.log(JSON.stringify(res));
    }
    return (
        <div>
            <label for="uname"><b>Username</b></label>
            <Input type="text" value={username}
                onChange={(e) =>
                    setName(e.target.value)
                }
                placeholder="Enter Username" name="username" />

            <label for="psw"><b>Password</b></label>
            <Input type="password" value={password}
                onChange={(e) =>
                    setPass(e.target.value)
                }
                placeholder="Enter Password" name="password" />

            <Button color="info" onClick={callAPi}  >click me</Button>
            <Button color="primary" > createAccount</Button>
            <Link to={'/'}  ><Button color="primary" > Back</Button></Link>
        </div >
    )
}
export default withRouter(GetList)