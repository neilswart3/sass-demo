import React from 'react';
import Code from 'src/components/Code';

const Mixins: React.FC = () => {
  return (
    <Code height={700} input={`$lg: 1024;

@mixin media($size) {
  @media only screen and (min-width: #{$size}px) {
    @content;
  }
}
    
@mixin button($color) {
  color: $color;
  border: 1px solid;
  padding: 1.5rem;
}

button {
  @include button(red);

  @include media($lg) {
    color: blue;
  }
}

p {
  color: #333;
  margin-bottom: 1rem;

  @include media($lg) {
    margin-bottom: 1.5rem;
  }
}
`} />
  );
}

export default Mixins;