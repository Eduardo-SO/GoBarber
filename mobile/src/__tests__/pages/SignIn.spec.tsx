import React from 'react';

import { render } from 'react-native-testing-library';

import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should contains email and password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    const emailInput = getByPlaceholder('Email');
    const passwordInput = getByPlaceholder('Senha');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
});
