import React, { useState, useEffect,useRef } from 'react'
import { Button, Input } from 'antd';
import './FileSearch.scss'

const FileSearch = (props) => {
	const { title, onFileSearch } = props
	const [inputActive, setInputActive] = useState(false);
	const [value, setValue] = useState('');
  	const countRef = useRef(null);

	useEffect(() => {
		const keyUpHandler = (props) => {
			if (props.key == 'Enter' && inputActive) {
				setInputActive(false)
				onFileSearch(value)
			}
			if (props.key == 'Escape' && inputActive) {
				setInputActive(false)
			}
		}
		document.addEventListener('keyup', keyUpHandler)
		return () => {
			document.removeEventListener('keyup', keyUpHandler)
		}
	})

	useEffect(() => {
		inputActive && countRef.current.focus();
	},[inputActive])
	
	const handleSearch = ()=>{
		setInputActive(true)
	}

	return (
		<div>
			{
				!inputActive &&
				<div className='slide'>
					<span>{title}</span>
					<Button type="primary" onClick={ handleSearch } >搜索</Button>
				</div>
			}
			{
				inputActive &&
				<div className='slide'>
					<Input placeholder="请输入" ref={countRef} onChange={(e) => { setValue(e.target.value) }} />
					<Button type="primary" onClick={() => { setInputActive(false) }} >关闭</Button>
				</div>
			}
		</div>
	)


}
export default FileSearch