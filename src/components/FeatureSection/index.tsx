import React from 'react';
import Grid from 'src/components/Grid';
import Code from 'src/components/Code';

interface Props {
  name: string;
  code: string;
}

const FeatureSection: React.FC<Props> = ({ name, code }) => {
  return (
    <>
      <Grid>
        <h6>{name}</h6>
      </Grid>
      <Code input={code} />
    </>
  );
};

export default FeatureSection;
