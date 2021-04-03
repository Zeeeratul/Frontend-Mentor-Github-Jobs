import React from 'react';
import { useTheme } from './utils/useTheme';
import Header from './component/Header';
import Index from './pages/index/';
import Job from './pages/job/';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

function App() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={`app theme-${theme}`}>
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </div>
    )
}

export default App;