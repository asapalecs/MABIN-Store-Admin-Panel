import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: "Brand Name",
    dataIndex: "name",
  },
  {
    title: "Items Available",
    dataIndex: "items",
  },
];
const data1 = [];
for (let i = 1; i < 46; i++) {
  data1.push({
    key: i,
    name: `Brand ${i}`,
    items: 18,
  });
}
const Brandlist = () => {
  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
