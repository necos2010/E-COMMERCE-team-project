import React from 'react'

function Info() {

    const smldata = [
        {
            id: 1,
            title: "Davomiyligi",
            comment: "15 kun",
        },
        {
            id: 2,
            title: "Ziyorat davri",
            comment: "09.11.2024 - 24.11.2024",
        },
        {
            id: 3,
            title: "Viza turi",
            comment: "Umra viza",
        },
        {
            id: 4,
            title: "Ekskursiya",
            comment: "Qubo - Uxud - Arofat",
        },
        {
            id: 5,
            title: "Taomlanish",
            comment: "2-3 mahal",
        },
        {
            id: 6,
            title: "Tibbiyot xizmati",
            comment: "Malakali shifokorlar va sug’urta",
        },
        {
            id: 7,
            title: "Transport",
            comment: "24/7 transport hizmati",
        },
        {
            id: 8,
            title: "Sovg’alar",
            comment: "Sumka, Beyjik, Zam Zam suvi",
        },
    ]

  return (
    <div className='info-container'>
      {smldata.map((item) => (
        <div className="info-cards" key={item.id}>
            <img src={`/info${item.id}.svg`} />
            <div className="info-texts-wrapper">
                <p style={{fontFamily:"lato",fontSize:"16px",fontWeight:"400",color:"rgba(0, 0, 0, 0.5)"}}>{item.title}</p>
                <p style={{fontFamily:"lato",fontSize:"16px",fontWeight:"400",color:"rgba(0, 0, 0, 1)"}}>{item.comment}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Info
