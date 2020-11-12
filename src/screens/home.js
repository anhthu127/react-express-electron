import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import User from '../server/Models/Core/User';
import ModalExample from './modal';
function Home(props) {
    const [flag, setFlag] = useState(false)
    const [modal, setModal] = useState(false)
    const toggle = async () => {

        await setModal(true)
        console.log(modal);
    };
    const [data, setData] = useState()
    useEffect(() => {
        registApi()
        setFlag(false)
    }, [flag]);

    const createAccount = async () => {
        let requestData = {
            email: 'email',
            phone: '342141',
            lastname: 'lastName',
            firstname: 'firstName',
            location: 'location',
            location_code: '',
            city: '',
            district: ''
        }
        const data = await User.create(requestData)
        setFlag(true)
    }
    const registApi = async () => {
        const getList = await User.findAll()
        // console.log(JSON.stringify(getList));
        setData(getList)
    }
    const loginFuncton = async () => {
        console.log(JSON.stringify(props))
        props.history.push('call_api')
    }
    const deleteAccount = async (value) => {
        await User.destroy({
            where: {
                id: value.id
            }
        }
        )
        setFlag(true)
    }
    return (
        <>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((value, key) => {
                            return (
                                <tr>
                                    <th scope="row">{key}</th>
                                    <td> {value.firstname} </td>
                                    <td>{value.lastname} </td>
                                    <td> {value.email} </td>
                                    <td>
                                        <Button onClick={() => deleteAccount(value)} color="danger" >delete</Button>
                                    </td>
                                    <td>
                                        <Button color="info">edit</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <ModalExample buttonLabel={"Chỉnh sửa"} />
                <Button color="info" onClick={loginFuncton}>click me</Button>
                <Button onClick={createAccount} color="primary" > createAccount</Button>
            </div >
        </>
    );
}

export default withRouter(Home);
