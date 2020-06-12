import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
// import { MailOutlined, AppstoreOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import './home.scss'
import headerUrl from '../../assets/images/head.png'
import menuConfig from '../../config/menuConfig'
// const iconType = "MailOutlined"




const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
    this.toggle = this.toggle.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
  }
  componentWillMount () {
    const menuList = this.renderMenu(menuConfig)
    // console.log(menuList);
    this.setState({
      menuList: menuList
    })
  }
  render () {
    return (
      <div className="home">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="home-sider">
            <div className="logo" style={{ color: "#fff" }}>
              <img src={headerUrl} alt="" className="menu-img" />
              <span className={ !this.state.collapsed ? 'show' : 'fade' }>Home</span>
            </div>
            {/* <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="1" icon={React.createElement(Icon[iconType], { style: { fontSize: '16px', color: '#fff' } })}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                Option 3
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu> */}
            <Menu
              // defaultSelectedKeys 默认选中的菜单
              defaultSelectedKeys={['1']}
              // defaultOpenKeys 默认打开的二级菜单 
              // defaultOpenKeys={['6']}
              mode="inline"
              theme="dark"
            >
              {this.state.menuList}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background home-header" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <div className='user-info fr'>
                <img src={headerUrl} alt="" />
                Serati Ma
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: "calc(100vh - 112px)",
              }}
            >
              Content
          </Content>
          </Layout>
        </Layout>
      </div>
    )
  }

  //使用递归
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={React.createElement(Icon[item.icon], { style: { fontSize: '16px', color: '#fff' } })} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key} icon={React.createElement(Icon[item.icon], { style: { fontSize: '16px', color: '#fff' } })}>
            {item.title}
          </Menu.Item>
        )
      }
    })
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
}

export default Home;