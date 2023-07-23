import React, { useState } from 'react';
import Form from './Form'
import './App.css'

function App() {
  const [takim, setTakim] = useState([
    { name: 'İhsan YAZAREL', email: 'ihsanyazarel@gmail.com', role: 'Full-Stack Developer' },
    { name: 'Aytaç Şahin', email: 'aytacsahin@gmail.com', role: 'Full-Stack Developer' },
    { name: 'Serkan Toraman', email: 'storaman@gmail.com', role: 'Full-Stack Developer' },
  ]);
  const uyeEkle = (uye) => {
    setTakim([...takim, uye]);
  };
  return (
    <div className="App">
      <h1>WORKINTECH EKİBİ</h1>
        {takim.map((item, index) => (
          <div key={index}>
          <h2>{item.name}</h2> 
          <h3 >
            {item.role} - {item.email}
          </h3>
          </div>
        ))}
      <Form uyeEkle={uyeEkle}/>
    </div>
  );
}
export default App;