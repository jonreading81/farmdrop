import styled from 'styled-components';
import {red} from '../../constants/colors';

interface StyledPriceProps {
  isSale?: Boolean
}

export const StyledSaleText =  styled.span`
  display:block;
  color: ${red};
  font-size: 15px;
`;

export const StyledSalePrice  =  styled.span`
  display:block;
  font-size:0.9rem;
  margin-top:1rem;
  text-decoration: line-through;
  font-size: 13px;
`;

export const StyledPrice =  styled.div`
  display:block;
  color: ${(props: StyledPriceProps)  => props.isSale ? red : 'inherit'};
  font-size: 21px;
  font-weight: 400;
  margin-top:1rem;
`;

export const StyleMeasurement =  styled.span`
  font-size: 13px;
  display:block;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledPriceWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;