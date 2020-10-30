import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import BuiltInModules from 'src/components/BuiltInModules';

const BuiltInModulesPage: React.FC = () => {
  return (
    <GeneralLayout title='Built in modules'>
      <BuiltInModules />
    </GeneralLayout>
  );
};

export default BuiltInModulesPage;
