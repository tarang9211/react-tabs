import React from 'react';
import 'material-design-lite/dist/material.lime-red.min.css';
import 'material-design-lite';
import {Tabs, Tab} from './tabs.jsx';

const App = () => (
  <Tabs>
    <Tab title="Title 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nisi viverra, 
        condimentum dolor nec, tincidunt leo. Praesent non lectus nisi. Sed rhoncus eget 
        massa vel finibus. Nullam id tristique orci. Nullam at euismod arcu. Cras quis mauris 
        sed diam semper luctus. Aenean elementum orci vitae quam luctus, vel gravida sem vulputate.
      </p>
    </Tab>
    <Tab title="Title 2" active>
      <p>
        Praesent at pretium felis. Nulla pretium enim non lectus blandit efficitur. 
        Phasellus gravida orci id consequat accumsan. Vivamus ultricies feugiat nisl, 
        sit amet efficitur tellus porttitor a. Donec non varius erat. Curabitur et diam laoreet, 
        ornare augue cursus, elementum ipsum. Nunc sodales, nulla sit amet vulputate dictum, metus 
        magna condimentum libero, quis vestibulum neque sem non mauris. Etiam hendrerit lectus ac pretium 
        faucibus. Nulla tempor consectetur turpis ut vehicula.
      </p>
    </Tab>
  </Tabs>
);

export default App;