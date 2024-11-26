// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import 'chart.js/auto';
// import './App.css';  // Import the CSS file
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css'; // Import slider styles

// function App() {
//   const [selectedSet, setSelectedSet] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedDays, setSelectedDays] = useState('');
//   const [cRate, setCRate] = useState(0.125);  // Add state for c_rate
//   const [consumptionData, setConsumptionData] = useState([]);
//   const [generationData, setGenerationData] = useState([]);
//   const [batteryData, setBatteryData] = useState([]);
//   const [gridData, setGridData] = useState([]);
//   const [socData, setSocData] = useState([]);  // Add state for socData
//   const [error, setError] = useState('');  // State for error messages

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const daysArray = selectedDays.split(',').map(day => day.trim());

//     // Basic validation
//     if (!selectedSet || !selectedMonth || !daysArray.length) {
//         setError("Please provide all inputs.");
//         return;
//     }

//     try {
//         const response = await axios.post('http://localhost:8000/api/data', {
//             selected_set: selectedSet,
//             selected_month: selectedMonth,
//             selected_days: daysArray,
//             c_rate: parseFloat(cRate)  // Include c_rate in the request
//         });

//         setConsumptionData(response.data.consumption);
//         setGenerationData(response.data.generation);
//         setBatteryData(response.data.battery);
//         setGridData(response.data.grid);
//         setSocData(response.data.soc);  // Set the SOC data
//         setError('');  // Clear error on successful response
//     } catch (error) {
//       if (error.response) {
//           // Error response from the server
//           setError(`Error: ${error.response.data.error || 'An unknown error occurred'}`);
//       } else if (error.request) {
//           // No response from the server
//           setError("Error: No response from the server");
//       } else {
//           // Other errors
//           setError(`Error: ${error.message}`);
//       }
//     }
//   };

//   const createChartData = (data) => {
//     const colors = [
//       'rgb(75, 192, 192)',  // Teal
//       'rgb(255, 99, 132)',  // Red
//       'rgb(255, 159, 64)',  // Orange
//       'rgb(255, 205, 86)',  // Yellow
//       'rgb(54, 162, 235)',  // Blue
//       'rgb(153, 102, 255)', // Purple
//       'rgb(255, 159, 64)',  // Orange
//     ];

//     return {
//       labels: Array.from({ length: 12 }, (_, i) => (i + 1) * 2),
//       datasets: data.map((dayData, index) => ({
//         label: `Day ${index + 1}`,
//         data: dayData,
//         fill: false,
//         borderColor: colors[index % colors.length]
//       })),
//       options: {
//         scales: {
//           y: {
//             beginAtZero: false // Ensure this is false, so negative values are displayed
//           }
//         }
//       }
//     };
//   };

//   return (
//     <div className="App">
//       <form className="form" onSubmit={handleSubmit}>
//         <label className="form-label">
//           Set:
//           <input className="form-input" type="text" value={selectedSet} onChange={(e) => setSelectedSet(e.target.value)} />
//         </label>
//         <label className="form-label">
//           Month:
//           <input className="form-input" type="number" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} />
//         </label>
//         <label className="form-label">
//           Days (comma separated):
//           <input className="form-input" type="text" value={selectedDays} onChange={(e) => setSelectedDays(e.target.value)} />
//         </label>
//         <label className="form-label">
//           C_rate:
//           <div className="slider-container">
//             <Slider
//               min={0}
//               max={0.5}
//               step={0.001}
//               value={cRate}
//               onChange={(value) => setCRate(value)}
//               trackStyle={{ backgroundColor: '#00bfff', height: 8 }}
//               handleStyle={{ borderColor: '#00bfff', height: 24, width: 24 }}
//               railStyle={{ backgroundColor: '#ddd', height: 8 }}
//             />
//             <span className="slider-value">{cRate.toFixed(3)}</span>
//           </div>
//         </label>
//         <button className="form-button" type="submit">Submit</button>
//         {error && <div className="error-message">{error}</div>}  
//       </form>

