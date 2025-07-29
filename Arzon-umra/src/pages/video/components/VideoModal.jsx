import React, { useState } from 'react'

function VideoModal({ setOpenModal, videoUrl }) {

  return (
    <div className='modal-overlay' onClick={() => setOpenModal(false)}>
      <div className="video-modal-container">
      <iframe
          style={{borderRadius:"20px", filter:"blur(none)"}}
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
    </div>
  )
}

export default VideoModal
