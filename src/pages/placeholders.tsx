import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Placeholders from 'src/components/Placeholders';

const PlaceholdersPage: React.FC = () => {
  return (
    <GeneralLayout title='Placeholders'>
      <Placeholders />
    </GeneralLayout>
  );
};

export default PlaceholdersPage;
