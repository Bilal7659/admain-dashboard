import React from 'react'
import { MailOutlined, BellOutlined } from '@ant-design/icons'                     // importing react antd desigen icon
import { Badge, Drawer, Image, List, Space, Typography } from 'antd'                        //importing react antd {tags}
import './Header.css'
import { useEffect } from 'react'
import axios from 'axios'                                                                     // using react axios libraries
import { useState } from 'react'


const Header = () => {

 const [comments, SetComments] = useState([]);                                    //useState for comments data              
 const [notification, SetNotification] = useState([]);                                             //useState for notification data
 
 const [commentOpen, SetCommentOpen] = useState(false);
 const [notificationOpen, SetNotificationOpen] = useState(false);

  useEffect(() => {                                                              //using useEffect state for securing api data
  axios.get('https://dummyjson.com/comments').then((res)=>{                                               // All comments Api data
    // console.log(res.data.total)
    SetComments(res.data.comments)

    axios.get('https://dummyjson.com/products').then((res)=>{                          // All Notification data from api with using axios lybraries
        SetNotification(res.data.products)
        console.log(res.data.products)
    })
  })
  }, [])


  return (

    <div className='header'>

           <Image src='./Images/1st.jpg' style={{width:'50px', borderRadius:'25px'}}>

           </Image>
       <Typography.Title style={{fontFamily:'cursive',marginTop:'5px'}}>
            Bilal Dashboard
       </Typography.Title>

       <Space>
        <Badge count={comments.length}>
       <MailOutlined style={{fontSize:'25px'}} onClick={() =>{ SetCommentOpen(true)}} />
       </Badge>

       <Badge count={notification.length}>
       <BellOutlined style={{fontSize:'25px'}} onClick={()=>{ SetNotificationOpen(true) }} />
       </Badge>
       </Space>
                          {/* drawer for comments section  */}
       <Drawer title='comments' open={commentOpen} onClose={()=>{ SetCommentOpen(false)}}>
        <List dataSource={comments} renderItem={(item)=>{
         return <List.Item>{item.body}</List.Item>
        }}></List>
       </Drawer>
                            {/* drawer for Noticfication section  */}
       <Drawer title='notification' open={notificationOpen} onClose={()=> { SetNotificationOpen(false) }}>
        <List dataSource={notification} renderItem={(item)=>{
          return <List.Item><Typography.Text strong>{item.title} </Typography.Text>has been ordered!</List.Item>
        }}></List>
       </Drawer>
    </div>
  
  )
}

export default Header
