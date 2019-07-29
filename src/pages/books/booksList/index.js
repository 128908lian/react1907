import React, { Component, Fragment } from 'react'
import { Table, Divider, Tag } from 'antd'
import {booksList} from "@api/books.js"
import ModelCom from "@components/model"

export default class BooksList extends Component {
  constructor(){
    super();
      this.state = {
        data:[],
        columns:[
          {
            title: '书籍名称',
            dataIndex: 'booksName',
            key: 'booksName',
            render: text => <a href="javascript:;">{text}</a>,
          },
          {
            title: '书籍Logo',
            dataIndex: 'booksLogo',
            key: 'booksLogo',
            render: url =><img src={url}/>,
          },
          {
            title: '书籍作者',
            dataIndex: 'booksAuth',
            key: 'booksAuth',
          },
          {
            title: '书籍状态',
            dataIndex: 'booksStatus',
            key: 'booksStatus',
          },
          {
            title: '书籍类型',
            key: 'booksTag',
            dataIndex: 'booksTag',
            render: tags => (
              <span>
                {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>
            ),
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;" onClick={this.handleModify.bind(this,record)}>操作 {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={this.handleDel.bind(this,record)}>删除</a>
              </span>
            ),
          },
        ]
      }
  }
    render() {
      let {data,columns} = this.state;
        return (
          <Fragment>
              <Table columns={columns} dataSource={data} />
              <ModelCom ref="model"/>
          </Fragment>
        )
    }
   async componentDidMount(){
      let data = await booksList();
      this.setState({
        data:data.data.list
      })
    }
    //书籍的删除
    handleDel({id}){
      console.log(id);
    }
    //书籍的修改
    handleModify(record){
      this.refs.model.showModal(record);
    }
}
