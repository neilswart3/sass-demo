import React from 'react';
import FeatureSection from 'src/components/FeatureSection';

const ColorScale: React.FC = () => {
  return (
    <FeatureSection
      code={ /* css */`@use 'sass:color';

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

.button-complement {
  color: color.complement($primary-color);
}

.button-adjust {
  color: color.adjust($primary-color, $red: 221, $blue: -30);
}

.color-saturation {
  color: $primary-color;
  width: color.saturation($primary-color);
}
        `}
    />
  );
};

export default ColorScale;
