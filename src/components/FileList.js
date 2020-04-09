import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd';
import {FileMarkdownFilled,DeleteFilled,EditFilled} from '@ant-design/icons';


const FileList = (props)=>{
	const { list,clickItem,deleteItem,editItem } = props
	let clickListItem = (index)=>{
		clickItem(index)
	}
	let deleteListItem = (e,index)=>{
		e.stopPropagation()
		deleteItem(index)
	}
	let editListItem = (e,index)=>{
		e.stopPropagation()
		editItem(index)
	}
    return (
        <>
            <List
				size="small"
				dataSource={list}
				renderItem={(item,index) => 
					<List.Item onClick={()=>{clickListItem(index)}}>
						<FileMarkdownFilled 
							style={{ fontSize: '16px', color: '#08c' }}  />
						{item}
						<div>
							<DeleteFilled onClick={(e)=>{deleteListItem(e,index)}}/>
							<EditFilled onClick={(e)=>{editListItem(e,index)}}/>
						</div>
					</List.Item>}
				
            />
        </>
    )
}

FileList.propTypes={
	list:PropTypes.array,
	clickItem:PropTypes.func.isRequired,
	deleteItem:PropTypes.func.isRequired,
	editItem:PropTypes.func.isRequired,
}
FileList.defaultProps = {
    list : []
}
export default FileList