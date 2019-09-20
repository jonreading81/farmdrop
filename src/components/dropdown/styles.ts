import styled from 'styled-components';
import { grey_3} from '../../constants/colors';

export const StyledSelect = styled.select`
  width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  background-image: none;
  appearance: none;
  text-transform: uppercase;
  padding: 10px 1rem;
  font-size: 14px;
`;

export const StyledWrapper = styled.div`

  background-color: ${grey_3};
  padding-right: 2rem;
  position:relative;
`;

export const StyledChevronWrapper = styled.div`
  position: absolute;
  right:1rem;
  top: 14px;
  svg {
    width:0.8rem;
    height: 0.8rem;
  }
`;