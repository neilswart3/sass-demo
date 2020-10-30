import React from 'react';
import Code from 'src/components/Code';
import Grid from '../Grid';

const ListsMapsLoops: React.FC = () => {
  return (
    <>
      <Grid>
        <h6>Lists</h6>
      </Grid>
      <Code input={`$colors: red, green, blue;

@each $color in $colors {
  .button-#{$color} {
    color: $color;
    padding: 1rem;
    border: 1px solid;
  }
}
`} />
      <Grid>
        <h6>Maps</h6>
      </Grid>
      <Code height={800} input={`@use 'sass:map';

$icons: (car: '\e632', house: '\e296', open: '\e223');

@each $name, $icon in $icons {
  .icon-#{$name} {
    &::before {
      content: '#{$icon}';
    }
  }
}



$icons2: 
  next '\e632' red 12px,
  cart '\e296' green 14px,
  close '\e212' blue 16px;

@each $name, $glyph, $color, $size in $icons2 {
  .icon-#{$name} {
    &::before {
      content: $glyph;
      font-size: $size;
      color: $color;
    }
  }
}



$type: ('size': 16px, 'line-height': 1.25, 'weight': regular);

.class {
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      font-size: map.get($type, 'size');
    }
  }
}
`} />
    </>
  );
};

export default ListsMapsLoops;