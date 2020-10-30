import React from 'react';
import Grid from 'src/components/Grid';
import Code from 'src/components/Code';

const Placeholders: React.FC = () => {
  return (
    <>
      <Code input={`%button {
  border: 1px solid;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
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
  display: inline-block;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
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
<Grid>
  <h6>placeholders vs classes</h6>
</Grid>
<Code input={`.button-default {
  border: 1px solid;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: gray;
}

.button-primary {
  @extend .button-default;
  color: blue;
}

.button-secondary {
  @extend .button-default;
  color: red;
}
`} />
    </>
  );
};

export default Placeholders;
