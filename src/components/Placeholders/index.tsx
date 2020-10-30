import React from 'react';
import Grid from 'src/components/Grid';
import Code from 'src/components/Code';

const Placeholders: React.FC = () => {
  return (
    <>
      <Code input={`%button {
  border: 1px solid;
  padding: 1.5rem;
}

.button-default {
  @extend %button;
  color: gray;
}

.button-primary {
  @extend %button;
  color: blue;
}

.button-secondary {
  @extend %button;
  color: red;
}
`} />
<Grid>
  <h6>placeholders vs mixins</h6>
</Grid>
<Code input={`@mixin button($color) {
  border: 1px solid;
  padding: 1.5rem;
  color: $color;
}

.button-default {
  @include button(gray);
}

.button-primary {
  @include button(blue);
}

.button-secondary {
  @include button(red);
}
`} />
    </>
  );
};

export default Placeholders;
