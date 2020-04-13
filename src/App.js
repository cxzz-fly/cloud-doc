import React, { useState, useEffect } from 'react';
import './App.scss';
import { Row, Col } from 'antd';
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import FileFoot from './components/FileFoot'
import defaultFiles from './utils/defaultFiles'
import TabList from './components/tabList/TabList'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';


function App () {
  const [files, setFiles] = useState(defaultFiles);
  const [activeFileID, setActiveFileID] = useState('');
  const [openFileIDs, setOpenFileIDs] = useState([]);
  const [unSaveFileIDs, setunSaveFileIDs] = useState([]);
  const openfiles = openFileIDs ? openFileIDs.map((openID) =>
    files.find((file) => openID === file.id)
  ) : ['']

  // const activeFile = files.find((file) => file.id === activeFileID);
  let activeFile = '';
  let fileClick = (fileId) => {
    setActiveFileID(fileId)
    setOpenFileIDs([...openFileIDs, fileId])
  };
  let deleteItem = (index) => {
    console.log('deleteItem', index);
  }
  let editItem = (index) => {
    console.log('editItem', index);
  }
  let handleChange = (data) => {
    console.log(data);
  }
  let onTabClick = (id) => {
    setActiveFileID(id);
  };

  useEffect(() => {
    activeFile = files.find((file) => file.id === activeFileID);
  }, [activeFileID]);

  return (
    <div className="App">
      <Row>
        <Col span={8} className="silderLeft">
          <FileSearch
            onFileSearch={(value) => {
              console.log(value);
            }}
            title="查看内容"
          />
          <FileList
            clickItem={fileClick}
            deleteItem={deleteItem}
            editItem={editItem}
            list={files}
            activeFileID={activeFileID}
          />
          <FileFoot />
        </Col>
        <Col className="content" span={16}>
          <TabList
            fileList={openfiles}
            unsaveIds={unSaveFileIDs}
            activeId={activeFileID}
            onTabClick={onTabClick}
          />
          {activeFile ? (
            <SimpleMDE
              onChange={handleChange}
              value={activeFile.body}
              options={{
                minHeight: '400px'
              }}
            />
          ) : (
            '请选择...'
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
