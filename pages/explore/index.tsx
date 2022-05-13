import { Breadcrumb, Button, Layout, Menu, MenuProps } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import type { NextPage } from 'next'
import Head from 'next/head'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React, { useContext } from 'react'
import { ThemeContext } from '@/context'


const Explore: NextPage = () => {
  const themeContext = useContext(ThemeContext);
    
  return (
    <>
    <Button onClick={()=>{
        if(!themeContext.setThemeType) return
        if(themeContext.themeType == 'dark'){
          themeContext.setThemeType('light')
        }else{
          themeContext.setThemeType('dark')
        }
    }} type="primary" danger>
      {themeContext.themeType}
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>
  )
}

export default Explore
