import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 64px 16px;

`;


export const CategoryCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  min-height: 380px;
  justify-content: center;


  @media (max-width: 768px) {
    flex-direction: column; // móvil: columna
    min-height: auto;
  }
`;


export const PhotoWrapper = styled.div`
  flex: 1;
  width:600px;
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
  object-position: center;
  transition: transform 0.3s;
  border:none;

  &:hover {
    transform: scale(1.05);
  }
`;


export const InfoBox = styled.div`
  background: #fff;
  padding: 16px 24px;
  flex: 0 0 300px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;


  margin-left: -80px;
  z-index: 2;

  h2 {
    margin: 0 0 12px 0;
    font-size: 20px;
    text-align: center;
  }

  button {
    padding: 10px 16px;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #333;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 0;
    max-height: 150px;
    z-index: 1;
    box-shadow: none;

  }
`;
