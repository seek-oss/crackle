import * as React from 'react';

export const List: React.FC<{
  items: React.ReactElement[];
  separator: string;
}> = ({ items, separator }) => (
  <>
    {items.map((node, index) => (
      <React.Fragment key={node.key}>
        {index > 0 && separator}
        {node}
      </React.Fragment>
    ))}
  </>
);
