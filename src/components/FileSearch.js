import React, { useState, useEffect, useRef } from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
import './FileSearch.scss';
console.log('process.env.NODE_ENV2222222', process.env.NODE_ENV);
const FileSearch = (props) => {
  const { title, onFileSearch } = props;
  const [inputActive, setInputActive] = useState(false);
  const [value, setValue] = useState('');
  const countRef = useRef(null);
  const [keyCode, setKeyCode] = useState('');

  const keyUpHandler = ({ key }) => {
    setKeyCode(key);
  };

  useEffect(() => {
    if (keyCode === 'Enter' && inputActive) {
      onFileSearch(value);
    }
    if (keyCode === 'Escape' && inputActive) {
      setInputActive(false);
    }
    setKeyCode('');
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  });

  useEffect(() => {
    inputActive && countRef.current.focus();
  }, [inputActive]);

  const handleSearch = () => {
    setInputActive(true);
  };

  return (
    <div>
      {
        !inputActive &&
				(
				  <div className="slide">
				    <span>{title}</span>
				    <Button
				      onClick={handleSearch}
				      type="primary"
				    >
    搜索

				    </Button>
				  </div>
				)
      }
      {
        inputActive &&
				(
				  <div className="slide">
				    <Input
				      onChange={(e) => {setValue(e.target.value);}}
				      placeholder="请输入"
				      ref={countRef}
				    />
				    <Button
				      onClick={() => {setInputActive(false);}}
				      type="primary"
				    >
    关闭

				    </Button>
				  </div>
				)
      }
    </div>
  );
};

FileSearch.propTypes = {
  title: PropTypes.string,
  onFileSearch: PropTypes.func,
};

export default FileSearch;
