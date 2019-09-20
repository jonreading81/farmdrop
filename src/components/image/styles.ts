import styled from 'styled-components';
import { green_2, white} from '../../constants/colors';
import { rgba } from 'polished';

interface IStyledImageProps {
  url: string,
};

interface IStyledOverlayProps {
  showOverlay: Boolean,
};

export const StyledImage = styled.div`
  max-width: 100%;
  background-image: url('${(props: IStyledImageProps)  => props.url}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:80%;
  position:relative;
`;

export const StyledTag = styled.span`
  position: absolute;
  left: 0;
  bottom:0;
  background: ${green_2};
  color: ${white}
  padding:0.6em;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const StyledOverlay= styled.div`
  background: ${rgba(green_2, 0.4)};
  display: flex;
  position: absolute;
  height: 100%;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  opacity: ${(props: IStyledOverlayProps) => (props.showOverlay ? 1 : 0)};
  transition: 0.3s opacity;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${white}
`;