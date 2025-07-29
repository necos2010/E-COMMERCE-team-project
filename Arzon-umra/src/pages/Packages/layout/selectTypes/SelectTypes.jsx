import React from "react";

function SelectTypes() {
  const select1 = [
    "Avia kompaniyalar",
    "Qanot Sharq (Tranzit)",
    "Qanot Sharq (Pramoy)",
    "Uzbekistan Airways (Tranzit)",
    "Uzbekistan Airways (Pramoy)",
    "Centerum Air (Tranzit)",
    "Air Samarkand (Tranzit)",
    "Air Samarkand (Pramoy)",
  ]
  const select2 = [
    "Econom",
    "Standart",
    "Comfort",
    "Lux",
    "Vip",
  ]
  const select3 = [
    "Letsfly",
    "Salaam Travel",
    "Risola Tourism",
    "Fly Khiva",
    "Real Dreams",
    "Turon Travel"
  ]
 
  const select4 = [
    "0-50 Metr",
    "50-100 Metr",
    "100-500 Metr",
    "500-1000 Metr",
    "1000-2000 Metr",
  ]
   
  return (
    <div className="select-container">
      <select className="select-types">
        {select1.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      <select className="select-types">
        {select2.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      <select className="select-types">
        {select3.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      <select className="select-types">
        {select4.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectTypes;
