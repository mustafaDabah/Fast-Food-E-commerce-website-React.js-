import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import useStyles from './styles';
import ScrollToTop from '../utils/ScrollToTop';

function Layout({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ScrollToTop/>
            <Navbar/>
            <div className={classes.toolbar} />
                <div className={classes.content}>
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default Layout
