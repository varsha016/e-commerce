import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { employeeStatAction } from '../../redux/admin/action/employeeAction';
import { employeeData } from '../../redux/admin/reducer/employeeReducer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
     const dispatch= useDispatch()
    const {stats}=  useSelector(employeeData)
  
  useEffect(() => {
    
    dispatch(employeeStatAction())
 
  }, [])

const data = {
  labels: ["online","CoD","cancel"],
  datasets: [
    {
      label: '# payment',
      data: [stats&&stats.paidOrders,stats&&stats.cOdOrders,stats?.cancelOrders],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  
  return <>
  
  {JSON.stringify(stats,null,2)}



<div style={{width:"200px"}}>

 <Doughnut data={data}  />;
</div>




  
  
  </>
}

export default Dashboard