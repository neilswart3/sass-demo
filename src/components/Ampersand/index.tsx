import React from 'react';
import Code from 'src/components/Code';

const Ampersand: React.FC = () => {
  return (
    <Code height={1000} input={`.button {
  border: 1px solid;
  color: blue;
  padding: 1.5rem;
  font-size: 18px;

  &:hover {
    color: white;
    background-color: blue;
  }

  &__blurb {
    background-color: #aaa;

    &--sm {
      font-size: 16px;
      padding: 1rem;
    }

    &--lg {
      font-size: 22px;
      padding: 2rem;
    }
  }
}

.container {
  .module {
    .button {
      border: 1px solid;
      color: blue;
      padding: 1.5rem;
      font-size: 18px;

      &__blurb {
        background-color: #aaa;

        &--sm {
          font-size: 16px;
          padding: 1rem;

          .home & {
            padding: 5rem;
          }
        }
      }
    }
  }
}
`} />
  );
};

export default Ampersand;