import React from 'react';
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import { Button, Space } from "antd";
import { pageSize } from '../constants/Constant.ts';

interface PaginationProps {
    pageNo: number;
    setPageNo: Function;
    pageLength: number;
    MsCallAction: (pageNo:number) => any;
}


export default function Pagination(props:PaginationProps) {
    const {pageNo, setPageNo, pageLength, MsCallAction} = props;
    const firstPage = pageNo - 1 === 0
    const lastPage = pageLength !== pageSize
    function onClick(pageNumber:number){
        MsCallAction(pageNumber)
        setPageNo(pageNumber)
    }

    return (
        <>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <Button type="primary" disabled={firstPage} icon={<LeftOutlined />} onClick={()=>onClick(pageNo - 1)}></Button>
                <Button type="primary" disabled={lastPage} icon={<RightOutlined />} onClick={()=>onClick(pageNo + 1)}></Button>
            </Space>
        </>)


}