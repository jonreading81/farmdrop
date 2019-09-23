
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';

export const StyledProductGrid = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  list-style-type: none;
  margin: 0;
  padding:0;
  
  @media ${breakpoints[1]} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
`;