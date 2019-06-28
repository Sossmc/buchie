import React from 'react';
import './TopBan.css'
import logo from '../static/Buch.svg';

const status = {
  site: 'https://zjuqsc.top',
  linkList:[
    {name:'在线商城',url:'/'},
    {name:'个人主页',url:'/profile'},
    {name:'论坛',url:'/bbs'},
    {name:'关于',url:'/abouts'},
  ]
};

const TopBan = ()=>(
  <div className='site-topban'>
    <div className='tb-left'>
      <img src={logo} alt="logo" />
    </div>
    <div className='tb-list'>
      {status.linkList.map(item=>(
        <div className='item'>
          <a href={status.site+item.url}>{item.name}</a>
        </div>
      ))}
    </div>
    <div className='tb-right'>
      <div>我</div>
      <div>设置</div>
    </div>
  </div>
);

export default TopBan;