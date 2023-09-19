import { ShoppingCartOutlined,ShoppingOutlined, UserOutlined, PayCircleOutlined} from '@ant-design/icons'
import { Card, Space, Statistic, Table } from 'antd'
import Typography from 'antd/es/typography/Typography'
// import {getCustomerData} from '../Customer/Customer/getCustomerData'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {                                       //{ here we import chart js
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);                              //}



const Home = () => {                             
                                        // react state hooks
  const [Order,setOrder] =useState(0);
  const [inventory,setInventory] =useState(0);
  const [customer,setCustomer] =useState(0);
  const [revenue,setRevenue] =useState(0);


  useEffect(()=>{                            //react useEffect hooks

    axios.get('https://dummyjson.com/carts/1').then((res)=>{                   //using axios react lybrary
      console.log(res)
      setOrder(res.data.total)
      setRevenue(res.data.discountedTotal)
    })

    axios.get('https://dummyjson.com/products').then((res)=>{
      // console.log(res.data.total)
      setInventory(res.data.total)
    })

    axios.get('https://dummyjson.com/users').then((res)=>{
      // console.log(res.data.total)
      setCustomer(res.data.total)
    })

  },[])


  return (
    <div>
     <Space size={20} direction='vertical'>
     <Typography.Title level={3} style={{marginTop:'20px'}}>Dashboard</Typography.Title>
     <Space direction='horizontal'>
      <DashboardCard title={'Orders'} value={Order} icon={<ShoppingCartOutlined style={{fontSize:'22px',backgroundColor:'#A9DFBF',borderRadius:'20px',padding:'10px'}}/>}/>
      <DashboardCard title={'Inventory'} value={inventory} icon={<ShoppingOutlined  style={{fontSize:'22px',backgroundColor:'#D98880',borderRadius:'20px',padding:'10px'}} />}  />
      <DashboardCard title={'Customer'}  value={customer} icon={<UserOutlined style={{fontSize:'22px',backgroundColor:'#5DADE2 ',borderRadius:'20px',padding:'10px'}} />}  />
      <DashboardCard title={'Revenue'} value={revenue}  icon={<PayCircleOutlined  style={{fontSize:'22px',backgroundColor:'#D4AC0D ',borderRadius:'20px',padding:'10px'}} />}  />
      </Space>
      <Space direction='horizental'>
     <GetTableApi/>                            {/* importing Table data*/}
           <ReactCart/>                     {/*  importing react chart js  */}
      </Space>
      </Space>
      </div>
      );
}
                                                    /* Dashbord Card section*/
     function DashboardCard({title,value,icon}) {
      return(
        <Card style={{background:'#F9EBEA'}}>
        <Space direction='horizentally'>
        {icon}
        <Statistic  value={value} title={title}></Statistic>
        </Space>
      </Card> 
      );
     }

                           // Table Section of Home Dashboard
    
       const GetTableApi = () => {

        const [dataSource, setDataSource] = useState([]);                     //React state hooks
        const [loading, setLoading] = useState(false);


        useEffect(()=>{
        
          setLoading(true);
  
             axios.get('https://dummyjson.com/carts/1').then((res) => {
              // console.log(res.data.carts)
              setDataSource(res.data.products)
             })
         setLoading(false);


        },[])

        const columns = [                     // column props in Table tags
          {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (value) => <span>${value}</span>,
          },
          {
            title: 'Discounted Price',
            dataIndex: 'discountedPrice',
            key: 'discountedPrice',
            render: (value) => <span>${value}</span>,
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

     <>

             <Typography.Text>Resent Orders</Typography.Text>
             <Table
              columns={columns}
              loading={loading}
              dataSource={dataSource}
              pagination = {{pageSize: 3}}
              />
     </>

);
 }
                             // Chart Section of Home Dashboard
  function ReactCart (){

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' 
        },
        title: {
          display: true,
          text: 'Recent Order Cart',
        },
      },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random()*100),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random()*100),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
    return(
      <Card style={{width:'500px',height:'250px',background:'#E8F8F5'}}>
          <Bar options={options} data={data} />
          </Card>
    )
  }
export default Home
