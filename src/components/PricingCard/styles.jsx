import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  padding: 32px 24px;
  text-align: center;


  @media (max-width: 768px) {
    transform: none;
  }
`;

export const Icon = styled.div`
  font-size: 28px;
`;

export const CardTitle = styled.h3`
  margin: 12px 0;
`;


export const Price = styled.div`
  font-size: 32px;
  margin: 16px 0;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const List = styled.ul`
  margin: 24px 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 8px;
  }
`;

export const Note = styled.p`
  font-size: 12px;
  color: #777;
`;

export const Button = styled.button`
  margin-top: auto;
  padding: 12px 24px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
`;
