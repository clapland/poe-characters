import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LadderPage from './LadderPage';
import CharacterPage from './CharacterPage';

const App = () => {
    return (
        <Router>
            <div className="ui container">
                <Switch>
                    <Route exact path="/" component={LadderPage} />
                    <Route exact path="/profile/:account/:character" component={CharacterPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;