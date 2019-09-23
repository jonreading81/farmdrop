import styled from 'styled-components';
import { green_1, white, grey_2} from '../../constants/colors';
import { StyledContentWrapper } from '../../styles/layout';

export const StyleHeader = styled.header`
  position:fixed;
  z-index: 1;
  top:0;
  background: ${white};
  width:100%;
  border-bottom: 1px solid ${grey_2};
`;

export const StyledMasthead = styled.div`
  background: ${green_1};
  height: 60px;
`;

export const StyledBasketWrapper = styled.div`
  margin-top:10px;
  height: 30px;
`;

export const StyledBasketContentWrapper = styled(StyledContentWrapper)`
  display:flex;
  justify-content: flex-end;
`;

export const StyledIconWrapper = styled.div`
  position:relative;
`;

export const StyledBasketCount = styled.div`
    position: absolute;
    right: 0;
    top: 7px;
    color: ${white};
    font-size: 10px;
    width: 20px;
    text-align: center;
`; 
