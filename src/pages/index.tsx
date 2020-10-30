import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Grid from 'src/components/Grid';
import Button from 'src/components/Button';

const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

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
    <Grid>
      <div>
        <h1>Typography h1</h1>
        <h2>Typography h2</h2>
        <h3>Typography h3</h3>
        <h4>Typography h4</h4>
        <h5>Typography h5</h5>
        <h6>Typography h6</h6>
        <p>Typography p</p>
      </div>
    </Grid>
    <Grid>
      <ol>
        <li>Aliquam ut lorem non odio blandit venenatis finibus et sem.</li>
        <li>In ultrices leo in lobortis vulputate.</li>
        <li>Integer sit amet ante a erat rhoncus pretium vel a nulla.</li>
        <li>Vivamus eget ex porta, lobortis nisi non, congue lectus.</li>
        <li>Proin egestas ipsum in sapien pretium tristique.</li>
      </ol>
    </Grid>
  </GeneralLayout>
);

export default IndexPage;
