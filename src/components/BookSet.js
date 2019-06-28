import React from 'react';
import {Card} from 'antd';
import './BookSet.css';
const bookset = require('./isbn.json');

const BookSet = (props)=>(
  <div className='bookset'>
    {bookset.slice(0,props.many.num).sort((a,b)=>{
      return a.ISBN>b.ISBN?-1:1;
    }).map(item=><OneBook data={item} />)}
  </div>
)

const OneBook = (props) => (
  <Card>
    <div className = 'bookWrapper1'>
      <div className = 'bookWrapper2'>
        <div className = 'bookimage'>
          <img style={{width:'120px',height:'180px'}} src={'http://isbn.szmesoft.com/ISBN/GetBookPhoto?ID='+ (props.data.PhotoUrl?props.data.PhotoUrl:'39E78F447EE5A857EE82886AF61A70EA')} />
        </div>
        <div className = 'bookinfo' >
          <div className = 'infbox'>
            <div>          
              <h2>{props.data.BookName.length>20?(props.data.BookName.substring(0,20)+"..."):props.data.BookName}</h2>
              <p>ISBN索书号: {props.data.ISBN}</p>
              <p>作者: {props.data.Author}</p>
              <p>出版商: {props.data.Publishing}</p>
              <p>价格: {props.data.Price}</p>    
              <p>页数: {props.data.Pages}</p>
            </div>
          </div>
        </div>
    </div>
      
    </div>
    
  </Card>
)
export default BookSet;