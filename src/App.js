import React from 'react';
// import logo from './logo.svg';
import {Layout, Input, Menu,Icon} from 'antd';
import TopBan from './components/TopBan';
import BookSet from './components/BookSet';
import './App.css';
const {Header, Footer, Content} = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <TopBan/>
        <div style={{width:'100%',backgroundColor:'white'}}>
          <div style={{textAlign:"left",height: '80px',width:'1366px',margin:'auto'}}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{float:"left",lineHeight:'80px'}} >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">最新</Menu.Item>
              <Menu.Item key="3">榜单</Menu.Item>
            </Menu>
            <div style={{lineHeight:'80px',float:'right'}}>
              <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" style={{width:'300px'}} placeholder="搜索书籍" />
            </div>
          </div>

        </div>
        <Content style={{
          width: '1406px',
          margin: 'auto',
          padding: '20px'
        }}>
          <div style={{ background: '#eee', minHeight: 500, marginBottom:20, border:'1px solid rgba(0,0,0,0.1)',borderRadius:10}}>
            <img style={{height:560,width:1366, borderRadius:10}} src='https://zjuqsc.top/archived/1.jfif'  alt='d'/>
          </div>


          <div style={{flexDirection: 'row', marginBottom:20, height:'752px'}}>

            <div className='li-card' style={{ float:'left', width:'64%', background: '#fff', border:'1px solid rgba(0,0,0,0.1)', minHeight: 500, borderRadius:10}}>
              <div className='li-card-title' style={{ background: '#fafafa', minHeight: 60 , borderBottom:'1px solid rgba(0,0,0,0.1)',
                fontSize:'20px', lineHeight:'60px',paddingLeft:20, borderRadius:'10px 10px 0 0'
              }}>
                最新
              </div>
              <BookSet many={{num:3}}/>
            </div>


            <div className='li-card' style={{ float:'right', width:'35%', background: '#fff', border:'1px solid rgba(0,0,0,0.1)', minHeight: 500, borderRadius:10}}>
              <div className='li-card-title' style={{ background: '#fafafa', minHeight: 60 , borderBottom:'1px solid rgba(0,0,0,0.1)',
                fontSize:'20px', lineHeight:'60px',paddingLeft:20, borderRadius:'10px 10px 0 0'
              }}>
                分类查看
              </div>
            </div>
          </div>


          <div className='featured' style={{ background: '#fff',  minHeight: 120, marginBottom:20, border:'1px solid rgba(0,0,0,0.1)',borderRadius:10}}>
            <div style={{ background: '#fafafa', minHeight: 60 , borderBottom:'1px solid rgba(0,0,0,0.1)', fontSize:'20px', lineHeight:'60px',paddingLeft:20, borderRadius:'10px 10px 0 0'}}>论坛精选</div>
            <div style={{height:'300px'}}>
              <div style={{float:'left',width:'25%', borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                <div style={{height:'300px',padding:20}}>aa</div>
              </div>
              <div style={{float:'left',width:'25%', borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                <div style={{height:'300px',padding:20}}>aa</div>
              </div>
              <div style={{float:'left',width:'25%', borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                <div style={{height:'300px',padding:20}}>aa</div>
              </div>
              <div style={{float:'left',width:'25%'}}>
                <div style={{height:'300px',padding:20}}>aa</div>
              </div>

            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background:'#fafafa'}}>Buchie 图书交易系统 ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
