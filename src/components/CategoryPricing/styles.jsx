// styles.js
import styled from "styled-components";

// Contenedor general de la sección
export const Wrapper = styled.div`
  padding: 64px 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Título de la sección
export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 48px;
  color: #111;
`;

// Grilla de cards
export const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;
