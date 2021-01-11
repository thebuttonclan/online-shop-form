import React from 'react';
import { Button, Icon, StepContent } from 'semantic-ui-react';
import styled from 'styled-components';

const SrightContent = styled.div`
  display: flex;
  justify-content: right;
`;

export default function ArrayFieldTemplate(props) {
  const { title, TitleField } = props;
  const { $id: id } = props.idSchema;
  return (
    <div>
      <TitleField title={title} />
      <noscript>
        <textarea />
      </noscript>
      {props.items.map(element => {
        return (
          <div key={element.key}>
            {element.children}
            <SrightContent className="ui right">
              <Button className="right" color="red" icon onClick={element.onDropIndexClick(element.index)}>
                Delete
                <Icon name="trash" />
              </Button>
            </SrightContent>
          </div>
        );
      })}
      {props.canAdd && typeof window === 'object' && (
        <div>
          <Button id={`btn-add-${id}`} className="right" color="green" icon onClick={props.onAddClick}>
            <Icon name="plus" />
            Add {title}
          </Button>
        </div>
      )}
    </div>
  );
}