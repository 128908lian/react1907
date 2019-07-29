import React, { Component } from 'react'
import { Modal} from 'antd';
import ModelForm from "@components/modelForm"
export default class ModelCom extends Component {
    state = {
        visible: false,
        record:{}
      };
    
      showModal = (record) => {
        this.setState({
          visible: true,
          record
        });
      };

      handleCancel = e => {
      
        this.setState({
          visible: false,
        });
      };
    
     
    render() {
        const { visible,record} = this.state;
        return (
            <Modal
          title="修改书籍信息"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ModelForm record={record}/>
        </Modal>
        )
    }
}
