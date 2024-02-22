import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function RevenueGraph() {
  const [loading, setLoading] = useState(false);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    setLoading(true);

    // Replace the URL with your actual API endpoint that fetches data from the SQL database
    fetch("http://localhost:9011/petex/getAll")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with properties customerId, price, quantity
        const mappedData = data.map((item) => ({
          customerId: item.customerId,
          revenue: item.price * item.quantity,
        }));

        setRevenueData(mappedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching revenue data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default RevenueGraph;
