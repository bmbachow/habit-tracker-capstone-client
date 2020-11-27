import React from 'react';
import ReactDOM from 'react-dom';
import AddHabitPage from './AddHabitPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddHabitPage />,div);
    ReactDOM.unmountComponentAtNode(div);
});