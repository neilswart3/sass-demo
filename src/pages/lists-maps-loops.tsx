import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import ListsMapsLoops from 'src/components/ListsMapsLoops';

const ListMapLoopsPage: React.FC = () => {
  return (
    <GeneralLayout title='Lists, Maps and Loops'>
      <ListsMapsLoops />
    </GeneralLayout>
  );
};

export default ListMapLoopsPage;