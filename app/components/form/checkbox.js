const Checkbox = props => {
  return (
    <>
      <label className="checkbox">
        {props.schema.title}
        <input
          type="checkbox"
          value={props.schema.default || false}
          name={props.schema.name}
          onChange={e => props.onChange(!props.value)}
          required={props.schema.isRequired || null}
        />
        <span className="checkmark"></span>
      </label>
      <style jsx>
        {`
          .checkbox {
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
          }

          .checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 16px;
            width: 16px;
            outline: 2px solid #606060;
            top: 4px;
          }

          .checkbox input:checked ~ .checkmark {
            background-color: #606060;
          }

          .checkmark:after {
            content: ${`"\\2713"`};
            color: white;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: none;
          }

          .checkbox input:checked ~ .checkmark:after {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Checkbox;
