/* eslint-disable no-undef */
import { render, waitFor } from '@testing-library/react';
import Page from 'pages/apply/[page]';
import { saveApplication } from 'services/application';
import '@testing-library/jest-dom';

jest.mock('services/application', () => ({
  saveApplication: jest.fn(() => ({})),
}));

// Avoid Link errors with mocked router, see https://github.com/vercel/next.js/issues/16864
jest.mock('next/link', () => ({ children }) => children);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: () => '/2',
      events: {
        on: jest.fn((event, callback) => {
          callback();
        }),
        off: jest.fn((event, callback) => {
          callback();
        }),
      },
    };
  },
}));

describe('Continue Button', () => {
  it('toggles a loader before and after the API request when clicked', async () => {
    const page = render(<Page formData={{}} page="2" />);
    const button = page.getByText('Continue');

    expect(button).not.toHaveClass('loading');
    button.click();

    expect(button).toHaveClass('loading');
    expect(saveApplication).toHaveBeenCalled();
    await waitFor(() => expect(button).not.toHaveClass('loading'));
  });
});
