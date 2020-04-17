import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { CloseCircleFilled } from '@ant-design/icons';
import SimpleMDE from 'react-simplemde-editor';
import classNames from 'classnames';
import './TabList.scss'

let callback = (key) => {
  console.log(key);
}
const TabList = (props) => {
  let { fileList, unsaveIds, activeId, onTabClick, onCloseTabItems } = props;
  let onTabClickItem = (id) => {
    onTabClick(id)
  };
  return (
    <div className="nav nav-pills tablist-component">
      <Tabs
        // onChange={callback}
        type="card"
        tabBarGutter={'0'}
        activeKey={activeId}
        onTabClick={onTabClickItem}
      >
        {fileList.map((item, index) => {
          const withUnsavedMark = unsaveIds.includes(item.id);
          const fClassName = classNames({
            'nav-link': true,
            active: item.id === activeId,
            withUnsaved: withUnsavedMark
          });
          return (
            <TabPane
              key={item.id}
              tab={
                <span className={fClassName}>
                  <span className="paneTitle">{item.title}</span>
                  <CloseCircleFilled
                    className="closeCircle"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseTabItems(item.id);
                    }}
                  />
                  {unsaveIds.includes(item.id) && (
                    <i className="unsaved-icon"></i>
                  )}
                </span>
              }
            >
              {/* {item.body} */}
              <SimpleMDE
                // onChange={handleChange}
                value={item.body}
                options={{
                  minHeight: '400px'
                }}
              />
            </TabPane>
          );
        })}
      </Tabs>
      {/* <div onClick={()=>{activeKey}</div>}>aaaaaaa</div> */}
    </div>
  );
}

TabList.propTypes = {
  fileList: PropTypes.array,
  unsaveIds: PropTypes.array,
  activeId: PropTypes.string,
  onTabClick: PropTypes.func,
  onCloseTabItems: PropTypes.func
};
TabList.defaultProps = {
  fileList: [],
  unsaveIds: [],
  activeId: ''
};

export default TabList
