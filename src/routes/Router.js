import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Inventory from '../views/Inventory';
import ViewElement from '../views/ViewElement';
import UpdateElement from '../views/UpdateElement';
import OrderElement from '../views/OrderElement';
import {Header} from "../components/Header";
import { Footer } from '../components/Footer';
import {Action} from '../components/Action';
import {useElements} from "../hooks/useElements";
import Providers from '../views/Providers';
import ModifiedElement from '../views/ModifiedElement';

function Router() {
    const elements= useElements()[0];
    const providers= useElements()[1];
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutHome><Home /></LayoutHome>} />
                <Route path="/inventory" element={<Layout><Inventory rows={elements} /></Layout>} />
                <Route path="/viewelement/:id" element={<Layout><ViewElement/></Layout>} />
                <Route path="/updateelement/:id" element={<Layout><UpdateElement/></Layout>} />
                <Route path="/orderelement" element={<Layout><OrderElement/></Layout>} />
                <Route path="/providers" element={<Layout><Providers rows={providers} /></Layout>} />
                <Route path="/modifiedelement" element={<Layout><ModifiedElement/></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Action text="Home" path="/" delay={1000} />
        <Footer/>

    </>
);
const LayoutHome = ({children}) => (
    <>
        <Header />
        {children}
        <Footer/>
    </>
);


export default Router;