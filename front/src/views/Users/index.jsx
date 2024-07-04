import { Badge, Table } from 'antd';
import { useEffect, useState } from 'react';
import { apis } from '../../config/apisUrls';
import axios from '../../config/axios';

export default () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        axios.get(apis.users.getusers)
            .then(res => {
                if (res.status === 200)
                    setusers(res.data.data)
            })
    }, [])

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text, record) => (
                <img style={{height:'50px' , width:'50px' , borderRadius:'50%'  }} src={'http://localhost:5000/getimage/' + record.avatar} alt="" />
            ),
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },

    ];

    return (
        <>
            <div className="container mt-4">
                <h3>Users <Badge count={0} showZero /> </h3>


                <Table dataSource={users} columns={columns} />
            </div>
        </>
    )
}

