import styled from 'styled-components';
import { green_1, white} from '../../constants/colors';

import { StyledContentWrapper } from '../../styles/layout';

export const StyleHeader = styled.header`
`;

export const StyledMasthead = styled.div`
  background: ${green_1};
  height: 60px;
`;

export const StyledBasketWrapper = styled.div`
  height: 30px;
`;

export const StyledBasketContentWrapper = styled(StyledContentWrapper)`
  display:flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const StyledIconWrapper = styled.div`
  position:relative;
`;

export const StyledBasketCount = styled.div`
    position: absolute;
    right: 0;
    top: 6px;
    color: ${white};
    font-size: 10px;
    width: 20px;
    text-align: center;
`; 
