import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from "./pages/header";
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
     margin:0;
  }
`


const App = ({ route }) => {
    return (
        <Fragment>
           <GlobalStyle />
            <Header/>
            {renderRoutes(route.routes)}
        </Fragment>
    )
};

export default {
    component: App
};