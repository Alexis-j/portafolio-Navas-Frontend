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
  width: 100%;
  max-width: 1300px;
  min-height: 380px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const PhotoWrapper = styled.div`
  flex: 1;
  width: 600px;
  height: 500px;
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
  object-fit: cover;
  transition: transform 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.02);
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

  margin-left: -80px;
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
