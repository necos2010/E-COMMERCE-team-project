import { NavLink } from "react-router-dom";
import VideoModal from "./components/VideoModal";
import { useState } from "react";
import ScrollRevealWrapper from "../../components/AnimationScroll";


function Video() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedVid, setSelectedVid] = useState("")
  const vidData = [
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
    "https://www.youtube.com/embed/it4aTX9I1qc?si=xctdrdOVH3zHodID",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-Ra2s_i",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
    "https://www.youtube.com/embed/KJwYBJMSbPI?si=rRuUxaAm9U-R2s_i",
  ];

  if(openModal) {
    document.body.style.overflow = 'hidden'
    const header = document.querySelector("header")
    if(header) header.style.position = "static";
  } else{
    document.body.style.overflow = ''
    const header = document.querySelector("header")
    if(header) header.style.position = "";
  }

  const openModalVid = (videourl) => {
    setSelectedVid(videourl)
    setOpenModal(true)
  }

  return (
    <div className="container">
    <ScrollRevealWrapper>
      <div className="video-page-container">
        <h2 className="video-page-title">Video Sharxlar</h2>
        <div className="video-page-wrapper">
          {vidData.map((item, Index) => (
            <div className="partner-page-content" key={item} 
            onClick={() => openModalVid(item)}>
              <div className="partner-page-content" key={item}>
                <iframe
                  style={{pointerEvents:"none"}}
                  width="100%"
                  height="100%"
                  src={item}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  ></iframe>
              </div>
    
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealWrapper>
      {openModal && <VideoModal setOpenModal={setOpenModal} videoUrl={selectedVid}/>}
    </div>
  );
}

export default Video;
