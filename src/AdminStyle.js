// import React, { useEffect, useState } from "react";
// import { Card, Space, Statistic, Typography, Table } from "antd";
// import { DollarCircleOutlined, ShoppingCartOutlined, UserOutlined, ShoppingOutlined } from "@ant-design/icons";

// export const getOrders = () => {
//   return fetch(`http://localhost:9011/petex/getAll`).then((res) => res.json());
// };
// export const getRevenue = () => {
//   return fetch(`http://localhost:9092/petex/getRevenue`).then((res) => res.json());
// };
// export const getCustomers = () => {
//   return fetch(`http://localhost:9092/petex/getCustomers`).then((res) => res.json());
// };
// export const getInventory = () => {
//   return fetch(`http://localhost:9092/petex/getInventory`).then((res) => res.json());
// };

// function Dashboard() {
//   const [orders, setOrders] = useState(0);
//   const [inventory, setInventory] = useState(0);
//   const [customers, setCustomers] = useState(0);
//   const [revenueData, setRevenueData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ordersResponse = await getOrders();
//         setOrders(ordersResponse.total);

//         const inventoryResponse = await getInventory();
//         setInventory(inventoryResponse.total);

//         const customersResponse = await getCustomers();
//         setCustomers(customersResponse.total);

//         const revenueResponse = await getRevenue();
//         setRevenueData(revenueResponse);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}></Typography.Title>

//       <Space>
//         <RecentOrders />
//       </Space>
//     </Space>
//   );
// }

// function DashboardCard({ title, value, icon }) {
//   return (
//     <Card style={cardStyle}>
//       <Space direction="horizontal">
//         {icon}
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }

// function RecentOrders() {
//   const [dataSource, setDataSource] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:9011/petex/getAll");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setDataSource(data.slice(0, 3));
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <>
//       <Typography.Text>Recent Orders</Typography.Text>
//       <Table
//         columns={[
//           {
//             title: "Product",
//             dataIndex: "product",
//           },
//           {
//             title: "Quantity",
//             dataIndex: "quantity",
//           },
//           {
//             title: "Price",
//             dataIndex: "price",
//           },
//           {
//             title: "Total",
//             dataIndex: "total",
//           },
//         ]}
//         loading={loading}
//         dataSource={dataSource}
//         pagination={false}
//       />
//     </>
//   );
// }

// const cardStyle = {
//   width: '400px',
//   height: '350px',
//   borderRadius: '10%',
//   backgroundColor: 'white',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Card, Space, Statistic, Typography, Table } from "antd";
import { Link } from "react-router-dom"; // Import Link from React Router
import { DollarCircleOutlined } from "@ant-design/icons"; // Remove unused imports
// import './Adminstyle.css';
import RevenueGraph from "./RevenueGraph";

// Function to fetch orders from the API
export const getOrders = () => {
  return fetch(`http://localhost:9011/petex/getAll`).then((res) => res.json());
};

// Function to fetch revenue from the API
export const getRevenue = () => {
  return fetch(`http://localhost:9011/petex/getRevenue`).then((res) => res.json());
};

// Function to fetch customers from the API
export const getCustomers = () => {
  return fetch(`http://localhost:9011/petex/getCustomers`).then((res) => res.json());
};

// Function to fetch inventory from the API
export const getInventory = () => {
  return fetch(`http://localhost:9011/petex/getInventory`).then((res) => res.json());
};

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from APIs
        const ordersResponse = await getOrders();
        setOrders(ordersResponse.total);

        const inventoryResponse = await getInventory();
        setInventory(inventoryResponse.total);

        const customersResponse = await getCustomers();
        setCustomers(customersResponse.total);

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
      <Typography.Title level={4}></Typography.Title>
      <Space>
        <RecentOrders />
      </Space>
    </Space>
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

  }, []);

  return (
    <>
    <style>
      {
        `
        .haricard{
          height: 100px;
          width: 200px;
          margin: 20px;
          border-radius: 8px;
          background-color: aliceblue;
          text-align: center;
      
      }
      .haricard a {
          height: 2px;
          margin-top: 20%;
          margin-left: 30%;
      
          
      }
      
      button{
          width: 100px;
      
      }
        `
      }
    </style>
    {/* <body className="Adms"> */}

      <div className="d-flex flex-row justify-content-spacebetween  Adms_cards" style={{ marginTop: "-3cm" }}>
        <div className="haricard"style={{background: 'skyblue', fontSize: '24px'}}> <Link to="/reportlost" style={{fontSize:"20px"}}>Reportlost<br />
         </Link>
        </div>
        <div className="haricard"style={{background:'red'}}><Link to="/adminadaption" style={{fontSize:"20px"}}>Adaption<br />
          </Link>
        </div>
        <div className="haricard"style={{background:'pink'}}><Link to="/adminfunding" style={{fontSize:"20px"}}>Funding<br />
          </Link>
        </div>
        <div className="haricard"style={{background:'orange'}}><Link to="/appointment" style={{fontSize:"20px"}}>Shows<br />
          </Link>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-spacebetween">
        <div className="col-lg-6"style={{marginTop:'53px'}}
        >
          <h2>Recent Orders</h2>
          <Table
            columns={[
              {
                title: "Product",
                dataIndex: "product",
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
              },
              {
                title: "Price",
                dataIndex: "price",
              },
              {
                title: "Total",
                dataIndex: "total",
              },
            ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
          />
        </div>
        <p style={{marginLeft:"2%",marginTop:"70px"}}>
          <RevenueGraph/></p>
      </div>
      {/* </body> */}

    </>
  );
}

export default Dashboard;
