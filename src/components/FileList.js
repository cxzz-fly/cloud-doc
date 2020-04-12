import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd';
import './FileList.scss'
import {FileMarkdownFilled, DeleteFilled, EditFilled} from '@ant-design/icons';


const FileList = (props) => {
  const { list, clickItem, deleteItem, editItem } = props
  let clickListItem = (id) => {
    clickItem(id)
  }
  let deleteListItem = (e, index) => {
    e.stopPropagation()
    deleteItem(index)
  }
  let editListItem = (e, index) => {
    e.stopPropagation()
    editItem(index)
  }
  return (
    <div className='fileListWrap'>
      <List
        className="fileList"
        size="small"
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              clickListItem(item.id);
            }}
          >
            <FileMarkdownFilled style={{ fontSize: '16px', color: '#08c' }} />
            {item.title}
            <div style={{ display: 'inline' }}>
              <DeleteFilled
                onClick={(e) => {
                  deleteListItem(e, index);
                }}
              />
              <EditFilled
                onClick={(e) => {
                  editListItem(e, index);
                }}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

FileList.propTypes = {
  list: PropTypes.array,
  clickItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}
FileList.defaultProps = {
  list: [
    {
      id: '2',
      title: 'second post',
      body: '## this is the title',
      createdAt: 1563762965704
    }
  ]
};
export default FileList
