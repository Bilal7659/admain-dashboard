import React, { useEffect, useState } from 'react';
import { Space, Typography, Table } from 'antd';
import axios from 'axios';

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/carts/1').then((res) => {
        // console.log(res.data);
        setDataSource(res.data.products); // Assuming 'products' is the array in the response
        setLoading(false);
      });
  }, []);

  const columns = [
   
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (value)=><span>${value}</span>
    },
    {
      title: 'Discounted Price',
      dataIndex: 'discountedPrice',
      key: 'discountedPrice',
      render: (value)=><span>${value}</span>

    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div style={{ margin: '20px 0 0 15px'}}>
      <Space direction='vertical'>
        <Typography.Title level={3}>Orders</Typography.Title>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
        />
      </Space>
    </div>
  );
};

export default Order;
