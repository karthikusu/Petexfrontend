// import React, { useState, useEffect } from 'react';
// // import './DoctorReport.css';
// import doctorbg from './doctorbg.jpg';

// function App() {
//   const [reports, setReports] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedMonthYear, setSelectedMonthYear] = useState({ month: '', year: '' });
//   const [selectedGender , setSelectedGender] = useState('');

//   useEffect(() => {
//     fetchAllReports();
//   }, []);

//   const fetchAllReports = () => {
//     fetch('http://localhost:8080/reports/all')
//       .then(response => response.json())
//       .then(data => setReports(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const fetchReportsByDate = () => {
//     fetch(`http://localhost:8080/reports/date/${selectedDate}`)
//       .then(response => response.json())
//       .then(data => setReports(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const fetchReportsByGender = () => {
//     fetch(`http://localhost:8080/reports/gender/${selectedGender}`)
//       .then(response => response.json())
//       .then(data => setReports(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const fetchReportsByMonthAndYear = () => {
//     fetch(`http://localhost:8080/reports/monthyear/${selectedMonthYear.month}/${selectedMonthYear.year}`)
//       .then(response => response.json())
//       .then(data => setReports(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <div > 
//       <style>{`
//         body {
//         font-family: sans-serif;
//         margin: 0;
//         padding: 0;
  
//         background-size: cover; 
//         background-position: center; 
//           }


// .container {
//   width: 90%; 
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 30px; 
//   background-color: #f8f8f8; 
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 
// }


// button {
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 8px; 
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;
// }

// button:hover {
//   background-color: #0056b3;
// }


// input[type="date"],
// input[type="month"],
// input[type="number"],
// select,
// button {
//   padding: 8px 12px; 
//   margin-bottom: 10px; 
//   margin-left: 10px;
// }

// @media (max-width: 576px) {
//   input[type="date"],
//   input[type="month"],
//   input[type="number"],
//   select,
//   button {
//     padding: 6px 10px; 
    
//   }
// }

// @media (max-width: 768px) {
//   .boldLabel {
//     margin-bottom: 5px; 
//     font-weight: bold;
//   }
// }

// input:focus,
// select:focus {
//   border-color: #007bff;
// }


// table {
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
//   border: 2px solid #ddd; 
// }

// th {
//   border: 2px solid black;
//   padding: 8px 16px; 
//   text-align: center;
//   background-color: gray;
//   font-family: serif;
//   font-weight: bold;
  
// }
// td {
//   border: 2px solid black;
//   padding: 8px 16px; 
//   text-align: center;
//   border-radius: 4px;
//   font-weight: bold;
// }

// tr:nth-child(even) {
//   background-color: #f5f5f5; 
//   background: linear-gradient(to right, #f8f8f8 0%, #f5f5f5 100%);
// }

// tr:hover {
//   background-color: rgba(0, 76, 183, 0.2);
//   cursor: pointer; 
// }


// .smallInput {
//   width: 150px;
//   margin-left: 20px;
// }

// .smallMonth {
//   width: 150px;
//   margin-left: 10px;
// }

// .smallYear {
//   width: 100px;
//   margin-left: 10px;
// }

// .smallGender{
//   margin-left: 10px;
// }

// .smallMonthYear {
//   width: 150px;
//   margin-left: 10px;
// }

// .smallYears {
//   width: 100px;
//   margin-left: 10px;
// }

// .fetchAllReportsButton {
//   float: right;
//   margin-right: 20px;
 
// }

// @media (max-width: 768px) {
//   .container {
//     padding: 20px; 
//   }
// }

// @media (max-width: 576px) {
//   .container {
//     padding: 10px; 
//   }
// }
 

//       `}</style>
    
//       <br></br>
//       <div>
//         <button className="fetchAllReportsButton" onClick={fetchAllReports}>Filter All Reports Here</button>
//         <div>
//           <br></br>
//           <br></br>
//           <label className="boldLabel" htmlFor="datePicker"> DATE:</label>
//           <input className="smallInput" type="date" id="datePicker" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
//           <button onClick={fetchReportsByDate}>Filter Reports By Date</button>
//         </div>
        
//         <br></br>

//         <div>
//           <label className="boldLabel" htmlFor="genderPicker">Gender:</label>
//           <select className="smallGender" id="genderPicker" value={selectedGender} onChange={e => setSelectedGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <button onClick={fetchReportsByGender}>Filter Reports By Gender</button>
//         </div>
//         <br></br>

//         <div>
//           <label className="boldLabel" htmlFor="monthYearPicker"> MONTH and YEAR:</label>
//           <input 
//             className="smallMonthYear" 
//             type="month" 
//             id="monthYearPicker" 
//             value={`${selectedMonthYear.year}-${selectedMonthYear.month}`} 
//             onChange={e => setSelectedMonthYear({ ...selectedMonthYear, month: e.target.value.split('-')[1], year: e.target.value.split('-')[0] })}
//           />
//           <button className="fetchReportsByMonthAndYear" onClick={fetchReportsByMonthAndYear}>Filter Reports By Month And Year</button>
//         </div>
//         <br></br>

