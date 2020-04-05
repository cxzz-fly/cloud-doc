import React from 'react';
import './App.css';
import { Row , Col, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
       <Row>
          <Col span={4}>col</Col>
          <Col span={20}>col</Col>
        </Row>
    </div>
  );
}

export default App;
