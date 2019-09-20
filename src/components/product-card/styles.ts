import styled from 'styled-components';
import { grey_1, grey_2, green_1 } from '../../constants/colors';

export const StyledProductCard = styled.section`
  border: 1px solid ${grey_2};
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTitle= styled.h1`
  font-size 18px;
  font-weight: 500;
`;

export const StyledProducer = styled.h2`
  color: ${green_1};
  font-size: 15px;
  font-weight: 400;
  margin: 1.5em 0;
`;

export const StyledPricing = styled.div`
  padding: 1.5rem 1rem;
`;

export const StyledDetails = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

export const StyledMeasurement = styled.h3`
  text-transform: uppercase;
  color: ${grey_1};
  font-weight: 400;
  font-size: 16px;
`;