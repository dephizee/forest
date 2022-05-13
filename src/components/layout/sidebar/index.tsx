import { Avatar, Button, Dropdown, Layout, Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SearchOutlined,
  LockOutlined,
  BulbOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { createElement, ReactNode, useContext, useEffect, useState } from 'react';
import { StyledLayout } from './index.styled';
import { ThemeContext } from '@/context'
const { Header, Content, Footer, Sider } = Layout;
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: createElement(icon),
        label: `subnav ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );
const menu = (
    <Menu
      items={[
        {
          label: (
            <span>
              EN
            </span>
          ),
        },
        {
          label: (
            <span>
              ES
            </span>
          ),
        },
        {
          label: (
            <span>
              DE
            </span>
          ),
        },
      ]}
    />
  );
interface SideBarProps {
    content: ReactNode | ReactNode[];
  }
export const SideBar =  (props:SideBarProps) => {
    const {content} = props;
    const [broken, setBroken] = useState<boolean>(false);
    const [collaped, setCollaped] = useState<boolean>(false);
    const {setThemeType, themeType} = useContext(ThemeContext);
    useEffect(() => {
      console.log('collaped',collaped,'broken', broken);
    }, [collaped, broken ]);
    return (
        <StyledLayout hasSider>
            <Sider
            width={288}
            trigger={null}
            breakpoint="xl"
            // collapsedWidth="0"
            collapsible={broken}
            collapsed={collaped}
            onBreakpoint={broken => {
                console.log('onBreakpoint',broken);
                setBroken(broken);
                if(!broken)setCollaped(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log('onCollapse',collapsed, type);
            }}
            onMouseEnter={(e) => {
                if (broken) {
                    setCollaped(false)
                }
            }}
            onMouseLeave={(e) => {
              if (broken) {
                  setCollaped(true)
              }
            }}
            
            className="site-layout-background"
            >
              <div className="logo-panel">
                <img className='logo-sm' src="/logo-sm.png" alt="" />
                <img className='logo-lg' src="/logo-lg.png" alt="" />
              </div>
            <div className="info-panel" >
                <div className="user-container">
                    <Avatar size={48} src="https://acorn-react-ecommerce-platform.coloredstrategies.com/img/profile/profile-9.webp" />
                    <div className="name">Lisa Jackson</div>
                </div>
            </div>
            <Dropdown className='language_dropdown' overlay={menu} placement="bottom">
              <Button type='text' ghost>EN</Button>
            </Dropdown>
            <div className="icon-row">
              <Button type="text" shape="circle" ghost icon={<SearchOutlined />} />
              <Button type="text" shape="circle" ghost icon={<LockOutlined />} />
              <Button
                onClick={()=>{
                  if(!setThemeType) return
                  if(themeType == 'dark'){
                    setThemeType('light')
                  }else{
                    setThemeType('dark')
                  }
              }}
                type="text" shape="circle" ghost icon={<i className={`ri-lightbulb-${themeType=='light'?'flash-line':'line'}`}></i>}  />
              <Button type="text" shape="circle" ghost icon={<BellOutlined />} />
            </div>
            <div className="menu-panel">
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                  items={items2}
                  />
            </div>
            

            </Sider>
            <Layout
              onClick={(e) => {
                if (broken && !collaped) {
                    setCollaped(true)
                }
              }}
            >
            <Header className={`${!collaped&&'move-up'}`}>
              <div className={`header-logo`}>
                  <img className='logo-lg' src="/logo-lg.png" alt="" />
              </div>
              <Button 
                onClick={(e) => {
                  setCollaped(false)
                }}
              type='text' ghost>
              <i className="ri-menu-line"></i>

              </Button>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                {content}
                <Footer style={{ textAlign: 'center' }}>
                  <div className="start">Colored Strategies 2021</div>
                  <div className="end">
                    <span>Review</span>
                    <b>|</b>
                    <span>Purchase</span>
                    <b>|</b>
                    <span>Doc</span>
                  </div>
                </Footer>
            </Content>
              
            </Layout>
        </StyledLayout>
        )
    };