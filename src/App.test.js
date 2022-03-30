import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './store/Store';
import { Provider } from 'react-redux';


test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
