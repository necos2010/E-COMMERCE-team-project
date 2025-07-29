import { img } from 'framer-motion/client'
import React from 'react'

function AviaContents() {
    const ContentData = [
        {id: 1, img: "rossiyaImg.svg", city: "Moskva", country: "Rossiya"},
        {id: 2, img: "seulImg.svg", city: "Seul", country: "Korea"},
        {id: 3, img: "almataImg.svg", city: "Almata", country: "Qozog'iston"},
        {id: 4, img: "abuDabiImg.svg", city: "Abu-Dabi", country: "Dubai"},
        {id: 5, img: "londonImg.svg", city: "London", country: "Buyuk Britaniya"},
        {id: 6, img: "istanbulImg.svg", city: "Istanbul", country: "Turkiya"},
        {id: 7, img: "sankPeterburgImg.svg", city: "Sank Peterburg", country: "Rossiya"},
        {id: 8, img: "novosibirskImg.svg", city: "Novosibirsk", country: "Rossiya"},
    ]
  return (
    <div className='avia-contents-container'>
        <h2>MASHXUR YO'NALISHLAR</h2>
        <div className="avia-contents-wrapper">
            {ContentData.map((item) => {
                return (
                    <div className="avia-page-contents" key={item.id}>
                        <img style={{width:"40px",marginRight:"10px"}} src={`/${item.img}`} alt={item.country} />
                        <div className="avia-content-texts-wrapper">
                            <h4>{item.city}</h4>
                            <p>{item.country}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AviaContents
