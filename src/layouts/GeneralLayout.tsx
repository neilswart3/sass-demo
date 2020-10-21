import React from 'react';
import NavBar from 'src/components/NavBar';
import Grid from 'src/components/Grid';

interface Props {
  title: string;
  sub?: string;
  children: React.ReactNode;
}

const GeneralLayout: React.FC<Props> = ({ title, sub = '', children }) => {
  return (
    <div className='GeneralLayout'>
      <NavBar />
      <Grid>
        <h1>{title}</h1>
      </Grid>
      {sub && (
        <Grid>
          <h3>{sub}</h3>
        </Grid>
      )}
      {children}
    </div>
  );
};

export default GeneralLayout;
