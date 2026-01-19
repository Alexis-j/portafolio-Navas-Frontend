import styled from "styled-components";

const Title = styled.h1`
  font-size: ${({ size, theme }) => size || theme.fontSizes.Title};
  color: ${({ color, theme }) => color || theme.colors.primary};
  text-align: ${({ align }) => align || 'center'};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: ${({ size, theme }) =>
      size ? `calc(${size} * 0.7)` : `calc(${theme.fontSizes.Title} * 0.7)`};
  }
`;

export default Title;