//       <div className="charts">
//         <div className="chart-row">
//           <div className="chart-container">
//             <h2>Consumption</h2>
//             <Line data={createChartData(consumptionData)} />
//           </div>
//           <div className="chart-container">
//             <h2>Generation</h2>
//             <Line data={createChartData(generationData)} />
//           </div>
//         </div>
//         <div className="chart-row">
//           <div className="chart-container">
//             <h2>Battery Level</h2>
//             <Line data={createChartData(batteryData)} />
//           </div>
//           <div className="chart-container">
//             <h2>Grid Energy</h2>
//             <Line data={createChartData(gridData)} />
//           </div>
//         </div>
//         <div className="chart-container">
//           <h2>State of Charge (SOC)</h2>
//           <Line data={createChartData(socData)} />  {/* Add SOC chart */}
//         </div>
//       </div>

//       <div className="info-section">
//         <p>
//           Our design uses lithium-ion cells, which are known for their great energy
//           density and reliability. Each cell had a capacity of 18Wh and a voltage
//           rating of 3.6V. To reach the target capacity, we will stack 1403 cells. The
//           way it was set up made a total voltage of 220V by connecting 61 cells in
//           series. This made it work with regular electrical systems. 23 cells were
//           connected parallel to fulfill the capacity requirement of 25KWH. This
//           good arrangement of wires that run in both directions saved a lot of
//           energy and still worked well.
//           Our solar-powered battery pack is a big step forward in the field of
//           sustainable energy storage technology. We have created a solution that
//           keeps up with the constantly changing needs of contemporary energy
//           systems. The pack is designed to help us move toward a cleaner and more
//           sustainable energy future.
//         </p>
//       </div>

//       <div className="image-container">
//         <img src='useme.jpg' alt='This contains the image of battery'/>
//       </div>
//     </div>
//   );
// }

// export default App;


// // import React, { useState } from 'react';
// // import { Line } from 'react-chartjs-2';
// // import axios from 'axios';
// // import 'chart.js/auto';
// // import './App.css';  // Import the CSS file

// // function App() {
// //   const [selectedSet, setSelectedSet] = useState('');
// //   const [selectedMonth, setSelectedMonth] = useState('');
// //   const [selectedDays, setSelectedDays] = useState('');
// //   const [cRate, setCRate] = useState(0.125);  // Add state for c_rate
// //   const [consumptionData, setConsumptionData] = useState([]);
// //   const [generationData, setGenerationData] = useState([]);
// //   const [batteryData, setBatteryData] = useState([]);
// //   const [gridData, setGridData] = useState([]);
// //   const [error, setError] = useState('');  // State for error messages

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const daysArray = selectedDays.split(',').map(day => day.trim());

// //     // Basic validation
// //     if (!selectedSet || !selectedMonth || !daysArray.length) {
// //         setError("Please provide all inputs.");
// //         return;
// //     }

// //     try {
// //         const response = await axios.post('http://localhost:8000/api/data', {
// //             selected_set: selectedSet,
// //             selected_month: selectedMonth,
// //             selected_days: daysArray,
// //             c_rate: parseFloat(cRate)  // Include c_rate in the request
// //         });

// //         setConsumptionData(response.data.consumption);
// //         setGenerationData(response.data.generation);
// //         setBatteryData(response.data.battery);
// //         setGridData(response.data.grid);
// //         setError('');  // Clear error on successful response
// //     } catch (error) {
// //         if (error.response) {
// //             // Error response from the server
// //             setError(Error: ${error.response.data.error || 'An unknown error occurred'});
// //         } else if (error.request) {
// //             // No response from the server
// //             setError("Error: No response from the server");
// //         } else {
// //             // Other errors
// //             setError(Error: ${error.message});
// //         }
// //     }
// // };

