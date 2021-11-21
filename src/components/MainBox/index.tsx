import React, {useState} from "react";
import {Breadcrumb, Layout, Menu} from "antd";
import './index.css'
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
import {
    UserOutlined,
  InsertRowBelowOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import {HashRouter, useHistory} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from '../../routers'
import logoSvg from '../../assets/img/logo.svg'
import {useTranslation} from "react-i18next";

export default (props:any) => {
  const { t } = useTranslation();
    const [collapsed, setcollapsed] = useState(false)
  const history = useHistory()
  const breadcrumbMap:any = {
    '/activity':['activity'],
    '/feedback':['feedback'],
    '/account/settings':['account','settings'],
    '/account/center': ['account','center'],
  } [history.location.pathname] || []
  return (
    <div id="components-layout-demo-side">
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => {
          setcollapsed(true)
        }}>
          <div className="logo">
            <img src={logoSvg} alt="" style={{width: '32px'}}/>
            <span>linklin</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={(val) => {
            history.push('/' + val.keyPath.reverse().join('/'))
          }}>
            <Menu.Item key="activity" icon={<InsertRowBelowOutlined/>}>
              {t('菜单.活动管理')}
            </Menu.Item>
            <SubMenu key="account" icon={<UserOutlined/>} title="个人页">
              <Menu.Item key="center">个人中心</Menu.Item>
              <Menu.Item key="settings">个人设置</Menu.Item>
            </SubMenu>
            <Menu.Item key="feedback" icon={<PhoneOutlined/>}>
              用户反馈
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding: 0}}/>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              {
                breadcrumbMap.map((item:any,index:number)=><Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
              }
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 0}}>
              <HashRouter>
                {renderRoutes(props.route.children)}
              </HashRouter>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2021 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
