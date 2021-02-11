import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledHeader = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: 80px;
`;

const Header = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledHeader>{children}</StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
