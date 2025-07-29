import React from "react";

function airBanner() {
  return (
    <>
      <div className="avia-tickets-container">
        <form className="avia-tickets-list-wrapper">
          <div className="avia-tickets-list" style={{position:"relative"}}>
            <input
              type="text"
              className="first-childs-of-tickets"
              placeholder="Qayerdan"
              required
            />
            <img src="/arrow-2.svg" alt="" style={{position:"absolute", cursor:"pointer",top:"19px"}} />
            <input
              type="text"
              className="second-childs-of-tickets"
              placeholder="Qayerga"
              required
            />
          </div>
          <div className="avia-tickets-list">
            <input placeholder="ketish" type="date" required className="first-childs-of-tickets" />
            <input placeholder="qaytish" type="date" required className="second-childs-of-tickets" />
          </div>
              <select className="particular">
                <option selected value="Klass">Klass</option>
                <option value="Econom">Econom</option>
                <option value="Standart">Standart</option>
                <option value="Konfort">Konfort</option>
                <option value="Lux">Lux</option>
                <option value="Vip">Vip</option>
              </select>
          <button type="submit" className="avia-tickets-list-btn">
            Chiptani topish
          </button>
        </form>
      </div>
    </>
  );
}

{
  /* <div className="avia-tickets-container">
    <ul style={{position:"relative"}} className="avia-tickets-list">
        <li className='first-childs-of-tickets'>Qayerdan</li>
        <li style={{position:"absolute",cursor:"pointer",boxShadow:"none",textAlign:"center",display:"flex",justifyContent:"center", alignItems:"center"}}><img src={arrowImg} alt="" /> </li>
        <li className='second-childs-of-tickets'>Qayerga</li>
    </ul>
    <ul className="avia-tickets-list">
        <li className='first-childs-of-tickets'><img style={{marginRight:"5px"}} src="/public/calendar-2.svg" alt="" />Ketish</li>
        <li className='second-childs-of-tickets'>Qaytish</li>
    </ul>
        <select className='particular'> 
          <option>Econom</option>
          <option>Standart</option>
          <option value={3}>Confort</option>
          <option value={4}>Lux</option>
          <option value={5}>Vip</option>
        </select>
      <ul className="avia-tickets-list">
        <li className='avia-tickets-list-btn'>chiptani topish</li>
      </ul>
</div> */
}
export default airBanner;
