import styled from "styled-components";

const Title = styled.h1`
  font-size: ${({ size, theme }) => size || theme.fontSizes.Title};
  color: ${({ color, theme }) => color || theme.colors.primary};
  text-align: ${({ align }) => align || 'center'};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: 1rem;


`;

export default Title;
