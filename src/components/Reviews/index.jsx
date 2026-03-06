import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  ClientLink,
  ClientName,
  ClientPhoto,
  ClientText,
  Divider,
  PhotoWrapper,
  ReviewsWrapper,
  ShowMoreButton,
  SlideWrapper,
  TextBox
} from "./styles";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Title from "../ui/Title";
import api from "../../services/api";
import { getImageUrl } from "../../utils/getImageUrl";
import { useData } from "../../utils/DataContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Reviews() {
  const { reviews, setReviews } = useData();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const [expandedId, setExpandedId] = useState(null);
  const [overflowMap, setOverflowMap] = useState({});
  const textRefs = useRef({});
  const swiperRef = useRef(null);

  useEffect(() => {
    if (reviews) return;

    const fetchReviews = async () => {
      try {
        const res = await api.get("/reviews");
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setReviews(data);
      } catch (err) {
        console.error("Error loading reviews:", err);
      }
    };

    fetchReviews();
  }, [reviews, setReviews]);

  // 🔥 Detecta overflow real después del render
  useLayoutEffect(() => {
    if (!reviews) return;

    const newOverflowMap = {};

    reviews.forEach((r) => {
      const el = textRefs.current[r.id];
      if (el) {
        newOverflowMap[r.id] = el.scrollHeight > el.clientHeight;
      }
    });

    setOverflowMap(newOverflowMap);
  }, [reviews, expandedId]);

  if (!reviews) return <p>Cargando reseñas...</p>;
  if (reviews.length === 0) return <p>No hay reseñas disponibles.</p>;

  return (
    <ReviewsWrapper>
      <Title>Reviews</Title>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        effect={isDesktop ? "fade" : "slide"}
        loop
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoHeight
      >
        {reviews.map((r, index) => {
          const layout = index % 6;
          const isValidLink =
            typeof r.link === "string" && r.link.startsWith("http");

          const isExpanded = expandedId === r.id;
          const isOverflowing = overflowMap[r.id];

          return (
            <SwiperSlide key={r.id}>
              <SlideWrapper>
                <PhotoWrapper $layout={layout}>
                  <ClientPhoto
                    src={getImageUrl(r.client_photo)}
                    alt={r.client_name}
                  />
                </PhotoWrapper>

                <TextBox
                  $layout={layout}
                  $expanded={isExpanded}
                >
                  <ClientText
                    ref={(el) => (textRefs.current[r.id] = el)}
                    $expanded={isExpanded}
                  >
                    {r.review_text}
                  </ClientText>

                  {(isOverflowing || isExpanded) && (
                    <ShowMoreButton
                      onClick={() => {
                        setExpandedId(isExpanded ? null : r.id);
                        // 🔥 Recalcula altura Swiper
                        setTimeout(() => {
                          if (swiperRef.current) swiperRef.current.updateAutoHeight(300); // 300ms transición
                        }, 50);
                      }}
                    >
                      {isExpanded ? "Show less" : "Show more"}
                    </ShowMoreButton>
                  )}

                  <Divider />

                  {isValidLink ? (
                    <ClientLink
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ClientName>{r.client_name}</ClientName>
                    </ClientLink>
                  ) : (
                    <ClientName>{r.client_name}</ClientName>
                  )}
                </TextBox>
              </SlideWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ReviewsWrapper>
  );
}

export default Reviews;
