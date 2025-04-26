import React  , {use, useEffect, useState} from 'react';
import {createBrowserRouter,createHashRouter,RouterProvider} from 'react-router-dom';
import toast , {Toaster} from "react-hot-toast"
import Swal from 'sweetalert2'
// links To Components---
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Child1 from './components/Home/Featured/Child1/Child1';
import Child2 from './components/Home/Featured/Child2/Child2';
import Child3 from './components/Home/Featured/Child3/Child3';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import SingleProducts from './components/Shop/SingleProducts/SingleProducts';
import Nested1 from './components/Shop/SingleProducts/nested_1/nested_1';
import Nested2 from './components/Shop/SingleProducts/nested_2/nested_2';
import Nested3 from './components/Shop/SingleProducts/nested_3/nested_3';
import Wishlist from './components/wishlist/wishlist';

function App() {

// https://dummyjson.com/products
// https://dummyjson.com/products/categories


const router = createHashRouter([
  {
    path : '' ,
    element : <Layout /> ,
    children : [
      {index : '' , element: <Home /> , children:[
        {path : '' , element : <Child1   />} ,
        {path : 'Best' , element : <Child2   />} ,
        {path : 'featured' , element : <Child3   />} ,
      ] },
      
      {path : 'contact' , element: <Contact />} ,
      
      {path : 'about' , element: <About />} ,

      {path : 'cart' , element: <Cart />} ,

      
      {path : 'shop' , element: <Shop />} ,

      {path : 'wishlist' , element: <Wishlist />} ,

      {path : '/singlepro/:id' , element: <SingleProducts /> , children : [
         {path : '' , element: <Nested1  />} ,
         {path : 'nested_2' , element: <Nested2  />} ,
         {path : 'nested_3' , element: <Nested3  />} ,     
       ]} ,

    ]}
])




 

  return (
    <main>
      <Toaster />
      <RouterProvider router={router} />
    </main>
  )
}

export default App
