import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';

export const StyledContentWrapper = styled.div`
  max-width:1024px;
  margin: 0 auto;
  padding: 0 0.5rem;
  @media ${breakpoints[1]} {
    padding: 0 1rem;
  }
`;

export const StyledNotice = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    text-align: center;
  }
`;
