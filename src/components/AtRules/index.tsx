import React from 'react';
import Grid from 'src/components/Grid';
import Code from 'src/components/Code';

const AtRules: React.FC = () => {
  return (
    <>
      <Grid>
        <h4>@use</h4>
      </Grid>
      <Grid>
        <p>Description</p>
      </Grid>
      <Code
        input={`
        .class {
          color: red;

          span {
            color: green;
          }
        }
        `}
      />
    </>
  );
};

export default AtRules;
