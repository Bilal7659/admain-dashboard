import React from 'react'
import './Footer.css'
import Typography from 'antd/es/typography/Typography'
const Footer = () => {
  return (
    <div className='footer'>
     <Typography.Link href = 'tel: +923134567'>+923134567</Typography.Link>
     <Typography.Link href = 'https://www.google.com' target = {'_blank'}>Terms of use</Typography.Link>
     <Typography.Link href = 'https://www.google.com' target = {'_blank'}> Privacy Policy</Typography.Link>
    </div>
  )
}


export default Footer
