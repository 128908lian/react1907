import React, { Component } from 'react'
import { Modal} from 'antd';
import ModelForm from "@components/modelForm"
export default class ModelCom extends Component {
    state = {
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
     
    render() {
        const { visible} = this.state;
        return (
            <Modal
          title="修改书籍信息"
          visible={visible}
          footer={null}
        >
          <ModelForm/>
        </Modal>
        )
    }
}
