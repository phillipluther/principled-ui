import React from 'react';
import { Button } from 'principled-ui';

const Buttons = () => (
  <section>
    <h2>Buttons</h2>

    <div>
      <Button>Default Button</Button>
    </div>
    <div>
      <Button primary>Primary Button</Button>
    </div>
    <div>
      <Button hollow>Hollow Button</Button>
    </div>
    <div>
      <Button disabled>Disabled Button</Button>
    </div>
  </section>
);

export default Buttons;