// // const createChartData = (data) => {
// //   const colors = [
// //     'rgb(75, 192, 192)',  // Teal
// //     'rgb(255, 99, 132)',  // Red
// //     'rgb(255, 159, 64)',  // Orange
// //     'rgb(255, 205, 86)',  // Yellow
// //     'rgb(54, 162, 235)',  // Blue
// //     'rgb(153, 102, 255)', // Purple
// //     'rgb(255, 159, 64)',  // Orange
// //   ];

// //   return {
// //     labels: Array.from({ length: 12 }, (_, i) => (i + 1) * 2),
// //     datasets: data.map((dayData, index) => ({
// //       label: Day ${index + 1},
// //       data: dayData,
// //       fill: false,
// //       borderColor: colors[index % colors.length]
// //     })),
// //     options: {
// //       scales: {
// //         y: {
// //           beginAtZero: false // Ensure this is false, so negative values are displayed
// //         }
// //       }
// //     }
// //   };
// // };

// // return (
// //   <div className="App">
// //     <form className="form" onSubmit={handleSubmit}>
// //       <label className="form-label">
// //         Set:
// //         <input className="form-input" type="text" value={selectedSet} onChange={(e) => setSelectedSet(e.target.value)} />
// //       </label>
// //       <label className="form-label">
// //         Month:
// //         <input className="form-input" type="number" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} />
// //       </label>
// //       <label className="form-label">
// //         Days (comma separated):
// //         <input className="form-input" type="text" value={selectedDays} onChange={(e) => setSelectedDays(e.target.value)} />
// //       </label>
// //       <label className="form-label">
// //         C_rate:
// //         <input className="form-input" type="number" step="0.001" value={cRate} onChange={(e) => setCRate(e.target.value)} />
// //       </label>
// //       <button className="form-button" type="submit">Submit</button>
// //       {error && <div className="error-message">{error}</div>}  
// //     </form>
// //     <div className="charts">
// //       <div className="chart-row">
// //         <div className="chart-container">
// //           <h2>Consumption</h2>
// //           <Line data={createChartData(consumptionData)} />
// //         </div>
// //         <div className="chart-container">
// //           <h2>Generation</h2>
// //           <Line data={createChartData(generationData)} />
// //         </div>
// //       </div>
// //       <div className="chart-row">
// //         <div className="chart-container">
// //           <h2>Battery Level</h2>
// //           <Line data={createChartData(batteryData)} />
// //         </div>
// //         <div className="chart-container">
// //           <h2>Grid Energy</h2>
// //           <Line data={createChartData(gridData)} />
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );
// // }

// // export default App;

// use: npm start






