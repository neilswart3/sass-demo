import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  const size = React.Children.toArray(children).length;

  return (
    <div className='Grid'>
      <div className={`Grid-inner Grid-${size}`}>{children}</div>
    </div>
  );
};

export default Grid;
