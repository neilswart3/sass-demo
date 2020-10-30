import React from 'react';
import FeatureSection from 'src/components/FeatureSection';

const ColorScale: React.FC = () => {
  return (
    <FeatureSection
      name='color.scale'
      code={`
@use 'sass:color';

$primary-color: #2791fb;

.button-light {
  color: $primary-color;
  border: 1px solid color.scale($primary-color, $lightness: 20%);
  background-color: lighten($primary-color, 20%);
}

.button-dark {
  color: $primary-color;
  border: 1px solid color.scale($primary-color, $lightness: -35%);
  background-color: darken($primary-color, 35%);
}
        `}
    />
  );
};

export default ColorScale;
