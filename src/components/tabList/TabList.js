import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { CloseCircleFilled } from '@ant-design/icons';
import classNames from 'classnames';
import './TabList.scss'

let callback = (key) => {
  console.log(key);
}
let onTabClick = (id) => {
  console.log('id', id);
}
const TabList = (props) => {
  let { fileList, unsaveIds, activeId } = props;
  return (
    <div className="nav nav-pills tablist-component">
      <Tabs onChange={callback} type="card" tabBarGutter={'0'}>
        {fileList.map((item, index) => {
          const withUnsavedMark = unsaveIds.includes(item.id);
          const fClassName = classNames({
            'nav-link': true,
            active: item.id === activeId,
            withUnsaved: withUnsavedMark
          });
          return (
            <TabPane
              key={index}
              tab={
                <span className={fClassName}>
                  <span className="paneTitle">{item.title}</span>
                  <CloseCircleFilled
                    className="closeCircle"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTabClick(item.id);
                    }}
                  />
                  {unsaveIds.includes(item.id) && (
                    <i className="unsaved-icon"></i>
                  )}
                </span>
              }
            >
              {item.body}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

TabList.propTypes = {
  fileList: PropTypes.array,
  unsaveIds: PropTypes.array,
  activeId: PropTypes.string
};
TabList.defaultProps = {
  fileList: [],
  unsaveIds: [],
  activeId: ''
};

export default TabList
