import { Modal, Button, Descriptions, Table, Typography } from 'antd';
import React, {useState} from 'react';
import TableColumnConstructor from '../../../../common/TableColumnConstructor.tsx';
import { orderConverter } from '../../../../utils/CommonHelper.tsx';
import Title from 'antd/es/typography/Title';
import OrderDetailsDialog from '../../../../common/Dialog/OrderDetailDialog.tsx';

interface DialogProps {
    isOpen: boolean;
    setIsOpen: Function;
    customerDetails: any;
}

const CustomerDetailDialog = (props:DialogProps) => {
  const { Text } = Typography;
  const { isOpen, setIsOpen, customerDetails } = props
  const [ showOrderDetail, setShowOrderDetail ] = useState(false);
  const [ orderDetail, setOrderDetail ] = useState([]);
  const custDetail = customerDetails?.customer
  const orders = orderConverter(customerDetails.orders)
  const customerDetailDescription = [
        {
          key: '1',
          label: 'Contact Name',
          children: custDetail?.contactName,
        },
        {
          key: '2',
          label: 'Contact Title',
          children: custDetail?.contactTitle,
        },
        {
          key: '3',
          label: 'Company Name',
          children: custDetail?.companyName,
        },
        {
          key: '4',
          label: 'Phone No.',
          children: custDetail?.phone,
        },
        {
          key: '5',
          label: 'City',
          children: custDetail?.city,
        },
        {
            key: '6',
            label: 'Postal Code',
            children: custDetail?.postalCode,
        },
        {
        key: '7',
        label: 'Country',
        children: custDetail?.country,
        },
        {
        key: '8',
        label: 'Fax No.',
        children: custDetail?.fax,
        },
        {
        key: '9',
        label: 'Address',
        children: custDetail?.address,
        span:2
        },
      ]
  

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
          <Descriptions title="Customer Details" bordered items={customerDetailDescription}/>
          <Title style={{paddingTop:"12px" }} level={5}>Customer Orders</Title>
          <Text italic>Click on the row to check their details</Text>
          <Table 
            style={{width: '100vw', paddingTop:"24px" }}
            dataSource={orders} 
            columns={TableColumnConstructor("ORDER")} 
            pagination={false} 
            onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    setOrderDetail(record.orderDetails)
                    setShowOrderDetail(true)
                  }, 
                };
              }}
            />
        </Modal>
        <OrderDetailsDialog isOpen={showOrderDetail} setIsOpen={setShowOrderDetail} orderDetails={orderDetail}/>
    </div>

  )

};

export default CustomerDetailDialog;
