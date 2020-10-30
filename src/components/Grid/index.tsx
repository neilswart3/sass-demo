import React from 'react';

export interface Props {
  children: React.ReactNode;
  classNames?: string;
}

const Grid: React.FC<Props> = ({ children, classNames = '' }) => {
  const size = React.Children.toArray(children).length;
  const GridClassNames = `Grid${classNames ? ` ${classNames}` : ''}`;

  return (
    <div className={GridClassNames}>
      <div className={`Grid-inner Grid-${size}`}>{children}</div>
    </div>
  );
};

export default Grid;
