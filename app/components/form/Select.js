import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Swrapper = styled.div`
  position: relative;
  display: inline;
  :focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }
`;

const Sicon = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 1em;
`;

const Sselect = styled.select`
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
  color: #313132;
  background: white;
  box-shadow: none;
  border: 2px solid #606060;
  min-width: 200px;
  padding: 8px 45px 8px 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Select = props => {
  return (
    <>
      <Swrapper className="bc-gov-dropdown-wrapper">
        <Sicon className="fa-chevron-down">
          <FontAwesomeIcon icon={faChevronDown} />
        </Sicon>
        <Sselect
          className="bc-gov-dropdown"
          name={props.schema.name}
          value={props.value || ''}
          onChange={e => props.onChange(e.target.value)}
          required={props.schema.isRequired || null}
        >
          {props.schema.enum.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Sselect>
      </Swrapper>
    </>
  );
};

export default Select;
