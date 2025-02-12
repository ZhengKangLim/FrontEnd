import React from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';

const TableColumnConstructor = (type:string) => {
  const filterProps = {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
      return (
        <div style={{ padding: 8 }}>
            <Input
              autoFocus
              value={selectedKeys[0]}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                confirm()
              }}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button 
              onClick={() => {
                clearFilters()
                confirm()
              }}
              size="small" style={{ width: 90 }}>
                Reset
            </Button>
            </div>
      )
    },
    filterIcon:()=>{
      return <SearchOutlined/>
    }
}

  const customerDataColumn =  [
    {
      title: 'Name',
      dataIndex: 'contactName',
      key: 'contactName',
      sorter: (a, b) => {return a.contactName.localeCompare(b.contactName)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.contactName.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Company Name ',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a, b) => {return a.companyName.localeCompare(b.companyName)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.companyName.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Phone No. ',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => {return a.phone.localeCompare(b.phone)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.phone.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Fax No.',
      dataIndex: 'fax',
      key: 'fax',
      sorter: (a, b) => {return a.fax.localeCompare(b.fax)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.fax.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Title',
      dataIndex: 'contactTitle',
      key: 'contactTitle',
      sorter: (a, b) => {return a.contactTitle.localeCompare(b.contactTitle)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.contactTitle.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => {return a.city.localeCompare(b.city)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.city.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Postal Code',
      dataIndex: 'postalCode',
      key: 'postalCode',
      sorter: (a, b) => {return a.postalCode.localeCompare(b.postalCode)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.postalCode.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => {return a.address.localeCompare(b.address)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.address.toLowerCase().includes(value.toLowerCase())
      }
    },
  ]

  const orderDataColumn =  [
    {
      title: 'Order Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.id == value;
      }
    },
    {
      title: 'Freight',
      dataIndex: 'freight',
      key: 'freight',
      sorter: (a, b) => a.freight - b.freight,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.freight == value;
      }
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      sorter: (a, b) => {return a.orderDate.localeCompare(b.orderDate)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.orderDate.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Shipped Date',
      dataIndex: 'shippedDate',
      key: 'shippedDate',
      sorter: (a, b) => {return a.shippedDate.localeCompare(b.shippedDate)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shippedDate.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Required Date',
      dataIndex: 'requiredDate',
      key: 'requiredDate',
      sorter: (a, b) => {return a.requiredDate.localeCompare(b.requiredDate)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.requiredDate.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship Country',
      dataIndex: 'shipCountry',
      key: 'shipCountry',
      sorter: (a, b) => {return a.shipCountry.localeCompare(b.shipCountry)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shipCountry.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship City',
      dataIndex: 'shipCity',
      key: 'shipCity',
      sorter: (a, b) => {return a.shipCity.localeCompare(b.shipCity)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shipCity.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship Postal Code',
      dataIndex: 'shipPostalCode',
      key: 'shipPostalCode',
      sorter: (a, b) => {return a.shipPostalCode.localeCompare(b.shipPostalCode)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shipPostalCode.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship Address',
      dataIndex: 'shipAddress',
      key: 'shipAddress',
      sorter: (a, b) => {return a.shipAddress.localeCompare(b.shipAddress)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shipAddress.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship Name',
      dataIndex: 'shipName',
      key: 'shipName',
      sorter: (a, b) => {return a.shipName.localeCompare(b.shipName)},
      ...filterProps,
      onFilter:(value,record) =>{
        return record.shipName.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Ship From',
      dataIndex: 'shipVia',
      key: 'shipVia',
      sorter: (a, b) => a.shipVia - b.shipVia,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.shipVia == value;
      }
    },
  ]

  const orderDetailDataColumn =  [
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      key: 'orderId',
      sorter: (a, b) => a.orderId - b.orderId,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.orderId == value;
      }
    },
    {
      title: 'Product Id',
      dataIndex: 'productId',
      key: 'productId',
      sorter: (a, b) => a.productId - b.productId,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.productId == value;
      }
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      sorter: (a, b) => a.unitPrice - b.unitPrice,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.unitPrice == value;
      }
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.quantity == value;
      }
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
      sorter: (a, b) => a.discount - b.discount,
      ...filterProps,
      onFilter:(value,record) =>{
        // eslint-disable-next-line
        return record.discount == value;
      }
    },
  ]
  
  const response = {
    ORDER: orderDataColumn,
    CUSTOMER:customerDataColumn,
    ORDER_DETAILS: orderDetailDataColumn
  }

  return response[type]

};

export default TableColumnConstructor;
