import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import AtRules from 'src/components/AtRules';

const AtRulesPage: React.FC = () => {
  return (
    <GeneralLayout title='@ Rules'>
      <AtRules />
    </GeneralLayout>
  );
};

export default AtRulesPage;
