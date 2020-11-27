import React from 'react';
import ReactDOM from 'react-dom';
import HabitListPage from './HabitListPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HabitListPage />,div);
    ReactDOM.unmountComponentAtNode(div);
});