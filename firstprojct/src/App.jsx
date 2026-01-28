import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'
import Parent from './components/ParentComponent'
import Form from './hooks/Form';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import './App.css'
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Reducer from './hooks/Reducer';
import {createContext} from "react"
export const userContext =createContext()
const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/products/:id" element={<ProductDetails/>}/>
     <Route path ="/form" element ={<Form/>}/>
      <Route path ="/State" element ={<State/>}/>
     <Route path='/reducer' element={<Reducer/>}/>
    </Routes>
    </>
  );
};

export default App;