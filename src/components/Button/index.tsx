import React from 'react';

interface Props {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ children, color = 'default' }) => {
  return <button className={`Button Button-${color}`}>{children}</button>;
};

export default Button;
