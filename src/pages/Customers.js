import React from "react";
import { Table } from "antd";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data1 = [];
  for (let i = 1; i < 46; i++) {
    data1.push({
      key: i,
      name: `Store Customer ${i}`,
      age: 23,
      address: `Bucharest, Street no. ${i}`,
    });
  };

const Customers = () => {
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
