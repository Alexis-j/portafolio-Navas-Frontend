import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.priceCard};
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border}30;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  @media (max-width: 768px) {
    min-height: auto;
    transform: none;
  }
`;

export const Icon = styled.div`
  font-size: 28px;
`;

export const CardTitle = styled.h3`
  margin: 12px 0;
  color: ${({ theme }) => theme.colors.cardTittle};
`;


export const Price = styled.div`
  font-size: 32px;
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.cardTittle};

`;

export const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.cardTittle};
`;

export const List = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.cardTittle};
  margin: 24px 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 8px;
  }
`;

export const Note = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.cardTittle};
`;
