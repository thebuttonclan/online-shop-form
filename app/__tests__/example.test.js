import { render } from '@testing-library/react';
import { Loader } from 'semantic-ui-react';
import * as React from 'react';

describe('Test', () => {
  it('Loads', async () => {
    render(<Loader />);
  });
});
