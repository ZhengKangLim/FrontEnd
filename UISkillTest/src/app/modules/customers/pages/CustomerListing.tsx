import React, { useState, useEffect } from 'react';
import { Space, Table, Typography } from 'antd';
import { useRequest } from "ahooks";
import queryService from '../../../services/QueryService.ts';
import Pagination from '../../../components/Pagination.tsx';
import TableColumnConstructor from '../../../common/TableColumnConstructor.tsx';
import CustomerDetailDialog from './Dialog/CustomerDetailDialog.tsx';

const CustomerListing = (props:any) => {
  const { Text } = Typography;
  const [ customerList, setCustomerList ] = useState([]);
  const [ customerDetails, setCustomerDetails ] = useState([]);
  const [ pageNo, setPageNo ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ showCustDetail, setShowCustDetail ] = useState(false);
  const { runAsync: searchCustomers } = useRequest(queryService.queryCustomers, {
    manual: true,
    onSuccess: (res:any, params: any[]) => {
      setCustomerList(res.results);
      setIsLoading(false);
    }
  })

  const { runAsync: searchCustomersDetails } = useRequest(queryService.getCustomerDetails, {
    manual: true,
    onSuccess: (res:any, params: any[]) => {
      setCustomerDetails(res);
      setShowCustDetail(true);
    }
  })

  useEffect(() => {
      searchCustomers(1)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onClick = async (pageNumber:number) => {
    setIsLoading(true);
    searchCustomers(pageNumber);
  };

  return (
    <>
      <Space direction="vertical" style={{width: '100%', justifyContent: 'center'}}>
          <Text italic style={{color:"#fff", paddingLeft:"24px"}}>Click on the row to check their details</Text>
          <Table 
            style={{width: '100vw', padding:"24px"}} 
            dataSource={customerList} 
            columns={TableColumnConstructor("CUSTOMER")} 
            loading={isLoading} 
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  searchCustomersDetails(record.id)
                }, 
              };
            }}
          />
          <Pagination pageNo={pageNo} setPageNo={setPageNo} pageLength={customerList.length} MsCallAction={onClick}/>
          <CustomerDetailDialog isOpen={showCustDetail} setIsOpen={setShowCustDetail} customerDetails={customerDetails}/>
      </Space>
    </>
  )

};

export default CustomerListing;
