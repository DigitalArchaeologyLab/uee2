import React from 'react';
import ReactDOM from 'react-dom';
import ReferenceList from './ReferenceList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReferenceList />, div);
});
