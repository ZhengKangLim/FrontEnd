import { Modal, Button, Table } from 'antd';
import React from 'react';
import TableColumnConstructor from '../../common/TableColumnConstructor.tsx';
import Title from 'antd/es/typography/Title';

interface DialogProps {
    isOpen: boolean;
    setIsOpen: Function;
    orderDetails: any;
}

const OrderDetailsDialog = (props:DialogProps) => {

  const { isOpen, setIsOpen, orderDetails } = props


  const onClickOk = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <Modal
       
        width={'100vw'}
          visible={isOpen}
          onOk={()=>setIsOpen(false)}
          onCancel={()=>setIsOpen(false)}
          footer={[
            <Button key="ok" type="primary" onClick={()=> onClickOk()}>
              Ok
            </Button>,
          ]}
        >
          <Title level={5}>Order Details</Title>
          <Table 
            style={{width: '100vw', paddingTop:"24px" }}
            dataSource={orderDetails} 
            columns={TableColumnConstructor("ORDER_DETAILS")} 
            pagination={false} 
            />
        </Modal>
    </div>

  )

};

export default OrderDetailsDialog;
