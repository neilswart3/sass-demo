import React from 'react';
import Ampersand from 'src/components/Ampersand';
import GeneralLayout from 'src/layouts/GeneralLayout';

const AmpersandPage: React.FC = () => {
  return (
    <GeneralLayout title='Ampersand'>
      <Ampersand />
    </GeneralLayout>
  );
};

export default AmpersandPage;