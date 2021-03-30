import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './component/Header';
import Index from './pages/index/';
import Job from './pages/job/';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    const { theme, changeTheme } = useTheme()

    return (
        <div className={`app theme-${theme}`}>
            <Router>
                <Header theme={theme} changeTheme={changeTheme} />
                <Switch>
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route path="/:jobId">
                        <Job />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;