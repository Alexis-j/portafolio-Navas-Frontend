import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  h1 {
  display: flex;
  justify-content: center;
  text-align: center;

  }
`;

export const CategoryCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 1600px;   /* 🔥 clave */
  margin: 0 auto;     /* centra */


  /* 🖥 Desktop / Tablet */
  height: 70vh;
  min-height: 500px;
  max-height: 800px;

  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    /* 📱 Mobile */
    height: auto;
    min-height: unset;
    max-height: unset;

    aspect-ratio: 16 / 9;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
  }
`;
