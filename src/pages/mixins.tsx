import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Mixins from 'src/components/Mixins';

const MixinsPage: React.FC = () => {
  return (
    <GeneralLayout title='Mixins'>
      <Mixins />
    </GeneralLayout>
  );
};

export default MixinsPage;