import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
)