import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Modal from './Modal';
import axios from 'axios';
import 'chart.js/auto';
import './App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {
  const [selectedSet, setSelectedSet] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDays, setSelectedDays] = useState('');
  const [cRate, setCRate] = useState(0.125);
  const [consumptionData, setConsumptionData] = useState([]);
  const [generationData, setGenerationData] = useState([]);
  const [batteryData, setBatteryData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [batteryDifferenceData, setBatteryDifferenceData] = useState([]);
  const [error, setError] = useState('');
  const [expectedBill, setExpectedBill] = useState(0);   // New state for expected bill
  const [actualBill, setActualBill] = useState(0);       // New state for actual bill
  const [costReduced, setCostReduced] = useState(0);     // New state for cost reduced

  const handleSubmit = async (e) => {
    e.preventDefault();
    const daysArray = selectedDays.split(',').map(day => day.trim());

    if (!selectedSet || !selectedMonth || !daysArray.length) {
        setError("Please provide all inputs.");
        return;
    }

    try {
        const response = await axios.post('http://localhost:8000/api/data', {
            selected_set: selectedSet,
            selected_month: selectedMonth,
            selected_days: daysArray,
            c_rate: parseFloat(cRate)
        });

        setConsumptionData(response.data.consumption);
        setGenerationData(response.data.generation);
        setBatteryData(response.data.battery);
        setGridData(response.data.grid);
        setBatteryDifferenceData(response.data.battery_difference);
        setExpectedBill(response.data.expected_bill);       // Set expected bill
        setActualBill(response.data.actual_bill);           // Set actual bill
        setCostReduced(response.data.cost_reduced);         // Set cost reduced
        setError('');
    } catch (error) {
        if (error.response) {
            setError(`Error: ${error.response.data.error || 'An unknown error occurred'}`);
        } else if (error.request) {
            setError("Error: No response from the server");
        } else {
            setError(`Error: ${error.message}`);
        }
    }
  };

  // const createChartData = (data) => {
  //   const colors = [
  //     'rgb(75, 192, 192)',
  //     'rgb(255, 99, 132)',
  //     'rgb(255, 159, 64)',
  //     'rgb(255, 205, 86)',
  //     'rgb(54, 162, 235)',
  //     'rgb(153, 102, 255)',
  //   ];

  //   return {
  //     labels: Array.from({ length: 12 }, (_, i) => (i + 1) * 2),
  //     datasets: data.map((dayData, index) => ({
  //       label: `Day ${index + 1}`,
  //       data: dayData,
  //       fill: false,
  //       borderColor: colors[index % colors.length]
  //     }))
  //   };
  // };

  const createChartData = (data) => {
    const colors = [
      'rgba(75, 192, 192, 0.6)',
      'rgba(255, 99, 132, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(201, 203, 207, 0.6)'
    ];
  
    return {
      labels: Array.from({ length: 12 }, (_, i) => (i + 1) * 2),  // X-axis labels
      datasets: data.map((dayData, index) => ({
        label: `Day ${index + 1}`,
        data: dayData,
        backgroundColor: colors[index % colors.length],  // Different color for each day
        borderColor: colors[index % colors.length].replace('0.6', '1'),  // Full opacity for borders
        borderWidth: 1
      }))
    };
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Set:
          <input className="form-input" type="text" value={selectedSet} onChange={(e) => setSelectedSet(e.target.value)} />
        </label>
        <label className="form-label">
          Month:
          <input className="form-input" type="number" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} />
        </label>
        <label className="form-label">
          Days (comma separated):
          <input className="form-input" type="text" value={selectedDays} onChange={(e) => setSelectedDays(e.target.value)} />
        </label>
        <label className="form-label">
          C_rate:
          <div className="slider-container">
            <Slider
              min={0}
              max={0.5}
              step={0.001}
              value={cRate}
              onChange={(value) => setCRate(value)}
              trackStyle={{ backgroundColor: '#00bfff', height: 8 }}
              handleStyle={{ borderColor: '#00bfff', height: 24, width: 24 }}
              railStyle={{ backgroundColor: '#ddd', height: 8 }}
            />
            <span className="slider-value">{cRate.toFixed(3)}</span>
          </div>
        </label>
        <button className="form-button" type="submit">Submit</button>
        {error && <div className="error-message">{error}</div>}  
      </form>
      <div className="charts">
        <div className="chart-row">
          <div className="chart-container">
            <h2>Consumption</h2>
            <Bar data={createChartData(consumptionData)} />
          </div>
          <div className="chart-container">
            <h2>Generation</h2>
            <Bar data={createChartData(generationData)} />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-container">
            <h2>State Of Charge (SOC)</h2>
            <Bar data={createChartData(batteryData)} />
          </div>
          <div className="chart-container">
            <h2>Grid Energy</h2>
            <Bar data={createChartData(gridData)} />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-container">
            <h2>Energy I/O by Battery</h2>
            <Bar data={createChartData(batteryDifferenceData)} />
          </div>
        </div>
      </div>
      {/* New Section for Bills */}
      <div className={`billing-summary ${isModalOpen ? 'blur-background' : ''}`}>
      <button onClick={handleOpenModal}>View Billing Summary</button>
      {isModalOpen && (
        <Modal
          expectedBill={expectedBill}
          actualBill={actualBill}
          costReduced={costReduced}
          onClose={handleCloseModal}
        />
      )}
      </div>
    </div>
  );
}

export default App;
