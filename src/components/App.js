import React, { useEffect, useState } from 'react'

import '../styles/App.css';

const list = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
   const [data,setData] = useState()
  // console.log(list[data]);
  return (
    <div id="main">
      <select onChange={(e)=>{setData(e.target.value)}}>
      <option value={null}></option>
     {Object.keys(list).map((yr,i)=>{
      return <option value={yr} key={i}>{yr}</option>
     })}
      </select>
      <div id="selected-year">{data? `Selected year-${data}` :'No year selected'}</div>
      <ul>
        {data && list[data].map((mov,index)=>
          (<li key={index}>{mov}</li>)
        )}
      </ul>
    </div>
  )
}


export default App;
