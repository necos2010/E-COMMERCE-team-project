import React from 'react'

function Hotel() {
  return (
    <div className='hotel-container'>
      <div className="texts-wrapper">
        <h3>Anjum hotel <span>(haramdan 50 metr)</span></h3>
        <img src="/five-stars.svg" alt="stars" />
        <p>Anjum Hotel – bu Saudiya Arabistonidagi Makka shahrida joylashgan zamonaviy mehmonxona. U Masjid al-Haramga yaqin joyda, ziyoratchilar uchun qulay joylashuvda bo‘lib, muqaddas Ka’ba manzarasini taqdim etadi. Mehmonxona mehmonlar uchun turli xil qulayliklar bilan ta’minlangan: keng va shinam xonalar, zamonaviy interyer, bepul Wi-Fi, yuqori sifatli xizmat va xonadan ovqat buyurtma qilish imkoniyati. Anjum Hotel shuningdek, xalqaro restoran, jamoat zallari va majlislar uchun ajratilgan hududlarga ham ega bo‘lib, bu uni nafaqat ziyoratchilar, balki biznes tashriflari uchun ham mos qiladi.</p>
      </div>
      <div className="hotel-images-wrapper">
        <div className="hotel-small-img-wrapper">
            <img src="/hotel1.svg" alt="hotel" />
            <img src="/hotel2.svg" alt="hotel" />
        </div>
        <img src="/hotel3.svg" alt="hotel" />
      </div>
    </div>
  )
}

export default Hotel