//         <table>
//           <thead>
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Customer Email</th>
//               <th>Gender</th>
//               <th>Customer Phone Number</th>
//               <th>Date</th>
//               <th>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map(report => (
//               <tr key={report.customerId}>
//                 <td>{report.customerId}</td>
//                 <td>{report.customerName}</td>
//                 <td>{report.customerEmail}</td>
//                 <td>{report.gender}</td>
//                 <td>{report.customerPhno}</td>
//                 <td>{report.date}</td>
//                 <td>{report.time}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>  
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
//  import './DoctorReport.css';
import doctorbg from './doctorbg.jpg';
function App() {
  const [reports, setReports] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  // const [selectedMonth, setSelectedMonth] = useState('');
  // const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonthYear, setSelectedMonthYear] = useState({ month: '', year: '' });
  const[selectedGender , setSelectedGender] = useState('');
  useEffect(() => {
    fetchAllReports();
  }, []);

  const fetchAllReports = () => {
    fetch('http://localhost:8080/reports/all')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const fetchReportsByDate = () => {
    fetch(`http://localhost:8080/reports/date/${selectedDate}`)
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));

  };
  const fetchReportsByGender = () => {
    fetch(`http://localhost:8080/reports/gender/${selectedGender}`)
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));

  };

  const fetchReportsByMonthAndYear = () => {
    fetch(`http://localhost:8080/reports/monthyear/${selectedMonthYear.month}/${selectedMonthYear.year}`)
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <style>
        {
          `
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('doctorimage.jpg'); 
            background-size: cover; 
            background-position: center; 
          }
          
          
          .container {
            width: 90%; 
            max-width: 800px;
            margin: 0 auto;
            padding: 30px; 
            background-color: #f8f8f8; 
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 
          }
          
          
          button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 8px; 
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
          }
          
          button:hover {
            background-color: #0056b3;
          }
          
          
          input[type="date"],
          input[type="month"],
          input[type="number"],
          select,
          button {
            padding: 8px 12px; 
            margin-bottom: 10px; 
            margin-left: 10px;
          }
          
          @media (max-width: 576px) {
            input[type="date"],
            input[type="month"],
            input[type="number"],
            select,
            button {
              padding: 6px 10px; 
              
            }
          }
          
          @media (max-width: 768px) {
            .boldLabel {
              margin-bottom: 5px; 
              font-weight: bold;
            }
          }
          
          input:focus,
          select:focus {
            border-color: #007bff;
          }
          
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border: 2px solid #ddd; 
          }
          
          th {
            border: 2px solid black;
            padding: 8px 16px; 
            text-align: center;
            background-color: gray;
            font-family: serif;
            font-weight: bold;
            
          }
          td {
            border: 2px solid black;
            padding: 8px 16px; 
            text-align: center;
            border-radius: 4px;
            font-weight: bold;
          }
          
          tr:nth-child(even) {
            background-color: #f5f5f5; 
            background: linear-gradient(to right, #f8f8f8 0%, #f5f5f5 100%);
          }
          
          tr:hover {
            background-color: rgba(0, 76, 183, 0.2);
            cursor: pointer; 
          }
          
          
          .smallInput {
            width: 150px;
            margin-left: 20px;
          }
          
          .smallMonth {
            width: 150px;
            margin-left: 10px;
          }
          
          .smallYear {
            width: 100px;
            margin-left: 10px;
          }
          
          .smallGender{
            margin-left: 10px;
          }
          
          .smallMonthYear {
            width: 150px;
            margin-left: 10px;
          }
          
          .smallYears {
            width: 100px;
            margin-left: 10px;
          }
          
          .fetchAllReportsButton {
            float: right;
            margin-right: 20px;
           
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 20px; 
            }
          }
          
          @media (max-width: 576px) {
            .container {
              padding: 10px; 
            }
          }
          `
}</style> 
      <br></br>
      <div style={{backgroundImage: `url(${doctorbg})`, backgroundSize:"cover"}}>
        
        <button className="fetchAllReportsButton" onClick={fetchAllReports}>Filter All Reports Here</button>
        <div>
          <br></br>
          <br></br>
          <label className="boldLabel" htmlFor="datePicker"><b>DATE:</b> </label>
          <input className="smallInput"  type="date" id="datePicker" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
          <button onClick={fetchReportsByDate}>Filter Reports By Date</button>
        </div>
  
        <br></br>
  
        <div>
    <label className="boldLabel" htmlFor="genderPicker"><b>GENDER:</b></label>
    <select className="smallGender" id="genderPicker" value={selectedGender} onChange={e => setSelectedGender(e.target.value)}>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <button onClick={fetchReportsByGender}>Filter Reports By Gender</button>
  </div>
  <br></br>
        <div>
    <label className="boldLabel" htmlFor="monthYearPicker"><b>MONTH and YEAR:</b> </label>
    <input 
    className="smallMonthYear" 
      type="month" 
      id="monthYearPicker" 
      value={`${selectedMonthYear.year}-${selectedMonthYear.month}`} 
      onChange={e => setSelectedMonthYear({ ...selectedMonthYear, month: e.target.value.split('-')[1], year: e.target.value.split('-')[0] })}
    />
    {/* <select 
    className="smallYears" 
      id="yearPicker" 
      value={selectedMonthYear.year} 
      onChange={e => setSelectedMonthYear({ ...selectedMonthYear, year: e.target.value })}
    >
      <option value="">Select Year</option>
      {Array.from({ length: 2200 - 2000 + 1 }, (_, index) => {
        const year = 2200 - index;
        return <option key={year} value={year}>{year}</option>;
      })}
    </select> */}
    <button className="fetchReportsByMonthAndYear" onClick={fetchReportsByMonthAndYear}>Filter Reports By Month And Year</button>
  </div>
  <br></br>
  
  

         <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Gender</th>
              <th>Customer Phone Number</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
  
              <tr key={report.customerId}>
                   <td>{report.customerId}</td>
                <td>{report.customerName}</td>
                <td>{report.customerEmail}</td>
                <td>{report.gender}</td>
                <td>{report.customerPhno}</td>
                <td>{report.date}</td>
                <td>{report.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>  
    );
  }
  
  export default App;
  