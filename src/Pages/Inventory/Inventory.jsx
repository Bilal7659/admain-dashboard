import { Avatar, Rate, Space, Table, Typography } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { InventoryTabApi } from '../../Components/PageContent/Api/Index'
const Inventory = () => {
 
 const [loading, setLoading] =  useState(false)
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true)
    axios.get('https://dummyjson.com/products')
    .then((res) =>{
      // console.log(res.data.products)
      setDataSource(res.data.products);
      setLoading(false)

    })
  }, [])
  return (
    <div style={{ margin: '20px 0 0 15px'}}>
      <Space size={20} direction='vertical'>
    <Typography.Title level={3} style={{marginTop:'20px'}}>Inventory</Typography.Title>
       <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) =>{
             return <Avatar src={link} />
            }
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value)=> <span>${value}</span>
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) =>{
              return <Rate value={rating} allowHalf />
            }
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5
        }}
      ></Table>
      </Space>
    </div>
  )
}

export default Inventory
