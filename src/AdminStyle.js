import React, { useEffect, useState } from "react";
import { Card, Space, Statistic, Table, Typography, Button, Popconfirm } from "antd";
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const getOrders = () => {
  return fetch(`http://localhost:9011/petex/getAll`).then((res) => res.json());
};
export const getRevenue = () => {
  return fetch(`http://localhost:9011/petex/getRevenue`).then((res) => res.json());
};
function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await getOrders();
        setOrders(ordersResponse.total);

        // const inventoryResponse = await getInventory();
        // setInventory(inventoryResponse.total);

        // const customersResponse = await getCustomers();
        // setCustomers(customersResponse.total);

        const revenueResponse = await getRevenue();
        setRevenueData(revenueResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined />}
          title="Orders"
          value={orders}
        />
        <DashboardCard
          icon={<ShoppingOutlined />}
          title="Inventory"
          value={inventory}
        />
        <DashboardCard
          icon={<UserOutlined />}
          title="Customer"
          value={customers}
        />
        <DashboardCard 
          icon={<DollarCircleOutlined />}
          title="Revenue Data"
          value={revenueData.length > 0 ? revenueData[0].total : 0}
        />
      </Space>
      <Space>
        {/* <RecentOrders /> */}
        {/* <RevenueGraph revenueData={revenueData} /> */}
       

      </Space>
    </Space>
  );
}


function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

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

export default Dashboard;
