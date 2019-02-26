import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LadderPage from './LadderPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <div className="ui container">
                    <Route exact path="/" component={LadderPage} />
                </div>
            </Switch>
        </Router>
    )
}

export default App;