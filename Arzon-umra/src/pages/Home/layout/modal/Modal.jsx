import React, { useState } from "react";

function Modal({ setOpenModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, phone };
    localStorage.setItem("userdata", JSON.stringify(userData));
    console.log("Ro'yhatdan o'tdingiz", name);
    setOpenModal(false);
};


  return (
    <div className="modal-overlay" onClick={() => setOpenModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title-wrapper">
          <h3>Bog’lanish</h3>
          <i className="fa-solid fa-xmark" onClick={() => setOpenModal(false)}></i>
        </div>
        <p className="modal-text">
          Ma’lumotlaringizni qoldiring va operatirim tez orada sizga aloqaga
          chiqadi
        </p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Isim sharifingizni kiriting"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="+998"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className="submit-button" type="submit">Yuborish</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
