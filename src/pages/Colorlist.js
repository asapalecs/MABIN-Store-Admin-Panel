import React from "react";
import { Table } from 'antd';

const columns = [
    {
      title: 'Color',
      dataIndex: 'color',
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
      color: `Color ${i}`,
      items: 12,
    });
  };

const Colorlist = () => {
  return (
    <div>
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Colorlist;
