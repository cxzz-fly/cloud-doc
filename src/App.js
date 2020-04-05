import React from 'react';
import './App.scss';
import { Row , Col } from 'antd';
import FileSearch from './components/FileSearch'

function App() {
  return (
    <div className="App">
       <Row>
          <Col span={8} className='slideWrap'>
            <FileSearch title='查看内容' onFileSearch={(value)=>{console.log(value)}} />
          </Col>
          <Col span={16} className='content'>col</Col>
        </Row>
    </div>
  );
}

export default App;
