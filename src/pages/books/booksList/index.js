import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd'

const columns = [
    {
      title: '书籍名称',
      dataIndex: 'booksName',
      key: 'booksName',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '书籍作者',
      dataIndex: 'booksAuth',
      key: 'booksAuth',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    },
  ];



  const data = [
    {
      key: '1',
      booksName: 'John Brown',
      booksAuth: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      booksName: 'Jim Green',
      booksAuth: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      booksName: 'Joe Black',
      booksAuth: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


export default class BooksList extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}
