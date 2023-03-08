import React from "react";
import { Table } from 'antd';

const columns = [
    {
      title: 'Products',
      dataIndex: 'prodcat',
    },
    {
      title: 'Items Available',
      dataIndex: 'items',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      prodcat: `Product ${i}`,
      items: 12,
    });
  };

const Productlist = () => {
  return (
    <div>
      <h3 className="mb-4">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
