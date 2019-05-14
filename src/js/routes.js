/*
    This is here where all the routes lives
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Layout
import PageLayout from './layouts/PageLayout';

// Pages
import PageHome from './pages/Home';
import ServicePage from './pages/Services';


class Routes extends Component {
    render() {
        return (
            <PageLayout>
                <Route exact={true} path="/" component={PageHome} />
                <Route exact={true} path="/services" component={ServicePage} />
            </PageLayout>
        )
    }
}

export default Routes;