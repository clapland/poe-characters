import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LadderPage from './LadderPage';

const App = () => {
    return (
        <Router>
            <div className="ui container">
                <Switch>
                        <Route exact path="/" component={LadderPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;