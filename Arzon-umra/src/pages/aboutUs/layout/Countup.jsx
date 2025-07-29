import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Countup() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const countData = [
    {
      title: "HAMKORLAR",
      countNum: "25",
    },
    {
      title: "MEHMONLAR",
      countNum: "50",
    },
    {
      title: "BAXTLI ZIYORATCHILAR",
      countNum: "5000",
    },
    {
      title: "OBUNALAR",
      countNum: "10000",
    },
  ];

  return (
    <div className="countup-container">
      {countData.map(({ title, countNum }, index) => (
        <div ref={ref} key={index}>
          <h1>
            {inView ? (
              <CountUp
                start={0}
                end={Number(countNum)}
                duration={4}
                delay={0.04}
              />
            ) : (
              0
            )}
            +
          </h1>
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Countup;
