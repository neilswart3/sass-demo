import React from 'react';
import Grid from 'src/components/Grid';
import ColorScale from './ColorScale';

const BuiltInModules: React.FC = () => {
  return (
    <>
      <Grid>
        <h4>Sass color</h4>
      </Grid>
      <ColorScale />
    </>
  );
};

export default BuiltInModules;
