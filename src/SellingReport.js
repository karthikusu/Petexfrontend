import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as XLSX from 'xlsx';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const SellingReport = () => {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [error, setError] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Cost',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const chartRef = useRef(null);

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

    const sumOfCost = filtered.reduce((total, item) => total + item.total, 0);

    const labels = filtered.map((user) => moment(user.lastUpdate).format('YYYY-MM-DD HH:mm:ss'));
    const data = filtered.map((user) => user.total);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Total Cost',
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });

    setFilteredData(filtered);
    setTotalCost(sumOfCost);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SellingReports');
    XLSX.writeFile(workbook, 'SellingReports.xlsx');
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }
        // Create new chart
        chartRef.current.chart = new Chart(ctx, {
          type: 'line',
          data: chartData,
        });
      }
    }
  }, [chartData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="sellingreport-container">
        <div style={{ display: "flex" }}>
          <div>
            <h1 style={{ paddingLeft: "235%", fontSize: "2rem", marginRight: "-450%", fontFamily: "cursive" }}>Selling report</h1>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10%" }}>
            <label style={{ fontSize: "1.5rem", fontFamily: "cursive" }}>Select Month:</label>
            <select value={selectedMonth} onChange={handleMonthChange} style={{ width: "50%", height: "4vh", marginLeft: "2%" }}>
              <option value="">All</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div style={{ marginLeft: "15%", marginTop: "1%", marginRight: "-50%" }}>
            <button onClick={exportToExcel} style={{ cursor: "pointer", backgroundColor: "lightskyblue" }}>Export to Excel</button>
          </div>
          <div style={{ marginLeft: "80%" }}>
            <label style={{ fontSize: "1.5rem", fontFamily: "cursive" }}>Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              style={{ width: "50%", height: "4vh", marginLeft: "2%" }}
            />
          </div>
        </div> <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Order Id</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .filter((user) => moment(user.lastUpdate).format('MM') === selectedMonth)
              .map((user, i) => (
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
            <tr>
              <td colSpan="5"></td>
              <td>Total Cost:</td>
              <td>{totalCost}</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Line Chart */}
        <div style={{ marginTop: '20px' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </>
  );
};

export default SellingReport;
