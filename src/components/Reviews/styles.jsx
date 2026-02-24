import styled from "styled-components";

export const ReviewsWrapper = styled.section`
  padding: 5rem 1rem;
  padding-left: 10%;
  padding-right: 10%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};


  /* Bullets */
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.accent} !important;
    opacity: 1 !important;
    width: 10px;
    height: 10px;
  }



  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.bulletsActives} !important;
    transform: scale(1.2);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.accent};
    width: 2.5rem;
    height: 2.5rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
`;

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* CENTRA todo */
  gap: 0; /* tiene que ser 0, porque el overlap lo hacemos manual */
  padding: 3rem 0;
  min-height: 450px;
  width: 100%;
  overflow: visible;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0;
    min-height: auto;
  }
`;

export const PhotoWrapper = styled.div`
  width: 420px;
  height: 420px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  /* FOTO IZQUIERDA */
${({ $layout }) =>
  [0, 1, 4].includes($layout) &&
  `
    order: 1;
  `}

  /* FOTO DERECHA */
${({ $layout }) =>
  [2, 3, 5].includes($layout) &&
  `
    order: 2;
  `}

  @media (max-width: 900px) {
    order: 1;
    width: 100%;
    height: 350px;
  }
`;


export const ClientPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  background: ${({ theme }) => theme.components.reviews.textBox.background};
  color: ${({ theme }) => theme.components.reviews.textBox.text};
  box-shadow: ${({ theme }) => theme.components.reviews.textBox.shadow};
  position: relative;
  padding: 2rem;

  /* 🔥 Permite expansión horizontal */
  width: ${({ $expanded }) => ($expanded ? "520px" : "350px")};
  max-width: min(520px, 90vw);

  min-height: 220px;
  z-index: 2;
  border-radius: ${({ theme }) => theme.borderRadius};

  transition: width 0.4s ease, transform 0.4s ease;

  /* ===== LAYOUTS ===== */

  ${({ $layout, $expanded }) => {
    /* Ajuste dinámico de desplazamiento horizontal */
    const offset = $expanded ? 90 : 50;
    const smallOffset = $expanded ? 50 : 30;

    switch ($layout) {
      case 0:
        return `
          order: 2;
          transform: translateX(-${offset}px);
        `;

      case 1:
        return `
          order: 2;
          transform: translate(-${offset}px, -80px);
        `;

      case 2:
        return `
          order: 1;
          transform: translate(${smallOffset}px, -20px);
        `;

      case 3:
        return `
          order: 1;
          transform: translate(${offset}px, 0);
        `;

      case 4:
        return `
          order: 2;
          transform: translate(-${offset}px, 40px);
        `;

      case 5:
        return `
          order: 1;
          transform: translate(${offset}px, 30px);
        `;

      default:
        return "";
    }
  }}

  /* ===== MOBILE ===== */
  @media (max-width: 900px) {
    order: 2;
    transform: none;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

  export const ClientName = styled.h3`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.components.reviews.textBox.name};
  a & {
    cursor: pointer;
  }
`;

export const ClientText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 0.5rem;
  line-height: 1.6;
  word-break: break-word;
  color: ${({ theme }) => theme.components.reviews.textBox.text};

  /* ===== SOLO DESKTOP ===== */
  @media (min-width: 769px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ $expanded }) => ($expanded ? "none" : 6)};
    overflow: hidden;
    max-height: ${({ $expanded }) =>
      $expanded ? "none" : "calc(1.6em * 6)"};
    transition: all 0.3s ease;
  }
`;

export const ClientLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  margin-top: 1rem;
    text-decoration: none;

  &:hover h4 {
    text-decoration: underline;
  }
`;

export const Divider = styled.div `
width: 20%;
height: 1px;
margin: 1rem 0;
background: ${({ theme }) => theme.components.reviews.textBox.text};
`;

export const ShowMoreButton = styled.button`
  background: none;
  border: none;
  margin-top: 0.5rem;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    text-decoration: underline;
  }
`;
