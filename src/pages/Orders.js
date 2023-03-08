import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Author",
    dataIndex: "author",
  },,
  {
    title: "Date",
    dataIndex: "date",
  },
];
const data1 = [];
for (let i = 1; i <= 25; i++) {
  data1.push({
    key: i,
    name: `Order ${i}`,
    author: `Customer ${i}`,
    date: `12 June 2023`,
  });
}
const Orders = () => {
  return (
    <div>
      <h3 className="mb-4">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
