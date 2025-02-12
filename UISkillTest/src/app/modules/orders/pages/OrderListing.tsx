import React, { useState, useEffect } from 'react';
import { Space, Table, Typography } from 'antd';
import { useRequest } from "ahooks";
import queryService from '../../../services/QueryService.ts';
import { dateConverter } from '../../../utils/CommonHelper.tsx';
import Pagination from '../../../components/Pagination.tsx';
import TableColumnConstructor from '../../../common/TableColumnConstructor.tsx';
import OrderDetailsDialog from '../../../common/Dialog/OrderDetailDialog.tsx';

const OrderListing = (props:any) => {
  const { Text } = Typography;
  const [ orderList, setOrderList ] = useState([]);
  const [ pageNo, setPageNo ] = useState(1);
  const [ showOrderDetail, setShowOrderDetail ] = useState(false);
  const [ orderDetail, setOrderDetail ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const { runAsync: searchOrders } = useRequest(queryService.queryOrders, {
    manual: true,
    onSuccess: (res:any, params: any[]) => {
      const updatedList = res.results.map((item:any) => {
        item.orderDate = dateConverter(item.orderDate)
        item.requiredDate = dateConverter(item.requiredDate)
        item.shippedDate = dateConverter(item.shippedDate)

        return item;
      })

      setOrderList(updatedList);
      setIsLoading(false);
    }
  })

  const { runAsync: getOrdersDetails } = useRequest(queryService.getOrdersDetails, {
    manual: true,
    onSuccess: (res:any, params: any[]) => {
      console.log(params)
      const detail = res.results.filter((item) => {
        console.log(item.order.id)
        return item.order.id === params[1]
      })
      console.log(detail)
      setOrderDetail(detail[0].orderDetails);
      setShowOrderDetail(true);
    }
  })

    useEffect(() => {
        searchOrders(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onClick = async (pageNumber:number) => {
      setIsLoading(true);
      searchOrders(pageNumber);
    };
  

  return (
    <>
      <Space direction="vertical" style={{width: '100%', justifyContent: 'center'}}>
      <Text italic style={{color:"#fff", paddingLeft:"24px"}}>Click on the row to check their details</Text>
          <Table 
            style={{width: '100vw', padding:"24px"}}
            dataSource={orderList} 
            columns={TableColumnConstructor("ORDER")} 
            loading={isLoading} 
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  getOrdersDetails(record.customerId, record.id)
                }, 
              };
            }}
            />
          <Pagination pageNo={pageNo} setPageNo={setPageNo} pageLength={orderList.length} MsCallAction={onClick}/>
          <OrderDetailsDialog isOpen={showOrderDetail} setIsOpen={setShowOrderDetail} orderDetails={orderDetail}/>
      </Space>
    </>
  )

};

export default OrderListing;
