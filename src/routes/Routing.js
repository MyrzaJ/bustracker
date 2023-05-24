import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Header from '../components/layout/Header/Header';
import { ALL_ROUTES } from './AllRoutes';
import Footer from '../components/layout/Footer/Footer';

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
                {
                    ALL_ROUTES?.map((route) =>
                        <Route path={route.link} key={route.id} element={route.element} />)
                }
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;