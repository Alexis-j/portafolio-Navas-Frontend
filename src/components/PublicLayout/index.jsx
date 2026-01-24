import Footer from '../Footer';
import Navbar from '../Navbar';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PageWrapper = styled.main`
  animation: fadeSlideIn 0.8s ease;
`;


export default function PublicLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageWrapper key={location.pathname}>
        {children}
      </PageWrapper>
      <Footer />
    </>
  );
}
