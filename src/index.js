import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ErrorBoundary from './components/ErrorBoundary';
import './utils/devWarnings'; // Development warning tracking

// Suppress specific third-party warnings we can't control
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args.join(' ');
  
  // Suppress specific warnings from third-party libraries and React Router v5
  if (
    message.includes('findDOMNode is deprecated') ||
    message.includes('componentWillReceiveProps') ||
    message.includes('componentWillUpdate') ||
    message.includes('componentWillMount') ||
    message.includes('Legacy context API') ||
    message.includes('Warning: ReactDOM.render is no longer supported') ||
    message.includes('Warning: Each child in a list should have a unique "key" prop') && message.includes('plotly') ||
    message.includes('Warning: Failed prop type') && message.includes('antd') ||
    message.includes('React Router') ||
    message.includes('useNavigate') ||
    message.includes('useHistory') ||
    message.includes('Router.Consumer') ||
    message.includes('withRouter') ||
    message.includes('UNSAFE_componentWillMount') ||
    message.includes('UNSAFE_componentWillReceiveProps') ||
    message.includes('UNSAFE_componentWillUpdate')
  ) {
    return; // Suppress these warnings
  }
  
  // Show all other warnings
  originalWarn.apply(console, args);
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ChakraProvider> 
        <App />
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
