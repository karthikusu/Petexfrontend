import { Space, Table, Typography, Button, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get("http://localhost:9011/petex/getAll")
      .then((response) => {
        const data = response.data;
        console.log(data); // Log the received data to the console
        setDataSource(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (customerId) => {
    try {
      const response = await axios.delete(`http://localhost:9011/petex/delete/${customerId}`);
      if (response.status === 200) {
        // Reload the data after successful deletion
        const updatedData = await axios.get("http://localhost:9011/petex/getAll");
        setDataSource(updatedData.data);
      } else {
        console.error(`Failed to delete record with customerId: ${customerId}`);
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const columns = [
    {
      title: "customerId",
      dataIndex: "customerId",
    },
    {
      title: "product",
      dataIndex: "product",
    },
    {
      title: "price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
    },
    {
      title: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "total",
      dataIndex: "total",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this record?"
          onConfirm={() => handleDelete(record.customerId)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const revenueData = dataSource.map((order) => ({
    customerId: order.customerId,
    revenue: order.price * order.quantity,
  }));

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 2,
        }}
      />
      <Typography.Title level={4}>Revenue Graph</Typography.Title>
      <ResponsiveContainer width="50%" height={200}>
        <BarChart data={revenueData}>
          <XAxis dataKey="customerId" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#88846" />
        </BarChart>
      </ResponsiveContainer>
    </Space>
  );
}

export default Orders;
