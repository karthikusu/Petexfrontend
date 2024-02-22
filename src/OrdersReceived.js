import React, { useState, useEffect } from "react";
import "./OrdersReceived.css";

function OrdersReceived() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:9008/petex/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Failed to fetch data");
      setLoading(false);
    }
  };

  const handlePaymentStatusChange = (index, status) => {
    const updatedOrders = [...orders];
    updatedOrders[index].paymentStatus = status;
    setOrders(updatedOrders);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="orders-received">
      <h2>Orders Received</h2>
      {orders.length === 0 ? (
        <p>No orders received yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email Address</th>
              <th>Pet Name</th>
              <th>Contact Number</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>City</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.userName}</td>
                <td>{order.emailaddress}</td>
                <td>{order.petname}</td>
                <td>{order.contactNumber}</td>
                <td>{order.age}</td>
                <td>{order.occuption}</td>
                <td>{order.city}</td>
                <td>
                  {order.paymentStatus === "Completed" ? (
                    <button className="completed">Completed</button>
                  ) : (
                    <button className="pending" onClick={() => handlePaymentStatusChange(index, "Completed")}>Mark Completed</button>
                  )}
                  {order.paymentStatus === "Pending" ? (
                    <button className="pending">Pending</button>
                  ) : (
                    <button className="completed" onClick={() => handlePaymentStatusChange(index, "Pending")}>Mark Pending</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrdersReceived;
