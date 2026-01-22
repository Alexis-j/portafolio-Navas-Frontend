import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(2)};
`;

export const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 1300px;
  min-height: 380px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    width: 100%;
  }
`;

export const PhotoWrapper = styled.div`
  flex: 1;
  width: 850px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const CategoryPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;           /* ocupa todo el espacio */
  object-position: center;     /* centra la parte importante de la foto */
  transform: scale(1.08);
  transition: transform 0.6s ease;

  ${PhotoWrapper}:hover & {
    transform: scale(1);       /* efecto de "alejar" al hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const InfoBox = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;

  background: ${({ theme }) => theme.components.reviews.textBox.background};
  color: ${({ theme }) => theme.components.reviews.textBox.text};
  box-shadow: ${({ theme }) => theme.components.reviews.textBox.shadow};

  margin-left: -80px; /* mantiene el InfoBox sobre la foto */
  z-index: 2;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.components.reviews.textBox.name};
    text-align: center;
  }

  button {
    padding: ${({ theme }) => theme.spacing(1.25)} ${({ theme }) => theme.spacing(2)};
    cursor: pointer;
    border-radius: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    max-height: 150px;
    z-index: 1;
    box-shadow: none;
  }
`;
