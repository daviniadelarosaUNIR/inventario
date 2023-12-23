import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Inventory from '../views/Inventory';
import ViewElement from '../views/ViewElement';
import UpdateElement from '../views/UpdateElement';
import OrderElement from '../views/OrderElement';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useElements } from "../hooks/useElements";
import Providers from '../views/Providers';
import ModifiedElement from '../views/ModifiedElement';

function Router() {
  const { data: elements, updateElement } = useElements();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/inventory" element={<Layout><Inventory rows={elements} /></Layout>} />
        <Route path="/viewelement/:id" element={<Layout><ViewElement updateElement={updateElement} /></Layout>} />
        <Route path="/updateelement/:id" element={<Layout><UpdateElement updateElement={updateElement} /></Layout>} />
        <Route path="/orderelement/:id" element={<Layout><OrderElement /></Layout>} />
        <Route path="/providers" element={<Layout><Providers rows={elements} /></Layout>} />
        <Route path="/modifiedelement" element={<Layout><ModifiedElement /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);



export default Router;
