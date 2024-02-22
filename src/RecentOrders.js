import React, { useState, useEffect } from "react";
import { Table, Typography } from "antd";

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:9011/petex/getAll");
        const data = await response.json();

        if (Array.isArray(data)) {
          setDataSource(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Product",
            dataIndex: "product", // replace with the actual key in your order data
          },
          {
            title: "Quantity",
            dataIndex: "quantity", // replace with the actual key in your order data
          },
          {
            title: "Price",
            dataIndex: "price", // replace with the actual key in your order data
          },
          {
            title: "Total",
            dataIndex: "total", // replace with the actual key in your order data
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
}

export default RecentOrders;
