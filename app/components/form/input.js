const Input = props => {
  return (
    <>
      <input
        type={props.schema.inputType}
        placeholder="Search..."
        value={props.value || ''}
        name={props.schema.name}
        onChange={e => props.onChange(e.target.value)}
        required={props.schema.required || null}
      />
      <style jsx>
        {`
          input {
            font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
            font-size: 18px;
            height: 34px;
            border: 2px solid #606060;
            margin-top: 5px;
            margin-bottom: 15px;
            border-radius: 4px;
            padding: 5px 5px 5px 7px;
          }
          & :focus {
            outline: 4px solid #3b99fc;
            outline-offset: 1px;
          }
        `}
      </style>
    </>
  );
};

export default Input;
