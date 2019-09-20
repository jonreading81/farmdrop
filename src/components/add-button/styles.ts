
import styled from 'styled-components';
import { green_1, white, grey_2} from '../../constants/colors';
import {darken} from 'polished';

export const StyledWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledAddButton =  styled.button`
  background: ${green_1};
  color: ${white};
  font-size: 1rem;
  font-weight: 700;
  height:40px;
  flex: 1 1 0%;
  cursor: pointer;
  transition: 0.3s background;
  :hover {
    background: ${darken(0.1, green_1)};
  };
`;

export const StyledQuantityButton =  styled.button`
  height:40px;
  width: 40px;
  padding-top:5px;
  background: ${grey_2};
  border: 1px solid ${darken(0.1, grey_2)};
  cursor: pointer;
`;

export const StyledQuantityButtonOptions =  styled.div`
  display: flex;
  align-items: center;
`;

export const StyledQuantityText =  styled.div`
  width: 30px;
  padding-top: 0;
  text-align:center;
`;

export const StyledBox =  styled(StyledQuantityButton)`
  background: ${white};
  margin-right:10px;
  cursor: none;
`;