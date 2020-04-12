import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {FileMarkdownFilled, DeleteFilled, EditFilled} from '@ant-design/icons';
import './FileFoot.scss'

const FileFoot = (props) => (
  <>
    <div className="fileFootWrap">
      <Button type="primary">新建</Button>
      <Button type="primary" className="button-color-green">
        导入
      </Button>
    </div>
  </>
);
export default FileFoot
