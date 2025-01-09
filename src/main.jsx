import { createRoot } from 'react-dom/client'
import './nullAndFonts.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)


document.getElementById('loader').style.opacity = '0';
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
}, 500);