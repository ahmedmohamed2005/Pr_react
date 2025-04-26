import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ApicontextProvider } from './context/ApiContext.jsx'
import { CartContextProvider } from './context/cartcontext.jsx'
import { WishContextProvider } from './context/AddWish.jsx'


createRoot(document.getElementById('root')).render(
    
    <CartContextProvider >
    <ApicontextProvider >
    <WishContextProvider>
        <App />
    </WishContextProvider>
    </ApicontextProvider>
    </CartContextProvider>
)
