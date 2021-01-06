import styled from 'styled-components';

const Slabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Scheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  outline: 2px solid #606060;
  top: 4px;

  &:after {
    content: ${`"\\2713"`};
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
`;

const Sinput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${Scheckmark} {
    background-color: #606060;
    opacity: 1;

    &:after {
      display: block;
    }
  }
`;

const Checkbox = props => {
  return (
    <>
      <Slabel className="checkbox">
        {props.schema.title}
        <Sinput
          type="checkbox"
          value={props.schema.default || false}
          name={props.schema.name}
          onChange={e => props.onChange(!props.value)}
          required={props.schema.isRequired || null}
        />
        <Scheckmark className="checkmark"></Scheckmark>
      </Slabel>
    </>
  );
};

export default Checkbox;
