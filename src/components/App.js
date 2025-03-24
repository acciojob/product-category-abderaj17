
import React from "react";
import './../styles/App.css';

const App = () => {


  const male = ["Shirt", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"];
  const female = ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"];

  
  return (
    <div>
       <select>
        <option>Male</option>
        <option>Female</option>
       </select>
    </div>
  )
}

export default App
