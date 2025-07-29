import { useState } from "react"

function requestInputs({ isMobile }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, phone };
        localStorage.setItem("userdata", JSON.stringify(userData));
        console.log("Ro'yhatdan o'tdingiz", name);
        setOpenModal(false);
    };

  return (
    <div className='inputs-container'>
      <form className="inputs-wrapper" onSubmit={handleSubmit}>
        {isMobile && <div className="request-input-wrapper">
          <p className="request-input-to-order">Buyurtma qilish</p>
          <h3 className="request-input-min-price">1239$ dan boshlab</h3>
        </div>}
        <div className="input-content">
            <p>To’liq ismingiz</p>
            <input
            type="text"
            placeholder="To'liq ismingizni kiriting"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-content">
            <p>Telefon raqamingiz</p>
            <input
            type="phone"
            placeholder="+998"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-content">
            <p>Ziyoratchilar soni</p>
            <input
            type="text"
            disabled
            value={2}
          />
        </div>
        <button type="submit">Buyurma berish</button>
      </form>
    </div>
  )
}

export default requestInputs
