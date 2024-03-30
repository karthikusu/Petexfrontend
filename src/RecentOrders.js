// import React, { useState, useEffect } from "react";
// import { Table, Typography } from "antd";

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
//       <Typography.Text >Recent Orders</Typography.Text>
//       <Table
//         columns={[
//           {
//             title: "Product",
//             dataIndex: "product", // replace with the actual key in your order data
//           },
//           {
//             title: "Quantity",
//             dataIndex: "quantity", // replace with the actual key in your order data
//           },
//           {
//             title: "Price",
//             dataIndex: "price", // replace with the actual key in your order data
//           },
//           {
//             title: "Total",
//             dataIndex: "total", // replace with the actual key in your order data
//           },
//         ]}
//         loading={loading}
//         dataSource={dataSource}
//         pagination={false}
//       />
//     </>
//   );
// }

// export default RecentOrders;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const RecentOrders = () => {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (formData.length === 0) {
      axios.get('http://localhost:9011/petex/getAll')
        .then(response => {
          setFormData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          setError(error.message);
          console.error('Error fetching data:', error);
        });
    }
  }, [formData.length]);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    filterData(selectedMonth, selectedDate, selectedDish);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    filterData(selectedMonth, selectedDate, selectedDish);
  };

  const handleDishChange = (event) => {
    const selectedDish = event.target.value;
    setSelectedDish(selectedDish);
    filterData(selectedMonth, selectedDate, selectedDish);
  };

  const filterData = (month, date, dish) => {
    let filtered = formData;
    if (month) {
      filtered = filtered.filter(
        (item) => moment(item.lastUpdate).format('MM') === month
      );
    }
    if (date) {
      filtered = filtered.filter(
        (item) => moment(item.lastUpdate).format('YYYY-MM-DD') === date
      );
    }

    if (dish) {
      filtered = filtered.filter((item) =>
        item.dishes.toLowerCase().includes(dish.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="recent-orders-container">
        <div style={{ display: "flex" }}>
          <div>
            <h2>Recent Orders</h2>
          </div>
        </div>
        {/* Additional UI for filtering if needed /}
        {/ ... */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>Order Id</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.customerId} </td>
                <td>{user.product}</td>
                <td>{user.price} </td>
                <td>{user.quantity}</td>
                <td>{user.total}</td>
                <td>{moment(user.lastUpdate).format('YYYY-MM-DD HH:mm:ss')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentOrders;
