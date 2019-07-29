import React, { Component, Fragment } from 'react'
import { Table, Divider, Tag ,Button} from 'antd'
import {booksList} from "@api/books.js"
import ModelCom from "@components/model"
import { Card } from 'antd';
import XLSX from "xlsx"
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
             <Card bordered={false} extra={<Button onClick={this.handleExportXlsx.bind(this)}>导出表格</Button>}/>
              <Table columns={columns} dataSource={data} pagination={{
                pageSize:5,
                total:200,
                onChange:this.handlePageChange.bind(this)
              }}/>
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
    //分页接口
    handlePageChange(page,limit){
      console.log(page,limit)
    }
    //导出表格
    handleExportXlsx(){
      let data = [
      ["书籍名称",
      "书籍Logo",
      "书籍作者",
      "书籍状态",
      "书籍类型"]
    ]


    for(var i=0;i<this.state.data.length;i++){
      let arr = [];
      for(var key in this.state.data[i]){
        arr.push(this.state.data[i][key])
      }
      data.push(arr);
    }


      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      /* generate XLSX file and send to client */
      XLSX.writeFile(wb, "书籍列表.xlsx")
    }
}


/*
  1 2 3 4 5 6 7 8 9

  每页显示多少条  limit  5   当前页数 page


  skip((page-1)*limit).limit(limit)
        0     5
        5     5
        10    5



 
  1000





*/
