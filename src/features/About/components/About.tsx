import React, { useState, useEffect } from 'react';
import styles from '../About.module.css';
import tom from '../../../assets/Tom.png';
import emma from '../../../assets/Emma.png';
import smith from '../../../assets/Smith.png';
import twoNegr from '../../../assets/ikkitaNegr.png';
import User from '../../../hooks/User'
import car from '../../../assets/car.svg'
import checked from '../../../assets/checked.svg'
import headphone from '../../../assets/headphone.svg'
import wollet from '../../../assets/kashlok.svg'
import money from '../../../assets/money.svg'
import shop from '../../../assets/shop.svg'
import dollar from '../../../assets/dollar.svg'


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { id: 1, image: tom, name: "Tom Cruise", position: "Founder & Chairman" },
    { id: 2, image: emma, name: "Emma Watson", position: "Managing Director" },
    { id: 3, image: smith, name: "Will Smith", position: "Product Designer" },
    { id: 4, image: tom, name: "John Doe", position: "Marketing Director" },
    { id: 5, image: emma, name: "Jane Smith", position: "Sales Manager" },
    { id: 6, image: smith, name: "Mike Johnson", position: "UX Designer" },
    { id: 7, image: tom, name: "Sarah Williams", position: "HR Manager" },
    { id: 8, image: emma, name: "David Brown", position: "CTO" },
    { id: 9, image: smith, name: "Lisa Taylor", position: "CEO" },
    { id: 10, image: tom, name: "Robert Wilson", position: "Developer" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (teamMembers.length - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? teamMembers.length - 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % (teamMembers.length - 2));
  };

  const visibleMembers = [];
  for (let i = 0; i < 3; i++) {
    const memberIndex = (currentIndex + i) % teamMembers.length;
    visibleMembers.push(teamMembers[memberIndex]);
  }

  return (
    <div className={styles.aboutContainer}>
<User/>
      {/* OUR STORY SECTION */}
      <div className={styles.storySection}>
        <div className={styles.storyText}>
            <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with
            an active presence in Bangladesh. Supported by a wide range of tailored marketing,
            data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves
            3 million customers across the region.
          </p>
          <p>
            Exclusive offers a diverse assortment in categories ranging from consumer goods to
            fashion, growing at a very fast rate with over 1 million products.
          </p>
        </div>
        <div className={styles.storyImageWrapper}>
        
          <img src={twoNegr} alt="Our Story" className={styles.storyImage} />
        </div>
      </div>
{/* <div className={styles.malumotlarSection}>
  <div className={styles.box}>
    <img src={shop} alt="" />
    <p className={styles.boxp}>
      Sallers active our site
    </p>
  </div>
   <div className={styles.boxx}>
    <img src={dollar} alt="" />
     <p className={styles.boxp}>
      Mopnthly Produduct Sale
    </p>
  </div>
   <div className={styles.box}>
    <img src={wollet} alt="" />
     <p className={styles.boxp}>
      Customer active in our site
    </p>
  </div>
   <div className={styles.box}>
    <img src={money} alt="" />
     <p className={styles.boxp}>
      Anual gross sale in our site
    </p>
  </div>
</div> */}
   <div className={styles.stats}>
  <div className={styles.card}>
    <img src={shop} alt="" />
    <h2 className={styles.h2}>10.5k</h2>
    <p>Sellers active our site</p>
  </div>

  <div className={`${styles.card} ${styles.card}`}>
    <img src={dollar} alt="" />
    <h2 className={styles.h2}>33k</h2>
    <p>Monthly Product Sale</p>
  </div>

  <div className={styles.card}>
    <img src={wollet} alt="" />
    <h2 className={styles.h2}>45.5k</h2>
    <p>Customer active in our site</p>
  </div>

  <div className={styles.card}>
    <img src={money} alt="" />
    <h2 className={styles.h2}>25k</h2>
    <p>Annual gross sale in our site</p>
  </div>
</div>

      {/* TEAM MEMBERS CAROUSEL */}
      <div className={styles.teamCarousel}>
        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={goToPrev}>&lt;</button>

          <div className={styles.membersGroup}>
            {visibleMembers.map(member => (
              <div key={member.id} className={styles.boxes}>
                <img src={member.image} alt={member.name} />
                <h1 className="big-text">{member.name}</h1>
                <p className="members-p">{member.position}</p>
              </div>
            ))}
          </div>

          <button className={styles.carouselArrow} onClick={goToNext}>&gt;</button>
        </div>

        <div className={styles.carouselIndicators}>
          {teamMembers.slice(0, teamMembers.length - 2).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.secutity}>
        <div className={styles.secutitybox}>
          <img src={car} alt="" />
          <h1>FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
          <div className={styles.secutitybox}>
          <img src={headphone} alt="" />
          <h1>FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
          <div className={styles.secutitybox}>
          <img src={checked} alt="" />
          <h1>FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>

    </div>

    
  );
};

export default About;
