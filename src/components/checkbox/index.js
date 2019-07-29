import React, { Component } from 'react'
import { Checkbox } from 'antd';
export default class Checkboxcom extends Component {
    constructor(){
        super();
        this.state = {
            plainOptions:['武侠', '言情', '动作','玄幻','都市','历史','游戏','科幻','修仙','爱情']
        }
    }
    render() {
        let {value} = this.props;
        let {plainOptions} = this.state;
        return (
            <Checkbox.Group options={plainOptions} value={value} onChange={this.onChange.bind(this)} />
        )
    }
    onChange(val){
        this.props.onChange(val);
    }
}
