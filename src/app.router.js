import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import PlayList from './components/PlayList';
import Header from './components/Header';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/playlist" component={ PlayList } />
                <Route path="/playlist/:id" component={null} />
                <Route render={() => (<p>Error 404</p>)} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;