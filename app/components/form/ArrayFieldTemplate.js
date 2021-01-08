import Input from 'components/form/Input';
import { useEffect } from 'react';

export default function ArrayFieldTemplate(props) {
  const { title, TitleField } = props;
  useEffect(() => {
    const nonScripts = Array(document.querySelectorAll('.noscript'));
    console.log(nonScripts);
    nonScripts.forEach(el => el.remove && el.remove());
  }, []);
  return (
    <div>
      <TitleField title={title} />
      <noscript>
        <textarea />
      </noscript>
      {props.items.map(element => {
        return element.children;
      })}
      {props.canAdd && typeof window === 'object' && (
        <button type="button" onClick={props.onAddClick}>
          Add {title}
        </button>
      )}
    </div>
  );
}
