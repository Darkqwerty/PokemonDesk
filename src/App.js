import React from 'react';
import cn from 'classnames';

import s from './App.css';

const App = () => {
    return (
        <div className={cn(s.header)}>
            This is App Component!
        </div>
    );
};

export default App;