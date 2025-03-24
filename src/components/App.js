
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const [selectedCategory, setSelectedCategory] = useState("Male");

const products = {
  Male: ["Shirt", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"],
  Female: ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"],
};

  

  return (
    <div>
       <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       </select>

       <ul>
       {products[selectedCategory].map((item, index) =>(
        <li key={index}>{item}</li>
       ))}
        </ul>
    </div>
  )
}

export default App
