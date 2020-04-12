import React from 'react';
import './App.scss';
import { Row, Col } from 'antd';
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'

function App () {
  let clickItem = (index) => {
    console.log('index', index);
  }
  let deleteItem = (index) => {
    console.log('deleteItem', index);
  }
  let editItem = (index) => {
    console.log('editItem', index);
  }
  return (
    <div className="App">
      <Row>
        <Col span={8} >
          <FileSearch onFileSearch={(value) => {console.log(value)}}
              title="查看内容"
          />
          <FileList
              clickItem={clickItem}
              deleteItem={deleteItem}
              editItem={editItem}
              list={[1, 2, 3]}
          />
        </Col>
        <Col className="content"
            span={16}
        >col</Col>
      </Row>
    </div>
  );
}

export default App;
