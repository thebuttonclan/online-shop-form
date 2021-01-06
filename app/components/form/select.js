import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Checkbox = props => {
  return (
    <>
      <div className="bc-gov-dropdown-wrapper">
        <div className="fa-chevron-down">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <select
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
        </select>
      </div>
      <style jsx>
        {`
          .bc-gov-dropdown {
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
          }

          .fa-chevron-down {
            pointer-events: none;
            position: absolute;
            top: 0;
            right: 1em;
          }

          .bc-gov-dropdown-wrapper {
            position: relative;
            display: inline;
          }

          :focus {
            outline: 4px solid #3b99fc;
            outline-offset: 1px;
          }
        `}
      </style>
    </>
  );
};

export default Checkbox;
