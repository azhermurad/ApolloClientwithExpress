import React from 'react';
import Header from './Header';

const MainLayout = (props) => {
    return <React.Fragment>
        <Header />
        <main>{props.children}</main>
        <footer>footer</footer>
    </React.Fragment>
};

export default MainLayout;