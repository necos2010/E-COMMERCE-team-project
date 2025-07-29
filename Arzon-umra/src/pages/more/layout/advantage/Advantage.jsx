import React from 'react'

function Advantage() {
    const advantageData = [
        {
            id: 1,
            title: "Tajribali ellikboshilar",
        },
        {
            id: 2,
        },
        {
            id: 3,
            title: "Shinam mehmonxonalar",
        },
        {
            id: 4,
            title: "Sifatli avia kompaniyalar",
        },
        {
            id: 5,
            title: "Hojilarga samimiy ga’mxo’rliklar",
        },
        {
            id: 6,
            title: "24/7 shifokorlar nazorati",
        },
        {
            id: 7,
            title: "Hojilarni holatidan onlayn lavhalar",
        },
        {
            id: 8,
            title: "Sifatli taomlar",
        },
        {
            id: 9,
            title: "Tarixiy va ilmiy suhbatlar",
        },
    ]

  return (
      <div className='advantage-container'>
      <h2 className="advantage-title">Avzalligi</h2>
      <div className="advantage-wrapper">
        {advantageData.map((item) => (
            <div className="advantage-card" key={item.id}>
                <img src={`/advantage${item.id}.svg`} alt="" />
                <p>{item.title}</p>
            </div>
        ))}
            </div>
      </div>
  )
}

export default Advantage
