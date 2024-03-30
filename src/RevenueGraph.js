import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as XLSX from 'xlsx';
import { Line } from 'react-chartjs-2';

const SellingReport = () => {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [error, setError] = useState(null);

  const [totalCost, setTotalCost] = useState(0);

  // State for line chart data
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

  useEffect(() => {
    axios.get('http://localhost:9011/petex/getAll')
      .then(response => {
        setFormData(response.data);
        setFilteredData(response.data);
        updateChartData(response.data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  }, []);

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
    updateChartData(filtered);
  };

  const updateChartData = (data) => {
    const months = moment.months();
    const dataValues = months.map(month => {
      const totalForMonth = data
        .filter(item => moment(item.lastUpdate).format('MMMM') === month)
        .reduce((total, item) => total + item.total, 0);
      return totalForMonth;
    });

    setChartData({
      labels: months,
      datasets: [
        {
          label: 'Total Cost',
          data: dataValues,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });

    const sumOfCost = data.reduce((total, item) => total + item.total, 0);
    setTotalCost(sumOfCost);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SellingReports');
    XLSX.writeFile(workbook, 'SellingReports.xlsx');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="sellingreport-container">
        <h1>Selling Report</h1>
       
        <table>
          {/* Render filteredData in table */}
        </table>
        {/* Line Chart */}
        <div style={{ marginTop: '40px',width: '500px', height: '500px'  }}>
          <Line data={chartData}/>
        </div>
      </div>
    </>
  );
};

export default SellingReport;
