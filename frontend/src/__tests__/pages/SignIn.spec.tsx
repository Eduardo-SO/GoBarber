import React from 'react';

import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

describe('SignIn page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    console.log(debug);
  });
});
