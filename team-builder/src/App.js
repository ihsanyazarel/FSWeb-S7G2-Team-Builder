import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [takim, setTakim] = useState([
    {
      name: "İhsan YAZAREL",
      email: "ihsanyazarel@gmail.com",
      role: "Full-Stack Web Developer",
    },
    {
      name: "Aytaç ŞAHİN",
      email: "aytacsahin@gmail.com",
      role: "Full-Stack Web Developer",
    },
    {
      name: "Serkan TORAMAN",
      email: "storaman@gmail.com",
      role: "Full-Stack Web Developer",
    },
  ]);
  const uyeEkle = (uye) => {
    setTakim([...takim, uye]);
  };
  return (
    <div>
      <div className="App">
        <h1>WORKINTECH EKİBİ</h1>
        {takim.map((item, index) => (
          <div className="uye" key={index}>
            <h2>{item.name}</h2>
            <h3>
              {item.role} - {item.email}
            </h3>
          </div>
        ))}
      </div>
      <Form uyeEkle={uyeEkle} />
    </div>
  );
}
export default App;
