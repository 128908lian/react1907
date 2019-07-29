import React, { Component } from 'react'
import { Select } from 'antd';
const { Option } = Select;
export default class SelectStatus extends Component {
    render() {
        let {value} = this.props;
        return (
            <Select
            showSearch
            value={value}
            style={{ width: 200 }}
            onChange={this.onChange.bind(this)}
          >
            <Option value="已完结">已完结</Option>
            <Option value="连载中">连载中</Option>
          </Select>
        )
    }
    onChange(val){
        this.props.onChange(val);
    }
}
