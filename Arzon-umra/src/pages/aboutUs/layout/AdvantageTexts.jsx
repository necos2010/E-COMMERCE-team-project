import React, { useState } from "react";

function AdvantageTexts() {
    const [goal, setGoal] = useState(false)
    const [advantage, setAdvantage] = useState(false)
    const [history, setHistory] = useState(false)
    

  return (
    <div className="aboutus-texts-container">
      <div className="aboutus-text-wrapper">
        <div className="plus-minus-title-wrapper">
            <h3>Maqsadimiz</h3>
            {goal && <i onClick={() => setGoal(false)} class="fa-solid fa-minus"></i>}
           {!goal && <i onClick={() => setGoal(true)} class="fa-solid fa-plus"></i>}
        </div>
        {goal && <p>
            Bizning maqsadimiz Umraga faqat boy odam boradi degan tushuncha
            noto’g’riligini ko’rsatish. Ko’plab qiynalgan qatlamlarning umra
            qilishiga borganda Bizlarni Musulmonlarni Millatni duo qilsin. Ko’p
            ko’p vatandoshlarning sifatli ishonchli Umra qilishiga sababchi
            bo’lish. Bu loyihamiz O’zbekistondagi hamma fuqarolarimiz
            foydalanadigan qilib kengaytirish
        </p>}
      </div>
      <hr />
      <div className="aboutus-text-wrapper">
      <div className="plus-minus-title-wrapper">
            <h3>Afzaliklarimiz</h3>
            {advantage && <i onClick={() => setAdvantage(false)} class="fa-solid fa-minus"></i>}
           {!advantage && <i onClick={() => setAdvantage(true)} class="fa-solid fa-plus"></i>}
        </div>
        {advantage && <p>
          Xar bir Musulmon bu ulug’ umra amalini bajarishni kamida bir karta
          bo’lsa ham istaydi Shu ulug’ ishlarni qilishga bizni sababchi qilgan
          Robbimizga hamdlar bo’lsin. Umra paketlarning avzaligi Fuqarolarning
          Safar davomida mukammal ibodat qilishi  Borgan muqaddas joylarining
          mohiyatini aziz mukarramligini his qilishi. Ularning safar davomida
          sog’liqlari va Ibodatga oid tushunchalari Ko’chada va  Haramda yuqolib
          qolmasliklari uchun bejiklar bilan taminlash va doimiy tushunchalar
          berish Telegram guruppa ochib kunlik xabar boradigan joylarni takidlab
          turish Oila azolarini online xabardor qilib turish. Muntazam ilmiy
          suxbatlar qilib turish umraga va muqaddas joylarga oid barcha
          savollarga javob berish.
        </p>}
      </div>
      <hr />
      <div className="aboutus-text-wrapper">
      <div className="plus-minus-title-wrapper">
            <h3>Tariximiz</h3>
            {history && <i onClick={() => setHistory(false)} class="fa-solid fa-minus"></i>}
           {!history && <i onClick={() => setHistory(true)} class="fa-solid fa-plus"></i>}
        </div>
        {history && <p>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Morem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </p>}
      </div>
    </div>
  );
}

export default AdvantageTexts;
