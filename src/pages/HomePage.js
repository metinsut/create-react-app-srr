import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

class HomePage extends Component {

    head() {
        return (
            <Helmet>
                <title>HomePage</title>
                <meta name="description" content="Homepage" />
                <meta property="og:title" content="Homepage" />
                <meta property="og:description" content="Homepage Desc." />
            </Helmet>
        )
    }

    render() {
        return (
            <Fragment>
                {this.head()}
                <h3>Home Page</h3>
            </Fragment>
        )
    }
}


export default {
    component: HomePage
};