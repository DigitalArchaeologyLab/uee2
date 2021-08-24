import React from 'react';
import ReactDOM from 'react-dom';
import Reference from './Reference';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reference />, div);
});
