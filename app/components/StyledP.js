import styled from 'styled-components';
import { DEFAULT_FONT_SIZE, PRIMARY_FONT, SECONDARY_FONT_COLOUR, MIN_PADDING } from 'theme';

export default styled.p`
  ${props =>
    props.color && props.color === 'secondary' ? 'color: ' + SECONDARY_FONT_COLOUR : 'color: ' + props.color};
  font: ${props => (props.font ? props.font : PRIMARY_FONT)};
  font-weight: ${props => (props.bold ? 'bold' : props.light ? 'light' : 'normal')};
  font-size: ${props => (props.fontSize ? props.fontSize : DEFAULT_FONT_SIZE)};
  ${props =>
    !props.paddingTop &&
    !props.paddingRight &&
    !props.paddingBottom &&
    !props.paddingLeft &&
    !props.padding &&
    'padding: ' + MIN_PADDING + ' ' + MIN_PADDING + ' ' + MIN_PADDING + ' 0'};
  ${props => props.padding && props.padding === 'min' && 'padding: ' + MIN_PADDING};
  ${props =>
    props.paddingTop && props.paddingTop === 'min'
      ? 'padding-top: ' + MIN_PADDING
      : 'padding-top: ' + props.paddingTop};
  ${props =>
    props.paddingRight && props.paddingRight === 'min'
      ? 'padding-right: ' + MIN_PADDING
      : 'padding-right: ' + props.paddingRight};
  ${props =>
    props.paddingBottom && props.paddingBottom === 'min'
      ? 'padding-bottom: ' + MIN_PADDING
      : 'padding-bottom: ' + props.paddingBottom};
  ${props =>
    props.paddingLeft && props.paddingLeft === 'min'
      ? 'padding-left: ' + MIN_PADDING
      : 'padding-left: ' + props.paddingLeft};
  ${props => props.opacity && 'opacity: ' + props.opacity};
`;
