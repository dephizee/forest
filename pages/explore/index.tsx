import { Button } from 'antd'

import type { NextPage } from 'next'

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
