import React, {useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
  fetch('http://localhost:8081/users')
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
  }, [])
  return(
  <div style={{padding: "100px", textAlign: "center"}}>
    <table style={{padding: "50px", color: "green", textAlign: "center"}}> 
      <thead>
        <th>ID</th>
        <th>KYC</th>
        <th>F-name</th>
        <th>l-name</th>
        <th>suffx</th>
        <th>email</th>
        <th>mobile</th>
        <th>address</th>
        <th>role</th>
        <th>status</th>
        <th>Date</th>
      </thead>
      <tbody>
        {data.map((d, i)=> (
          <tr key={i}>
             <td>{d.user_id}</td>
             <td>{d.ckyc_id}</td>
             <td>{d.first_name}</td>
             <td>{d.middle_name}</td>
             <td>{d.lastname}</td>
             <td>{d.suffix}</td>
             <td>{d.email_address}</td>
             <td>{d.mobile_number}</td>
             <td>{d.address}</td>
             <td>{d.role_id}</td>
             <td>{d.status}</td>
             <td>{d.created_at}</td>
          </tr>
        ) )}    
      
      </tbody>
    </table>
  
  </div>
  )
  }
  
export default App
