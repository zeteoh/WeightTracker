import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from '../views/Homepage';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes