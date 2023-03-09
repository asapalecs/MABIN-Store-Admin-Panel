import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
];
const data1 = [];
for (let i = 1; i < 46; i++) {
  data1.push({
    key: i,
    name: `Blog ${i}`,
    date: '8 March 2023',
    author: `Author no. ${i}`,
  });
}
const Bloglist = () => {
  return (
    <div>
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Bloglist;
