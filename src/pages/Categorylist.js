import React from "react";
import { Table } from 'antd';

const columns = [
    {
      title: 'Product Categories',
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
      prodcat: `Product Category ${i}`,
      items: 12,
    });
  };

const Categorylist = () => {
  return (
    <div>
      <h3 className="mb-4">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Categorylist;
