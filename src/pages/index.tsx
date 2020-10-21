import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Grid from 'src/components/Grid';
import Button from 'src/components/Button';

const IndexPage = () => (
  <GeneralLayout title='Index Page' sub='Index page content'>
    <Grid>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          euismod neque vitae magna sagittis auctor. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. In mollis accumsan arcu pharetra
          ornare. Nulla vitae tortor vitae ligula pulvinar sodales. Curabitur
          quis velit ac orci bibendum convallis sed fermentum augue. Curabitur
          in viverra purus. Sed dignissim quis ipsum id elementum. Nunc pulvinar
          purus elit, quis bibendum lectus condimentum ac.
        </p>
        <Button>Read More</Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          euismod neque vitae magna sagittis auctor. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. In mollis accumsan arcu pharetra
          ornare. Nulla vitae tortor vitae ligula pulvinar sodales. Curabitur
          quis velit ac orci bibendum convallis sed fermentum augue. Curabitur
          in viverra purus. Sed dignissim quis ipsum id elementum. Nunc pulvinar
          purus elit, quis bibendum lectus condimentum ac.
        </p>
        <Button color='primary'>Read More</Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          euismod neque vitae magna sagittis auctor. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. In mollis accumsan arcu pharetra
          ornare. Nulla vitae tortor vitae ligula pulvinar sodales. Curabitur
          quis velit ac orci bibendum convallis sed fermentum augue. Curabitur
          in viverra purus. Sed dignissim quis ipsum id elementum. Nunc pulvinar
          purus elit, quis bibendum lectus condimentum ac.
        </p>
        <Button color='secondary'>Read More</Button>
      </div>
    </Grid>
  </GeneralLayout>
);

export default IndexPage;
