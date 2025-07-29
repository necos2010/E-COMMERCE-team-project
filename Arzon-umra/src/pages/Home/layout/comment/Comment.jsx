import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // faqat Navigation qoldi
import 'swiper/css';
import 'swiper/css/navigation';
import cdata from "../../../../data/coment";

function Comment() {
  return (
    <div className="comment-container">
      <h2 className="comment-title">Fikir va mulohazalar</h2>
      <div className="comment-big-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation // navigation tugmalarini ochiq qoldiramiz
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cdata.map((item) => (
            <SwiperSlide key={item.id}>
              <CommentItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function CommentItem({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  return (
    <div className="comment">
      <div className="comment-user">
        <img src={`/${item.icon}`} alt="user_name" />
        <h4 className="comment-user-name">{item.user_name}</h4>
      </div>
      <p className="user-comments">
        {isExpanded ? item.comment : item.comment.slice(0, maxLength)} 
        {item.comment.length > maxLength && !isExpanded && "..."}
      </p>
      {item.comment.length > maxLength && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="read-more-btn">
          {isExpanded ? 
            <i style={{transform:"rotate(273deg)",marginLeft:"5px"}} className="fa-solid fa-angle-right"></i> : 
            <p>Ko‘proq o‘qish <i style={{transform:"rotate(90deg)",marginLeft:"5px"}} className="fa-solid fa-angle-right"></i></p>
          }
        </button>
      )}
    </div>
  );
}

export default Comment;
