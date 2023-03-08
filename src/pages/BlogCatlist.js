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
  },
];
const data1 = [];
for (let i = 1; i <= 10; i++) {
  data1.push({
    key: i,
    name: `Blog Category ${i}`,
    author: `By Author ${i}`,
  });
}
const BlogCatlist = () => {
  return (
    <div>
      <h3 className="mb-4">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogCatlist;
