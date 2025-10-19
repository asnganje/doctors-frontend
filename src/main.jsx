import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer position='top-center'/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
