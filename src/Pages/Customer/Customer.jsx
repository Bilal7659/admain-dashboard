import { Typography, Table, Avatar } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api = 'https://dummyjson.com/users';

const Customer = () => { 
                                     // state hooks
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const getCustomerData = async (url) => {
    setLoading(true);
    const res = await axios.get(url);
    console.log(res.data);
    setDataSource(res.data.users);
  };

  useEffect(() => {
    getCustomerData(Api);
    setLoading(false);
  }, []);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (link)=>{
       return <Avatar src={link}/>
      }
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email Id',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (adress)=>{
        return (
          <span>
            {adress.address},{adress.city}
          </span>
        );
      }
    },
  ];

  return (
    <div style={{ margin: '20px 0 0 15px' }}>
      <Typography.Title>Customer</Typography.Title>
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={{
          pageSize:5
        }}
      />
    </div>
  );
};

export default Customer;
