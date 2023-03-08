import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from 'antd';

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
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Store Customer ${i}`,
    age: 32,
    address: `Bucharest, Street no. ${i}`,
  });
};

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 120,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "June",
      sales: 145,
    },
    {
      type: "July",
      sales: 50,
    },
    {
      type: "Aug",
      sales: 72,
    },
    {
      type: "Sep",
      sales: 24,
    },
    {
      type: "Oct",
      sales: 56,
    },
    {
      type: "Nov",
      sales: 63,
    },
    {
      type: "Dec",
      sales: 91,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#FFB52E";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p className="">Total</p>
              <h4 className="mb-0">$1820</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="red">
                <BsArrowDownRight /> 20,6%
              </h6>
              <p className="mb-0">Compared to May 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p className="">Total</p>
              <h4 className="mb-0">$2940</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="green">
                <BsArrowUpRight /> 36,1%
              </h6>
              <p className="mb-0">Compared to June 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div>
              <p className="">Total</p>
              <h4 className="mb-0">$2795</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="red">
                <BsArrowDownRight /> 21,8%
              </h6>
              <p className="mb-0">Compared to July 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
